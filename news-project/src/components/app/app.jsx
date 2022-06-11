import "./app.css";
import { MainPage } from "../../pages/main-page/main-page";
import { NewsPage } from "../../pages/news-page/news-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../const";
import { LoginPage } from "../../pages/login-page/login-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path={AppRoutes.news} element={<NewsPage />} />
          <Route path={AppRoutes.login} element={<LoginPage />} />
          <Route path={AppRoutes.profile} element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
