import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { createAPI } from "../services/api";

// создание экземпляра api
export const api = createAPI();

// инициализация хранилища
//export const store = configureStore({ reducer });
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument: api } }),
});
