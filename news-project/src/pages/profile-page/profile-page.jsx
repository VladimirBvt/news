import "./profile-page.css";
import { useDispatch } from "react-redux";
import { signOut } from "../../store/action";

export const ProfilePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="profile__title">Профиль</h2>
      <div className="profile">
        <div className="profile__photo">Фото профиля</div>
        <div className="profile__wrap">
          <div className="profile__first-name">Имя:</div>
          <div className="profile__surname">Фамилия:</div>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(signOut());
        }}
      >
        Выйти
      </button>
    </>
  );
};
