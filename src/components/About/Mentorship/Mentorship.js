import React from "react";
import "../Agency/Agency.scss";
const Mentorship = ({ data }) => {
  return (
    <>
      <section className="container-fluid my-5">
        <div className="row">
          <div className="col-md-7 order-md-2">
            <h6 className="text-uppercase font-weight-bold">Mentorship</h6>
            <p>{data.mentorship.topText}</p>
            <p>{data.mentorship.middleText}</p>
            <p>{data.mentorship.bottomText}</p>
          </div>
          <div className="col-md-5">
            <img
              className="img-fluid"
              src={data.mentorship.img}
              alt="mother-daughter"
            />
            <p className="text-muted">
              Magalie &amp; Angelie shot by Marie H Rainville
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentorship;
