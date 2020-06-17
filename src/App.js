import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import {
  ActionSheet,
  Footer,
  FooterLinks,
  FooterLink,
  FooterText,
  Tab,
  TabBarItem,
  Article,
} from "react-weui";

@inject("dataStore")
@observer
class App extends React.Component {
  state = { show: false };
  render() {
    const { dataStore = {} } = this.props;
    return (
      <div className="App">
        {/* <header
          className="App-header"
          onClick={() => {
            // dataStore.setName();
            // this.props.history.push({ pathname: "/home" });
          }}
        >
          <span>{dataStore.name}</span>
          <span>{dataStore.list.toString()}</span>
          <Link to="/home">跳转</Link>
          <Button>微信UI</Button>
          <ActionSheet
            show={this.state.show}
            actions={[{ label: "语文" }, { label: "数学" }, { label: "外语" }]}
            onRequestClose={
              //function to hide ActionSheet
              (e) => this.setState({ show: false })
            }
          />
        </header>
        <Footer>
          <FooterLinks>
            <FooterLink>Link</FooterLink>
            <FooterLink>Link</FooterLink>
          </FooterLinks>
          <FooterText>Copyright &copy; 2008-2016 weui.io</FooterText>
        </Footer> */}
        <Tab type="tabbar">
          <TabBarItem icon={<img />} label="Tab1">
            <Article>
              <h1>Page 1</h1>
              <section>
                <h2 className="title">Heading</h2>
                <section>
                  <h3>1.1 Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </section>
                <section>
                  <h3>1.1 Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </section>
                <section>
                  <h3>1.1 Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </section>
                <section>
                  <h3>1.1 Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </section>
              </section>
            </Article>
          </TabBarItem>
          <TabBarItem icon={<img />} label="Tab2">
            <Article>
              <h1>Page 2</h1>
              <section>
                <h2 className="title">Heading</h2>
                <section>
                  <h3>2.1 Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </section>
              </section>
            </Article>
          </TabBarItem>
          <TabBarItem icon={<img />} label="Tab3">
            <Article>
              <h1>Page 3</h1>
              <section>
                <h2 className="title">Heading</h2>
                <section>
                  <h3>3.1 Title</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute
                  </p>
                </section>
              </section>
            </Article>
          </TabBarItem>
        </Tab>
      </div>
    );
  }
}
export default App;
