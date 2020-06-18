import React from "react";
import { HashRouter, Route } from "react-router-dom";
import MainScreen from "./page/MainScreen";
import Home from "./page/home/Home";
import HomeDetail from "./page/home/HomeDetail";

export default () => (
  <HashRouter basename="/">
    {/* 主页 */}
    <Route path="/" exact component={MainScreen} />
    <Route path="/home" component={Home} exact />
    <Route path="/home/detail/:id" component={HomeDetail} exact />
  </HashRouter>
);
