import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import "./styles/styles.scss";
import { DataTypes } from "./DataTypes";
import Planet from "./components/Planet";

const App = () => {
  const [data, setData] = useState<DataTypes>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const json: DataTypes = await response.json();
        setData(json);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      {data && (
        <main>
          <Routes>
            {data.map((planet) => {
              if (planet.name === "Mercury") {
                return (
                  <Route
                    key={planet.name}
                    path="/"
                    element={<Planet data={data[0]} />}
                  />
                );
              }
              return (
                <Route
                  key={planet.name}
                  path={planet.name.toLowerCase()}
                  element={<Planet data={planet} />}
                />
              );
            })}
          </Routes>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;
