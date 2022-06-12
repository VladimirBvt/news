import { createReducer } from "@reduxjs/toolkit";
import { signIn } from "./action";

const initialState = {
  authorization: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(signIn, (state) => {
    state.authorization = !state.authorization;
  });
});
