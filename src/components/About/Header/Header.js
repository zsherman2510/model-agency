import React from "react";
import "./Header.scss";

const Header = ({ about }) => {
  return (
    <header className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 col-lg-3 back-drop" />
      </div>
      <div className="textbox">
        <h3>
          {" "}
          <span className="font-italic">Humankind</span> is a unique talent
          representation agency
        </h3>
        <h3>
          <span className="font-italic">
            Deeply rooted in the creative community
          </span>{" "}
          , we hold our values dearly.
        </h3>
        <h6 className="font-weight-light">
          Inclusiveness, diversity, purpose and authenticity are beliefs that
          drive us to go beyond mere appearances. Based in California, Humankind
          represents inspiring people.
        </h6>
      </div>
    </header>
  );
};

export default Header;
