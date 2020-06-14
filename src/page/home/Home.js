import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          this.props.history.goBack();
        }}
      >
        home
      </div>
    );
  }
}
