import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ErrorMessage } from "./components/error-message/error-message";
//import { checkAuthAction, fetchDataAction } from "./store/api-actions";

//store.dispatch(fetchDataAction());
//store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
