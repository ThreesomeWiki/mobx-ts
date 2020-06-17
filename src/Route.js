import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./page/home/Home";
import HomeDetail from "./page/home/HomeDetail";

export default () => (
  <HashRouter basename="/">
    <Route path="/" exact>
      <App />
    </Route>
    <Route path="/home" component={Home} exact />
    <Route path="/home/detail/:id" component={HomeDetail} exact />
  </HashRouter>
);
