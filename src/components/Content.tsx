import { DataType } from "../DataTypes";
import useWindowDimensions from "../hooks/useWindowDimesions";

type ContentType = {
  data: DataType;
};
const Content = ({ data }: ContentType) => {
  const { width } = useWindowDimensions();
  return (
    <section className="content">
      {width && width < 768 ? (
        <>
          <h2>{data.name}</h2>
          <p>{data.overview.content}</p>

          <div>
            <span>Source:</span>
            <a href={data.overview.source}>Wikipedia</a>
            <img src="/assets/icon-source.svg" alt="Source icon" />
          </div>
        </>
      ) : (
        <>
          <div className="content__wrapper">
            <h2>{data.name}</h2>
            <p>{data.overview.content}</p>
            <div>
              <span>Source:</span>
              <a href={data.overview.source}>Wikipedia</a>
              <img src="/assets/icon-source.svg" alt="Source icon" />
            </div>
          </div>
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
        </>
      )}
    </section>
  );
};

export default Content;
