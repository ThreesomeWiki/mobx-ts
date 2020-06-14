import React from "react";
import "./App.css";
import { observer, inject } from "mobx-react";

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
            dataStore.setName();
            this.props.history.push({ pathname: "/home" });
          }}
        >
          <span>{dataStore.name}</span>
          <span>{dataStore.list.toString()}</span>
        </header>
      </div>
    );
  }
}
export default App;
