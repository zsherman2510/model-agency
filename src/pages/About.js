import React, { Component } from "react";
import data from "../data";
import Header from "../components/About/Header/Header";
import Founders from "../components/About/Founders/Founders";
import Agency from "../components/About/Agency/Agency";
import Nutrition from "../components/About/Nutrition/Nutrition";
import Mentorship from "../components/About/Mentorship/Mentorship";
import Workshops from "../components/About/Workshops/Workshops";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header about={data} />
        <Founders data={data} />
        <Agency data={data} />
        <Nutrition data={data} />
        <Mentorship data={data} />
        <Workshops data={data} />
      </>
    );
  }
}
