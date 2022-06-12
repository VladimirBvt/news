import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../const";

export const PrivateRoute = ({ children }) => {
  const hasAccess = false;

  return hasAccess ? children : <Navigate to={AppRoutes.login} />;
};
