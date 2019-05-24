import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Content from "./Content";
import "./background.jpg";
import "./index.scss";

export default class Index extends Component {
  render() {
    return (
      <div className="index">
        <Header />
        <Content />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector("#root"));
