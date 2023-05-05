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

  const [image, setImage] = useState<string>(data.images.planet);
  const [showGeology, setShowGeology] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = e.currentTarget.value;
    const buttons = e.currentTarget.parentElement?.children;

    // Removes the selected class from all elements
    if (buttons) {
      Array.from(buttons).forEach((button) => {
        button.classList.remove("selected");
      });
    }

    // Change image that displays
    // Adds the selected class for styling
    if (buttonValue === "overview") {
      setImage(data.images.planet);
      setShowGeology(false);
      e.currentTarget.classList.add("selected");
    } else if (buttonValue === "structure") {
      setImage(data.images.internal);
      setShowGeology(false);
      e.currentTarget.classList.add("selected");
    } else {
      setImage(data.images.planet);
      setShowGeology(true);
      e.currentTarget.classList.add("selected");
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
          <button
            className="selected"
            onClick={handleClick}
            value="overview"
            type="button"
          >
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
        <img className="planet__image" src={image} alt={data.name} />
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
