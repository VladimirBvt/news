import "./news-page.css";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export const NewsPage = () => {
  return (
    <>
      <Header />
      <section className="news">
        <h2>Новости</h2>
        <article>
          <h3>Статья 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta
            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum
            pariatur provident sed sequi vero?
          </p>
        </article>
        <article>
          <h3>Статья 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta
            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum
            pariatur provident sed sequi vero?
          </p>
        </article>
        <article>
          <h3>Статья 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta
            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum
            pariatur provident sed sequi vero?
          </p>
        </article>
        <article>
          <h3>Статья 4</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta
            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum
            pariatur provident sed sequi vero?
          </p>
        </article>
        <article>
          <h3>Статья 5</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium ad, assumenda atque fugit magnam quas quos rerum soluta
            tempora voluptatum! Dignissimos dolorum, expedita modi nostrum
            pariatur provident sed sequi vero?
          </p>
        </article>
      </section>
      <Footer />
    </>
  );
};
