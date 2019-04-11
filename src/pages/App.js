import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import data from "../data";
class App extends Component {
  render() {
    return (
      <>
        <Header data={data} />
        <Footer data={data} />
      </>
    );
  }
}

export default App;
