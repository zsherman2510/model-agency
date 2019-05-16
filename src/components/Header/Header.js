import React from "react";
import "./Header.scss";
import Fade from "react-reveal/Fade";
const Header = ({ data }) => {
  return (
    <>
      <Fade left>
        <section className="section bg-warning">
          <div className="row">
            <div className="header-img" />

            <span className="hero-text">HumanKind</span>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Header;
