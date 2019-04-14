import React, { Component } from "react";
import "./Content.scss";
import data from "../../data";
class Content extends Component {
  constructor() {
    super();
    this.state = {
      content: data
    };
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <div className="container">
          {data.talent.map((item, index) => (
            <div className="card" key={index}>
              <img className="thumbnail" src={item.img} alt="headshot" />
              <h1 className="name">{item.name}</h1>
              <div className="card-text">
                <p className="category">{item.category}</p>
                <p className="title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Content;
