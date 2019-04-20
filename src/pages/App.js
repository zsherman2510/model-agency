import React, { Component } from "react";
import Header from "../components/Header/Header";
import Content from "../components/Content/Content";
import Footer from "../components/Footer/Footer";
import Filter from "../components/Filter/Filter";
import data from "../data";
class App extends Component {
  constructor() {
    super();
    this.state = {
      talent: data
    };
  }

  getTalent = () => {
    this.setState({
      talent: this.photographers()
    });
  };
  render() {
    return (
      <>
        <Header data={data} getData={this.getTalent} />
        <div className="d-flex">
          <Filter data={data} />
          <Content data={data} />
        </div>

        <Footer data={data} />
      </>
    );
  }
}

export default App;
