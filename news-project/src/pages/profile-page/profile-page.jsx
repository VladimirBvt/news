import "./profile-page.css";

export const ProfilePage = () => {
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
    </>
  );
};
