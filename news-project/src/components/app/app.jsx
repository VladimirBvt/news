import "./app.css";
import { MainPage } from "../../pages/main-page/main-page";
import { NewsPage } from "../../pages/news-page/news-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../const";
import { LoginPage } from "../../pages/login-page/login-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";
import { NoPage } from "../no-page/no-page";
import { Layout } from "../layout/layout";
import { PrivateRoute } from "../private-route/private-route";
import "../../store/reducer";
import { useSelector } from "react-redux";
import { Preloader } from "../preloader/preloader";

function App() {
  const { authorization, isDataLoaded } = useSelector((state) => state);

  /*if (authorization || !isDataLoaded) {
    return <Preloader />;
  }*/
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoutes.news} element={<NewsPage />} />
            <Route path={AppRoutes.login} element={<LoginPage />} />
            <Route
              path={AppRoutes.profile}
              element={
                <PrivateRoute hasAuth={authorization}>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={NoPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
