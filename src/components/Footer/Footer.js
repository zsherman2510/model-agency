import React from "react";

import "./footer.scss";
const Footer = ({ data }) => {
  return (
    <>
      <section>
        <div className="footer">
          <p>{data.contact.address}</p>
          <p>For Booking</p>
          <p>{data.contact.email}</p>
          <p>{data.contact.number}</p>
          <p>&copy; Copyright 2019 Execute Management LLC </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
