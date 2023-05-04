import { DataType } from "../DataTypes";
import useWindowDimensions from "../hooks/useWindowDimesions";

type ContentType = {
  data: DataType;
};
const Content = ({ data }: ContentType) => {
  const { width } = useWindowDimensions();
  return (
    <section className="content">
      <div className="content__wrapper">
        <h2 className="content__heading">{data.name}</h2>
        <p className="content__para">{data.overview.content}</p>
        <div className="content__source">
          <span className="content__source__text">Source:</span>
          <a className="content__source__link" href={data.overview.source}>
            Wikipedia
          </a>
          <img
            className="content__source__image"
            src="/assets/icon-source.svg"
            alt="Source icon"
          />
        </div>
      </div>

      {width && width >= 768 ? (
        <div className="content__buttons">
          <button type="button">
            <span>01</span>Overview
          </button>
          <button type="button">
            <span>02</span>Internal Structure
          </button>
          <button type="button">
            <span>03</span>Surface Geology
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Content;
