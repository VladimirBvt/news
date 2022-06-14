import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../const";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const selector = useSelector((state) => state);
  const hasAccess = selector.authorization;

  return hasAccess ? children : <Navigate to={AppRoutes.login} />;
};
