import { DataType } from "../DataTypes";

type CardsTypes = {
  data: DataType;
};

const Cards = ({ data }: CardsTypes) => {
  return (
    <section className="cards">
      <article className="card">
        <p className="card__name">Rotation Time</p>
        <p className="card__data">{data.rotation}</p>
      </article>
      <article className="card">
        <p className="card__name">Revolution Time</p>
        <p className="card__data">{data.revolution}</p>
      </article>
      <article className="card">
        <p className="card__name">Radius</p>
        <p className="card__data">{data.radius}</p>
      </article>
      <article className="card">
        <p className="card__name">Average Temp.</p>
        <p className="card__data">{data.temperature}</p>
      </article>
    </section>
  );
};

export default Cards;
