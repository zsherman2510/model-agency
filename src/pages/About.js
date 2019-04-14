import React, { Component } from "react";
import data from "../data";
import Header from "../components/About/Header/Header";
import Founders from "../components/About/Founders/Founders";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header about={data} />
        <Founders data={data} />
      </div>
    );
  }
}
