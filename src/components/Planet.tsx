import { DataType } from "../DataTypes";

type PlanetProps = {
  data: DataType;
};
const Planet = ({ data }: PlanetProps) => {
  return <div>{data.name}</div>;
};

export default Planet;
