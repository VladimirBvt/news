import "./app.css";
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { NewsPage } from "../../pages/news-page/news-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";
import { ErrorMessage } from "../error-message/error-message";

function App() {
  return (
    <div className="App">
      <MainPage />
      <LoginPage />
      <NewsPage />
      <ProfilePage />
      <ErrorMessage />
    </div>
  );
}

export default App;
