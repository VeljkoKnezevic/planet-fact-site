import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        console.log(err);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <BrowserRouter>
      <Header />
      {data && (
        <main>
          <Routes>
            <Route path="/" element={<Planet data={data[0]} />} />
            <Route path="venus" element={<Planet data={data[1]} />} />
            <Route path="earth" element={<Planet data={data[2]} />} />
            <Route path="mars" element={<Planet data={data[3]} />} />
            <Route path="jupiter" element={<Planet data={data[4]} />} />
            <Route path="saturn" element={<Planet data={data[5]} />} />
            <Route path="uranus" element={<Planet data={data[6]} />} />
            <Route path="neptune" element={<Planet data={data[7]} />} />
          </Routes>
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;
