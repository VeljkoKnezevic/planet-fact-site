import { DataType } from "../DataTypes";
import useWindowDimensions from "../hooks/useWindowDimesions";
import Cards from "./Cards";
import Content from "./Content";

type PlanetProps = {
  data: DataType;
};

const Planet = ({ data }: PlanetProps) => {
  const { width } = useWindowDimensions();

  return (
    <div className="planet">
      {width && width < 768 ? (
        <div className="planet__buttons">
          <button type="button">Overview</button>
          <button type="button">Structure</button>
          <button type="button">Surface</button>
        </div>
      ) : (
        ""
      )}
      <div className="planet__container">
        <img
          className="planet__image"
          src={data.images.planet}
          alt={data.name}
        />
        <Content data={data} />
      </div>
      <Cards data={data} />
    </div>
  );
};

export default Planet;
