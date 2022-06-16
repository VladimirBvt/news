import { createAction } from "@reduxjs/toolkit";

// проверка данных формы и изменение флага авторизации пользователя при совпадении
export const signIn = createAction("login/currentLoginDetails");

// изменение флага авторизации на false при выходе из авторизации
export const signOut = createAction("profile/signOut");

// запись данных формы входа в store
export const loginFormData = createAction("login/loginFormData");

// загрузка текстовых данных с сервера в store
export const loadData = createAction("data/loadData");

// изменение флага авторизации с передачей значения
export const requireAuthorization = createAction("user/requireAuthorization");

// действие, которое помещает информацию об ошибке в store
export const setError = createAction("setError");
