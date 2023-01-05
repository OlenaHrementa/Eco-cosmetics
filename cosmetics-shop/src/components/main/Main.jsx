import React from "react";
import Gifts from "./sections/Gifts";
import AboutBrand from "./sections/AboutBrand";
import Shop from "./sections/Shop";
import AboutCreators from "./sections/AboutCreators";
import PowderSection from "./sections/PowderSection";
import Benefits from "./sections/Benefits";
import ContactUs from "./sections/ContactUs";

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
