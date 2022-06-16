import request from "axios";
import { store } from "../store/store";
import { setError } from "../store/action";
import { clearErrorAction } from "../store/api-actions";
import { HTTP_CODE } from "../const";

// если это ошибка axios, то обрабатывать здесь не будем, передаем дальше по цепочке
export const errorHandle = (error) => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  // извлекаем информацию о запросе
  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        handleError(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        handleError(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.error);
        break;
    }
  }
};
