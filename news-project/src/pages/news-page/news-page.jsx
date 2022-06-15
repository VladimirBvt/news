import "./news-page.css";
import { ItemNews } from "../../components/item-news/item-news";

export const NewsPage = () => {
  return (
    <section className="news">
      <h1 className="news__title">news</h1>
      <ItemNews />
    </section>
  );
};
