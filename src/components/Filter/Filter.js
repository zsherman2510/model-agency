import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="">
            <ul className="nav flex-column d-none d-md-block p-4 mt-2 float-left">
              <li className="nav-item">
                <button
                  value="Talent"
                  className="nav-link text-secondary active border-0"
                  onClick={this.filterPhotographers}
                >
                  Talent
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="photographers"
                  className="nav-link text-secondary border-0"
                  href="#"
                >
                  Photographers
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="stylist"
                  className="nav-link text-secondary border-0"
                  href="#"
                >
                  Stylist
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="models"
                  className="nav-link text-secondary border-0"
                  href="#"
                >
                  Models
                </button>
              </li>
              <li className="nav-item">
                <button
                  value="personality"
                  className="nav-link text-secondary border-0"
                  href="#"
                >
                  Personality
                </button>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
