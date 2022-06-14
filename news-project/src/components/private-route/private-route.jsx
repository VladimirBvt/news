import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../const";
//import { useSelector } from "react-redux";

export const PrivateRoute = ({ children, hasAuth }) => {
  //const selector = useSelector((state) => state);
  //const hasAccess = selector.authorization;
  //const hasAccess = hasAuth;

  return hasAuth ? children : <Navigate to={AppRoutes.login} />;
};
