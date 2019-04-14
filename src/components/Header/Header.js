import React from "react";
import "./Header.scss";
import HeaderImg from "../imagecompressor/female-model2-min.jpg";
const Header = ({ data }) => {
  return (
    <>
      <section className="header">
        <div className="section">
          <img className="background" src={HeaderImg} alt="header" />
          <span className="title">Execute.</span>
        </div>
      </section>
    </>
  );
};

export default Header;
