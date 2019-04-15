import React from "react";
import "./Agency.scss";
const Agency = ({ data }) => {
  return (
    <>
      <section className="agency">
        <article>
          <img className="agency-img" src={data.agency.img} alt="agency" />
          <h4 className="title">{data.agency.title}</h4>

          <p>
            <span className="font-weight-bold">Over 40 Years</span>
            {data.agency.topText}
          </p>
          <p>{data.agency.bottomText}</p>
        </article>
      </section>
    </>
  );
};

export default Agency;
