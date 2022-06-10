import "./app.css";
import { MainPage } from "../../pages/main-page/main-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { NewsPage } from "../../pages/news-page/news-page";
import { ProfilePage } from "../../pages/profile-page/profile-page";

function App() {
  return (
    <div className="App">
      <MainPage />
      <LoginPage />
      <NewsPage />
      <ProfilePage />
    </div>
  );
}

export default App;
