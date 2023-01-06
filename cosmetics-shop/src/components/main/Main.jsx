import React from "react";
import Gifts from "./sections/gifts/Gifts";
import AboutBrand from "./sections/aboutBrand/AboutBrand";
import Shop from "./sections/shop/Shop";
import AboutCreators from "./sections/aboutCreators/AboutCreators";
import PowderSection from "./sections/powder/PowderSection";
import Benefits from "./sections/benefits/Benefits";
import ContactUs from "./sections/contactUs/ContactUs";

const Main = () => {
  return (
    <main>
      <Gifts />
      <AboutBrand />
      <Shop />
      <AboutCreators />
      <PowderSection />
      <Benefits />
      <ContactUs />
    </main>
  );
};

export default Main;
