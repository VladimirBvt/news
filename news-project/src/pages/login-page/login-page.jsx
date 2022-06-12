import "./login-page.css";

export const LoginPage = () => {
  return (
    <>
      <form className="login-form">
        <h2 className="login-form__title">Login</h2>
        <div className="login-form__username">
          <label className="login-form__label-username" htmlFor="userName">
            Username
          </label>
          <input type="text" id="userName" />
        </div>
        <div className="login-form__password">
          <label className="login-form__label-password" htmlFor="password">
            Password
          </label>
          <input type="password" id="password" />
        </div>
        <button className="login-form__button">Войти</button>
      </form>
    </>
  );
};
