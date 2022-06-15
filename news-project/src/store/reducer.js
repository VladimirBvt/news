import { createReducer } from "@reduxjs/toolkit";
import { loadData, loginFormData, signIn, signOut } from "./action";
import { user } from "../mock/mock";
import { news as questionItems } from "../mock/mock";

const initialState = {
  authorization: false,
  news: questionItems,
  loginForm: {
    username: "",
    password: "",
  },
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
    });
});
