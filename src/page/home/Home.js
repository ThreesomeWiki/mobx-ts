import React from "react";
import { observer, inject } from "mobx-react";
import ReactSwipe from "react-swipe";
import "./Home.scss";
@inject("dataStore")
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: [
        { title: "推荐" },
        { title: "爆款" },
        { title: "包邮区" },
        { title: "新品" },
        { title: "拼多多" },
        { title: "包邮区1" },
        { title: "新品1" },
        { title: "拼多多1" },
      ],
      banners: [
        {
          id: 1,
          image:
            "http://dbbdownload.oss-cn-shanghai.aliyuncs.com/app/images/aboutus/img1.jpg",
        },
        {
          id: 2,
          image:
            "http://dbbdownload.oss-cn-shanghai.aliyuncs.com/app/images/aboutus/img2.jpg",
        },
      ],
      activeNav: 0,
    };
  }

  //导航点击
  onNavClick = (index) => {
    this.setState({ activeNav: index });
  };

  render() {
    const { dataStore = {} } = this.props;
    const { navs, activeNav, banners } = this.state;
    return (
      <div className="Home flex-column">
        {/* navs */}
        <div className="navs flex-row">
          {navs.map((nav, index) => (
            <span
              onClick={() => this.onNavClick(index)}
              key={nav.title}
              className={`nav ${activeNav === index ? "nav-active" : ""}`}
            >
              {nav.title}
            </span>
          ))}
        </div>
        {/* banner */}
        <ReactSwipe className="banner" swipeOptions={{ continuous: false }}>
          {banners.map((banner) => (
            <div className="banner-box" key={banner.id}>
              <div
                className="banner-img"
                style={{ backgroundImage: `url('${banner.image}')` }}
              />
            </div>
          ))}
        </ReactSwipe>
        <div>123</div>
      </div>
    );
  }
}

export default Home;
