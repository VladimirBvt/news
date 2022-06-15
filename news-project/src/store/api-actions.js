import { createAsyncThunk } from "@reduxjs/toolkit/src/createAsyncThunk";
import { api } from "./store";
import { store } from "./store";
import { APIRout, TIMEOUT_SHOW_ERROR } from "../const";
import { loadData, requireAuthorization, setError } from "./action";
import { dropToken, saveToken } from "../services/token";
import { errorHandle } from "../services/error-handle";

// асинхронные действия

// действие получения данных с сервера
export const fetchDataAction = createAsyncThunk("data/fetchData", async () => {
  try {
    const { data } = await api.get(APIRout.data);
    store.dispatch(loadData(data));
  } catch (error) {
    errorHandle(error);
  }
});

// действие проверки авторизации
export const checkAuthAction = createAsyncThunk("user/checkAuth", async () => {
  try {
    await api.get(APIRout.login);
    store.dispatch(requireAuthorization(true));
  } catch (error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(false));
  }
});

// действие входа (авторизации) при введении логина и пароля пользователем
export const loginAction = createAsyncThunk(
  "user/login",
  async ({ login: email, password }) => {
    try {
      const {
        data: { token },
      } = await api.post(APIRout.login, { email, password });
      saveToken(token);
      store.dispatch(requireAuthorization(true));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(false));
    }
  }
);

// действие выхода из авторизации
export const logoutAction = createAsyncThunk("user/logout", async () => {
  try {
    await api.delete(APIRout.logout);
    dropToken();
    store.dispatch(requireAuthorization(false));
  } catch (error) {
    errorHandle(error);
  }
});

// действие очистки ошибки в state
export const clearErrorAction = createAsyncThunk("clearError", () => {
  setTimeout(() => store.dispatch(setError("")), TIMEOUT_SHOW_ERROR);
});
