import React from "react";
import "./Agency.scss";
const Agency = ({ data }) => {
  return (
    <>
      <section className="container-fluid">
        <article>
          <img className="img-fluid" src={data.agency.img} alt="agency" />
          <h6 className="text-center m-3 text-uppercase font-weight-bold text-monospace">
            {data.agency.title}
          </h6>

          <p className="text-monospace text-center">
            <span className="font-weight-bold text-uppercase">
              Over 40 Years
            </span>
            {data.agency.topText}
          </p>
          <p className="text-center text-justify">{data.agency.bottomText}</p>
        </article>
      </section>
    </>
  );
};

export default Agency;
