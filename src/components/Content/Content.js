import React, { Component } from "react";
import "./Content.scss";
import data from "../../data";
class Content extends Component {
  constructor() {
    super();
    this.state = {
      Talent: data,
      Photographers: [],
      Stylist: [],
      Models: [],
      Personality: []
    };
  }

  filterPhotographers = () => {
    this.setState({
      Photographers: (data.talent.title = "photographers")
    });
    console.log(this.state.Photographers);
  };

  componentWillMount() {}

  render() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="container-fluid d-flex flex-wrap">
              {data.talent.map((item, index) => (
                <div className="card col-md-6 border-0 p-4" key={index}>
                  <img className="img-fluid" src={item.img} alt="headshot" />
                  <h5 className="text-uppercase mt-3">{item.name}</h5>
                  <div className="card-text d-flex ">
                    <p className="category text-uppercase font-weight-bold mr-2">
                      {item.category}
                    </p>
                    <p className="title text-uppercase">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
