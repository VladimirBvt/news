import { createReducer } from "@reduxjs/toolkit";
import { signIn, signOut } from "./action";
import { user } from "../mock/mock";
import { AppRoutes } from "../const";

const initialState = {
  authorization: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signIn, (state, action) => {
      if (
        user.usernameValidation(action.payload.username) &&
        user.passwordValidation(action.payload.password)
      ) {
        state.authorization = true;
        window.location = AppRoutes.main;
      }
    })
    .addCase(signOut, (state) => {
      state.authorization = false;
    });
});
