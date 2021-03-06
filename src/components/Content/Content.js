import React, { Component } from "react";
import "./Content.scss";
import data from "../../data";
import Fade from "react-reveal/Fade";
class Content extends Component {
  constructor() {
    super();
    this.state = {
      Talent: data,
      Photographers: [],
      Stylist: [],
      Models: [],
      Personality: [],
      currCategory: ""
    };
  }

  filterAll = () => {
    this.setState({
      currCategory: ""
      // Talent: data.talent
    });
    console.log(this.state);
  };
  filterPhotographers = () => {
    this.setState({
      currCategory: "photographer"
      // Photographers: (data.talent.title = "photographers")
    });
    console.log(this.state);
  };
  filterStylist = () => {
    this.setState({
      currCategory: "stylist"
      // Stylist: (data.talent.title = "stylist")
    });
    console.log("stylist");
  };
  filterModels = () => {
    this.setState({
      currCategory: "Model"
      // Models: (data.talent.title = "models")
    });
    console.log("models");
  };
  filterPersonality = () => {
    this.setState({
      currCategory: "personality"
      // Personality: (data.talent.title = "personality")
    });
    console.log("personality");
  };

  renderPeople = () => {
    const { currCategory, Talent } = this.state;
    const filteredPeople = Talent.talent.filter(
      a => a.title.toLowerCase() === currCategory.toLowerCase()
    );

    if (filteredPeople.length > 0) {
      return filteredPeople.map((item, index) => (
        <Fade>
          <div className="card col-md-6 border-0" key={index}>
            <img className="img-fluid" src={item.img} alt="headshot" />
            <h5 className="text-uppercase mt-3">{item.name}</h5>
            <div className="card-text d-flex ">
              <p className="category text-uppercase font-weight-bold mr-2">
                {item.category}
              </p>
              <p className="title text-uppercase">{item.title}</p>
            </div>
          </div>
        </Fade>
      ));
    } else {
      return data.talent.map((item, index) => (
        <Fade>
          <div className="card col-md-6 border-0" key={index}>
            <img className="img-fluid" src={item.img} alt="headshot" />
            <h5 className="text-uppercase mt-3">{item.name}</h5>
            <div className="card-text d-flex ">
              <p className="category text-uppercase font-weight-bold mr-2">
                {item.category}
              </p>
              <p className="title text-uppercase">{item.title}</p>
            </div>
          </div>
        </Fade>
      ));
    }
  };

  componentWillMount() {}

  render() {
    return (
      <>
        <div className="row">
          <div className="">
            <ul className="nav flex-column d-none d-md-block p-4 float-left">
              <li className="nav-item">
                <button
                  value="Talent"
                  className="nav-link text-secondary active border-0"
                  onClick={this.filterAll}
                >
                  Talent
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="photographers"
                  className="nav-link text-secondary border-0"
                  href="#"
                  onClick={this.filterPhotographers}
                >
                  Photographers
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="stylist"
                  className="nav-link text-secondary border-0"
                  href="#"
                  onClick={this.filterStylist}
                >
                  Stylist
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="Model"
                  className="nav-link text-secondary border-0"
                  href="#"
                  onClick={this.filterModels}
                >
                  Models
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="personality"
                  className="nav-link text-secondary border-0"
                  href="#"
                  onClick={this.filterPersonality}
                >
                  Personality
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center d-md-none">
            <ul className="nav ml-4">
              <li className="nav-item">
                <button className="nav-link border-0" onClick={this.filterAll}>
                  Talent
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link border-0"
                  onClick={this.filterPhotographers}
                >
                  Photographers
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link border-0"
                  onClick={this.filterModels}
                >
                  Models
                </button>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="container-fluid d-flex flex-wrap justify-content-center align-items-center ml-4">
              {this.renderPeople()}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
