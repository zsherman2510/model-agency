import React from "react";
import Footer from "../../Footer/Footer";
import "../Agency/Agency.scss";

const Workshops = ({ data }) => {
  return (
    <>
      <section className="workshops">
        <img className="agency-img" src={data.workshops.img} alt="workshops" />
        <p>{data.workshops.topText}</p>
        <p>{data.workshops.bottomText}</p>
      </section>
      <Footer />
    </>
  );
};

export default Workshops;
