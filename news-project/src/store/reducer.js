import { createReducer } from "@reduxjs/toolkit";
import {
  loadData,
  loginFormData,
  requireAuthorization,
  setError,
  signIn,
  signOut,
} from "./action";
import { user } from "../mock/mock";
//import { news } from "../mock/mock";

const initialState = {
  authorization: false,
  news: [],
  loginForm: {
    username: "",
    password: "",
  },
  error: "",
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn, (state, action) => {
      if (
        user.usernameValidation(action.payload.username) &&
        user.passwordValidation(action.payload.password)
      ) {
        state.authorization = true;
      }
    })
    .addCase(signOut, (state) => {
      state.authorization = false;
    })
    .addCase(loginFormData, (state, action) => {
      state.loginForm.username = action.payload.username;
      state.loginForm.password = action.payload.password;
    })
    .addCase(loadData, (state, action) => {
      state.news = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorization = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
