import React, { Component } from "react";
import "../index.scss";
export default class Join extends Component {
  render() {
    return (
      <>
        <div className="jumbotron jumbotron-fluid">
          <div className="container pt-5">
            <h1 className="text-uppercase text-center mb-4">
              Join the Execute Family
            </h1>
            <p className="text-center">
              If you aspire to join the HUMANKIND family, please send us the
              following information about yourself and a few details concerning
              your talents. Only selected candidates will be contacted for a
              meeting.
            </p>
          </div>
        </div>
        <div className="container">
          <p className="text-uppercase text-center font-weight-bold">
            Application Form
          </p>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Address"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <input type="text" className="form-control" placeholder="Apt" />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Province"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Postal Code"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Gender"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Birthday   mm/dd/yyyy"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Height"
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hips"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Waist"
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bust"
                />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shoe Size"
                />
              </div>
              <div class="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Hair"
                />
              </div>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Eyes" />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Instagram  @"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tattoos"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Talents"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Message"
              />
            </div>
            <p className="font-weight-bold text-center">
              Upload your Polaroids
            </p>
            <div className="form-group">
              <h6>Headshot</h6>
              <input type="file" className="form-control" />
            </div>
            <div className="form-group">
              <h6>Full-Body</h6>
              <input type="file" className="form-control" />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="form-control"
                placeholder="Submit Application"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
}
