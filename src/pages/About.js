import React, { Component } from "react";
import data from "../data";
import Header from "../components/About/Header/Header";
import Founders from "../components/About/Founders/Founders";
import Agency from "../components/About/Agency/Agency";
import Nutrition from "../components/About/Nutrition/Nutrition";
import Mentorship from "../components/About/Mentorship/Mentorship";
import Workshops from "../components/About/Workshops/Workshops";
import Footer from "../components/Footer/Footer";
import "../index.scss";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Header about={data} />

        <div className="container col-md-10">
          <Founders id="Founders" data={data} />
          <Agency id="Agency" data={data} />
          <Nutrition id="Nutrition" data={data} />
          <Mentorship id="Mentorship" data={data} />
          <Workshops id="Workshops" data={data} />
        </div>
        <Footer />
      </>
    );
  }
}
