import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../const";

export const PrivateRoute = ({ children, hasAuth }) => {
  return hasAuth ? children : <Navigate to={AppRoutes.login} />;
};
