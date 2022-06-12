import "./header.css";
import { AppRoutes } from "../../const";
//import { LoginPage } from "../../pages/login-page/login-page";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">Logo</div>
        <h1 className="header__title">News</h1>
        <Link
          className="header__button-sign-in"
          to={AppRoutes.login}
          title={AppRoutes.login}
        >
          Войти
        </Link>
      </div>
      <nav className="header__nav">
        <Link
          className="header__link"
          to={AppRoutes.main}
          title={AppRoutes.main}
        >
          На главную
        </Link>
        <Link
          className="header__link"
          to={AppRoutes.news}
          title={AppRoutes.news}
        >
          Новости
        </Link>
        <Link
          className="header__link"
          to={AppRoutes.profile}
          title={AppRoutes.profile}
        >
          Профиль
        </Link>
      </nav>
    </header>
  );
};
