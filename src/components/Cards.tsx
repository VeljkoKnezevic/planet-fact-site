import { DataType } from "../DataTypes";

type CardsTypes = {
  data: DataType;
};

const Cards = ({ data }: CardsTypes) => {
  return (
    <section className="cards">
      <article className="card">
        <p className="card__name">Rotation Time</p>
        <h3 className="card__data">{data.rotation}</h3>
      </article>
      <article className="card">
        <p className="card__name">Revolution Time</p>
        <h3 className="card__data">{data.revolution}</h3>
      </article>
      <article className="card">
        <p className="card__name">Radius</p>
        <h3 className="card__data">{data.radius}</h3>
      </article>
      <article className="card">
        <p className="card__name">Average Temp.</p>
        <h3 className="card__data">{data.temperature}</h3>
      </article>
    </section>
  );
};

export default Cards;
