import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">Logo</div>
        <h1 className="header__title">News</h1>
      </div>
      <nav className="header__nav">
        <a className="header__link">На главную</a>
        <a className="header__link">Новости</a>
        <a className="header__link">Профиль</a>
      </nav>
    </header>
  );
};
