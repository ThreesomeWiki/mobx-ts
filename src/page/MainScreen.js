import React from "react";
import { Tab, TabBarItem } from "react-weui";
import Icon from "../components/iconfont";
import Home from "./home/Home";
import "./global.scss";

export default class MainScreen extends React.Component {
  state = { tab: 0 };

  tabs = [
    { label: "店主", icon: "heart", Component: Home },
    { label: "货源", icon: "heart", Component: Home },
    { label: "订单", icon: "heart", Component: Home },
    { label: "培训", icon: "heart", Component: Home },
    { label: "我的", icon: "heart", Component: Home },
  ];

  render() {
    const { tab } = this.state;
    return (
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
            <div style={{ height: "0.5rem" }} />
          </TabBarItem>
        ))}
      </Tab>
    );
  }
}
