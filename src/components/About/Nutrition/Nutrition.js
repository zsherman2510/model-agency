import React from "react";
import "../Agency/Agency.scss";
const Nutrition = ({ data }) => {
  return (
    <>
      <section className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-7">
            <h6 className="text-uppercase font-weight-bold mb-3">Nutrition</h6>
            <p>{data.nutrition.topText}</p>
            <p className="text-monospace">{data.nutrition.middleText}</p>
            <p>{data.nutrition.bottomText}</p>
          </div>
          <div className="col-md-5">
            <img className="img-fluid" src={data.nutrition.img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Nutrition;
