import React from "react";
import { observer, inject } from "mobx-react";
import { Tab, TabBarItem, Article } from "react-weui";
import Icon from "./components/iconfont";
@inject("dataStore")
@observer
class App extends React.Component {
  state = { show: false, tab: 0 };
  render() {
    const { dataStore = {} } = this.props;
    const { tab } = this.state;

    return (
      <div className="App">
        <Tab
          type="tabbar"
          onChange={(index) => {
            this.setState({ tab: index });
          }}
        >
          <TabBarItem
            icon={
              <Icon
                name="heart"
                size={0.27}
                color={tab === 0 ? "#09BB07" : "#ddd"}
              />
            }
            label="Tab1"
          >
            <span>123</span>
          </TabBarItem>
          <TabBarItem
            icon={
              <Icon
                name="heart"
                size={0.27}
                color={tab === 1 ? "#09BB07" : "#ddd"}
              />
            }
            label="Tab2"
          ></TabBarItem>
          <TabBarItem
            icon={
              <Icon
                name="heart"
                size={0.27}
                color={tab === 2 ? "#09BB07" : "#ddd"}
              />
            }
            label="Tab3"
          ></TabBarItem>
        </Tab>
      </div>
    );
  }
}
export default App;
