import { createAction } from "@reduxjs/toolkit";

// проверка данных формы и изменение флага авторизации пользователя при совпадении
export const signIn = createAction("login/currentLoginDetails");

// изменение флага авторизации на false при выходе из авторизации
export const signOut = createAction("profile/signOut");
