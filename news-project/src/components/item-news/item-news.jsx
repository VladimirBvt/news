import "./item-news.css";
import { useSelector } from "react-redux";

export const ItemNews = () => {
  const { news } = useSelector((state) => state);

  return (
    <>
      {news.map((item) => {
        const { title, text, urlImage, id, author } = item;

        return (
          <article className="item-news" key={id}>
            <div className="item-news__img-wrap">
              <img src={urlImage} alt="image" className="item-news__img" />
            </div>
            <div className="item-news__text">
              <div>
                <h3>{title}</h3>
              </div>
              <p>{text}</p>
              <div>
                <span>{author}</span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
