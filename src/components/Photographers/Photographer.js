import React from "react";

const Photographer = () => {
  return (
    <div key={index}>
      <img src={photographers.img} alt="photographers" />
      <h1>{photographers.name}</h1>
      <h2>{photographers.title}</h2>
      <p>{photographers.category}</p>
    </div>
  );
};

export default Photographer;
