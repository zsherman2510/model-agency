import React from "react";
import "./Founder.scss";
const Founders = ({ data }) => {
  return (
    <section>
      <h5>Founders</h5>
      <div className="founders">
        {" "}
        {data.founders.map((item, index) => (
          <div className="card" key={index}>
            <h4 className="font-weight-bold">{item.name}</h4>
            <p>{item.topText}</p>
            <p>{item.middleText}</p>
            <p>{item.footerText}</p>
            <img className="headShot" src={item.img} alt="head-shot" />
            <h6>Claudine shot by Mauricio Ortiz</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
