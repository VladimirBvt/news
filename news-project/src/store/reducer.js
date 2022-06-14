import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "./action";
import { user } from "../mock/mock";

const initialState = {
  authorization: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn, (state, action) => {
    if (
      user.usernameValidation(action.payload.username) &&
      user.passwordValidation(action.payload.password)
    ) {
      state.authorization = true;
    }
  });
});
