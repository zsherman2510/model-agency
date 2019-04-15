import React from "react";
import "../Agency/Agency.scss";
const Nutrition = ({ data }) => {
  return (
    <>
      <section>
        <div>
          <h3>Nutrition</h3>
          <p>{data.nutrition.topText}</p>
          <p>{data.nutrition.middleText}</p>
          <p>{data.nutrition.bottomText}</p>
          <img className="agency-img" src={data.nutrition.img} alt="" />
        </div>
      </section>
    </>
  );
};

export default Nutrition;
