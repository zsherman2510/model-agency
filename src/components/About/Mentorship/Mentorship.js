import React from "react";
import "../Agency/Agency.scss";
const Mentorship = ({ data }) => {
  return (
    <>
      <section className="mentorship">
        <h3 className="title">Mentorship</h3>
        <p>{data.mentorship.topText}</p>
        <p>{data.mentorship.middleText}</p>
        <p>{data.mentorship.bottomText}</p>
        <img
          className="mentor-img"
          src={data.mentorship.img}
          alt="mother-daughter"
        />
        <h6>Magalie &amp; Angelie shot by Marie H Rainville</h6>
      </section>
    </>
  );
};

export default Mentorship;
