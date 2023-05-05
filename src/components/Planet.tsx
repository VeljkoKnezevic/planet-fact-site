import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataType } from "../DataTypes";
import useWindowDimensions from "../hooks/useWindowDimesions";
import Cards from "./Cards";
import Content from "./Content";

type PlanetProps = {
  data: DataType;
};

const Planet = ({ data }: PlanetProps) => {
  const { width } = useWindowDimensions();
  const location = useLocation();

  const [image, setImage] = useState("");
  const [showGeology, setShowGeology] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = (e.target as HTMLButtonElement).value;

    // Add a class to header and planet

    // Change image that displays
    if (buttonValue === "overview") {
      setImage(data.images.planet);
      setShowGeology(false);
    } else if (buttonValue === "structure") {
      setImage(data.images.internal);
      setShowGeology(false);
    } else {
      setImage(data.images.planet);
      setShowGeology(true);
    }
  };

  // Resets state on planet selector change
  useEffect(() => {
    setShowGeology(false);
    setImage(data.images.planet);
  }, [location]);

  return (
    <div className="planet">
      {width && width < 700 ? (
        <div className="planet__buttons">
          <button onClick={handleClick} value="overview" type="button">
            Overview
          </button>
          <button onClick={handleClick} value="structure" type="button">
            Structure
          </button>
          <button onClick={handleClick} value="surface" type="button">
            Surface
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="planet__container">
        <img
          className="planet__image"
          src={image || data.images.planet}
          alt={data.name}
        />
        {showGeology && (
          <img
            className="planet__geology"
            src={data.images.geology}
            alt={`Surface Geology of ${data.name}`}
          />
        )}
        <Content data={data} handleClick={handleClick} />
      </div>
      <Cards data={data} />
    </div>
  );
};

export default Planet;
