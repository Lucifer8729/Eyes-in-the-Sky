import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import ReduxStore from "./store";

import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ReduxStore()}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
