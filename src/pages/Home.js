import React from "react";
import Pricingheader from "../components/AppHeader";
import Pricinghead from "../mocks/pricingheader";
import PriceCard from "../components/PriceCard";
import cardsList from "../mocks/cardsList";

const Home = ({}) => (
  <>
    <Pricingheader pricingheader={Pricinghead} />

    <PriceCard cardsList={cardsList} />
  </>
);
export default Home;
