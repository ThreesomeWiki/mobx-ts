import React from "react";
import { observer, inject } from "mobx-react";
import { Tab, TabBarItem, Article } from "react-weui";
import Icon from "./components/iconfont";
import Home from "./page/home/Home";
@inject("dataStore")
@observer
class App extends React.Component {
  state = { show: false, tab: 0 };

  tabs = [
    { label: "店主", icon: "heart", Component: Home },
    { label: "货源", icon: "heart", Component: Home },
    { label: "订单", icon: "heart", Component: Home },
    { label: "培训", icon: "heart", Component: Home },
    { label: "我的", icon: "heart", Component: Home },
  ];

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
          {this.tabs.map((Item, index) => (
            <TabBarItem
              key={Item.label}
              icon={
                <Icon
                  name={Item.icon}
                  size={0.27}
                  color={tab === index ? "#09BB07" : "#ddd"}
                />
              }
              label={Item.label}
            >
              <Item.Component />
            </TabBarItem>
          ))}
        </Tab>
      </div>
    );
  }
}
export default App;
