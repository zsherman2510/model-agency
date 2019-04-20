import React, { Component } from "react";
import data from "../data";
import Header from "../components/About/Header/Header";
import Founders from "../components/About/Founders/Founders";
import Agency from "../components/About/Agency/Agency";
import Nutrition from "../components/About/Nutrition/Nutrition";
import Mentorship from "../components/About/Mentorship/Mentorship";
import Workshops from "../components/About/Workshops/Workshops";
import "../index.scss";
export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="about">
          <div className="container">
            <Header about={data} />
          </div>

          <div className="d-flex">
            <nav className="d-none d-md-inline fixed-side">
              <ul>
                <li>
                  <a href="#Founders">Founders</a>
                </li>
                <li>
                  <a href="#Agency">Agency</a>
                </li>
                <li>
                  <a href="#Nutrition">Nutrition</a>
                </li>
                <li>
                  <a href="#Mentorship">Mentorship</a>
                </li>
                <li>
                  <a href="#Workshops">Workshops</a>
                </li>
              </ul>
            </nav>

            <div className="container col-md-10">
              <Founders id="Founders" data={data} />
              <Agency id="Agency" data={data} />
              <Nutrition id="Nutrition" data={data} />
              <Mentorship id="Mentorship" data={data} />
              <Workshops id="Workshops" data={data} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
