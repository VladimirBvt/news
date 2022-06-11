import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">Logo</div>
        <h1 className="header__title">News</h1>
      </div>
      <nav className="header__nav">
        <a className="header__link" href="#">
          На главную
        </a>
        <a className="header__link" href="#">
          Новости
        </a>
        <a className="header__link" href="#">
          Профиль
        </a>
      </nav>
    </header>
  );
};
