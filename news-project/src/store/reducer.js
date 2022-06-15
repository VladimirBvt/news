import { createReducer } from "@reduxjs/toolkit";
import { signIn, signOut } from "./action";
import { user } from "../mock/mock";
import { news } from "../mock/mock";

const initialState = {
  authorization: false,
  news,
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
    });
});
