import "./item-news.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { INDEX_END } from "../../const";
import { store } from "../../store/store";
import { loadData } from "../../store/action";

export const ItemNews = () => {
  const { news } = useSelector((state) => state);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((res) => res.json())
      .then((el) => store.dispatch(loadData(el.slice(0, INDEX_END))));
  }, []);

  return (
    <>
      {news.map((item) => {
        const { title, body, id } = item;

        return (
          <article className="item-news" key={id}>
            <div className="item-news__img-wrap">
              <img src="#" alt="image" className="item-news__img" />
            </div>
            <div className="item-news__text">
              <div>
                <h3>{title}</h3>
              </div>
              <p>{body}</p>
              <div>
                <span>{id}</span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};
