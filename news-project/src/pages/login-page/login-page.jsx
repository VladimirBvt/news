import "./login-page.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/action";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <form className="login-form">
        <h2 className="login-form__title">Login</h2>
        <div className="login-form__username">
          <label className="login-form__label-username" htmlFor="userName">
            Username
          </label>
          <input
            required
            type="text"
            id="userName"
            className="login-form__input-username"
          />
        </div>
        <div className="login-form__password">
          <label className="login-form__label-password" htmlFor="password">
            Password
          </label>
          <input
            required
            type="password"
            id="password"
            className="login-form__input-password"
          />
        </div>
        <input
          type="submit"
          className="login-form__button"
          onClick={(event) => {
            event.preventDefault();
            const inputPassword = document.querySelector(
              ".login-form__input-password"
            );
            const passwordValue = inputPassword.value;
            const inputUsername = document.querySelector(
              ".login-form__input-username"
            );
            const usernameInputValue = inputUsername.value;
            dispatch(
              signIn({
                password: passwordValue,
                username: usernameInputValue,
              })
            );
          }}
        />
      </form>
    </>
  );
};
