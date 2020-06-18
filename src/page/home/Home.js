import React from "react";
import { observer, inject } from "mobx-react";
import "./Home.scss";
@inject("dataStore")
@observer
class Home extends React.Component {
  render() {
    const { dataStore = {} } = this.props;
    return (
      <div className="Home">
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
