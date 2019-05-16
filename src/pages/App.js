import React, { Component } from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";

import data from "../data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      talent: data
    };
  }

  render() {
    return (
      <>
        <Header data={data} getData={this.getTalent} />
        <div className="d-flex">
          <Content data={data} />
        </div>
      </>
    );
  }
}

export default App;
