import React from "react";
import "./Header.scss";

const Header = ({ data }) => {
  return (
    <>
      <section className="section bg-warning">
        <div className="row">
          <img
            className="header-img"
            src="http://farm7.static.flickr.com/6231/6329605630_841266ab01_o.jpg"
            alt="model"
          />
          <span className="hero-text">HumanKind</span>
        </div>
      </section>
    </>
  );
};

export default Header;
