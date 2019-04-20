import React from "react";
import Footer from "../../Footer/Footer";
import "../Agency/Agency.scss";

const Workshops = ({ data }) => {
  return (
    <>
      <section className="container-fluid mt-5">
        <div>
          <img className="img-fluid" src={data.workshops.img} alt="workshops" />
        </div>
        <div>
          <h6 className="text-uppercase font-weight-bold text-center mt-4">
            Workshops
          </h6>
          <p className="text-monospace text-center">{data.workshops.topText}</p>
          <p className="text-center">{data.workshops.bottomText}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Workshops;
