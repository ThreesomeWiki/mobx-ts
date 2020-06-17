import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("dataStore")
@observer
class App extends React.Component {
  render() {
    const { dataStore = {} } = this.props;
    return (
      <div className="App">
        <header
          className="App-header"
          onClick={() => {
            // dataStore.setName();
            // this.props.history.push({ pathname: "/home" });
          }}
        >
          <span>{dataStore.name}</span>
          <span>{dataStore.list.toString()}</span>
          <Link to="/home">跳转</Link>
        </header>
      </div>
    );
  }
}
export default App;
