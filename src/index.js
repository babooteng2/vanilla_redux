import React from "react";
import reactDOM from "react-dom";
import store from "./store";
import App from "./components/App";
import { Provider } from "react-redux";

reactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
