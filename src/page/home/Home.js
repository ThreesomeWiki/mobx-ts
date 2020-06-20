import React from "react";
import { observer, inject } from "mobx-react";
import ReactSwipe from "react-swipe";

import "./Home.scss";
@inject("dataStore")
@observer
class Home extends React.Component {
  render() {
    const { dataStore = {} } = this.props;
    return (
      <div className="Home">
        <ReactSwipe className="carousel">
          <div>PANE 1</div>
          <div>PANE 2</div>
          <div>PANE 3</div>
        </ReactSwipe>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
      </div>
    );
  }
}

export default Home;
