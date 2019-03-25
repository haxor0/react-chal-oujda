import React from "react";

const Pricingheader = ({ pricingheader }) => (
  <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 className="display-4">{pricingheader.title}</h1>
    <p className="lead">{pricingheader.description}</p>
  </div>
);
export default Pricingheader;
