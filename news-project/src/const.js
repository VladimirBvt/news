// пути приложения
export const AppRoutes = {
  main: "/",
  login: "/login",
  news: "/news",
  profile: "/profile",
};

// пути используемого api
export const APIRout = {
  data: "/questions",
  login: "/login",
  logout: "/logout",
};

// время отображения ошибки
export const TIMEOUT_SHOW_ERROR = 2000;

// коды, возвращаемые сервером
export const HTTP_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 400,
};
