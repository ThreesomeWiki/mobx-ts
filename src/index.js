import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import store from "./store";
import Route from "./Route";
import "weui";

ReactDOM.render(
  <Provider {...store}>
    <Route />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
