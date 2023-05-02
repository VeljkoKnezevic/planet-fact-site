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
    <div>
      {width && width < 768 ? (
        <>
          <button type="button">Overview</button>
          <button type="button">Structure</button>
          <button type="button">Surface</button>

          <img src={data.images.planet} alt={data.name} />

          <Content data={data} />
          <Cards data={data} />
        </>
      ) : (
        <>
          <img src={data.images.planet} alt={data.name} />
          <Content data={data} />

          <Cards data={data} />
        </>
      )}
    </div>
  );
};

export default Planet;
