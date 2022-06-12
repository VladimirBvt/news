import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

// инициализация хранилища
export const store = configureStore({ reducer });
