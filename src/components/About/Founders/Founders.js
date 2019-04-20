import React from "react";
import "./Founder.scss";
const Founders = ({ data }) => {
  return (
    <section className="second">
      <h6 className="text-uppercase font-weight-bold mb-3">Founders</h6>
      <div className="container-fluid px-0">
        <div className="row">
          <div className="col-12 justify-content-center col-md-6 align-items-center">
            <h5 className="font-weight-bold text-uppercase mb-3">
              {data.founders[0].name}
            </h5>
            <div className="justify-content-around">
              <p>{data.founders[0].topText}</p>
              <p>{data.founders[0].middleText}</p>
              <p>{data.founders[0].footerText}</p>
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <img
              className="img-fluid"
              src={data.founders[0].img}
              alt="head-shot"
            />
            <h6>Claudine shot by Mauricio Ortiz</h6>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 mt-5">
        <div className="row">
          <div className="col-md-4 order-2 order-md-0">
            <img
              className="img-fluid"
              src={data.founders[1].img}
              alt="head-shot"
            />
            <h6>Claudine shot by Mauricio Ortiz</h6>
          </div>
          <div className="col-md-1" />
          <div className="col-md-7">
            <div className="row">
              <div className="col-12 align-items-stretch order-1">
                <h4 className="font-weight-bold my-3">
                  {data.founders[1].name}
                </h4>
                <div className="">
                  <p>{data.founders[1].topText}</p>
                  <p>{data.founders[1].middleText}</p>
                  <p>{data.founders[1].footerText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
