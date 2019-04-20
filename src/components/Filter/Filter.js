import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="">
          <ul className="nav flex-column d-none d-md-block p-4 mt-2 float-left">
            <li className="nav-item">
              <a
                className="nav-link text-secondary active"
                href={this.filterPhotographers}
                onClick={this.filterPhotographers}
              >
                Talent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Photographers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Stylist
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Models
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="#">
                Personality
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
