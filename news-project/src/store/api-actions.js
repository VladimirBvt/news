import { createAsyncThunk } from "@reduxjs/toolkit/src/createAsyncThunk";
import { api } from "./store";
import { store } from "./store";
import { APIRout } from "../const";
import { loadData, requireAuthorization } from "./action";
import { dropToken, saveToken } from "../services/token";

// асинхронные действия

// действие получения данных с сервера
export const fetchDataAction = createAsyncThunk("data/fetchData", async () => {
  const { data } = await api.get(APIRout.data);
  store.dispatch(loadData(data));
});

// действие проверки авторизации
export const checkAuthAction = createAsyncThunk("user/checkAuth", async () => {
  await api.get(APIRout.login);
  store.dispatch(requireAuthorization(true));
});

// действие входа (авторизации) при введении логина и пароля пользователем
export const loginAction = createAsyncThunk(
  "user/login",
  async ({ login: email, password }) => {
    const {
      data: { token },
    } = await api.post(APIRout.login, { email, password });
    saveToken(token);
    store.dispatch(requireAuthorization(true));
  }
);

// действие выхода из авторизации
export const logoutAction = createAsyncThunk("user/logout", async () => {
  await api.delete(APIRout.logout);
  dropToken();
  store.dispatch(requireAuthorization(false));
});
