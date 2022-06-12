import "./no-page.css";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../const";

export const NoPage = () => {
  return (
    <>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRoutes.main}>Go to main page</Link>
    </>
  );
};
