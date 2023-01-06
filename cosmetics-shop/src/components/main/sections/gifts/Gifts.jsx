import React from "react";
import "./Gifts.scss";

const Gifts = () => {
  return (
    <section className="gifts page__section">
      <div className="container">
        <div className="grid grid--ipad">
          <div className="grid__item grid__item--desktop-2-5">
            <p className="gifts__paragraph">
              Biologists say that birds are indicators of the environmental
              situation, and over the past half century, the population
              <br />
              of seabirds has declined by 70%. Birds die due to environmental
              problems and human intervention in the natural
              <br />
              environment.
            </p>
          </div>
          <div className="grid__item grid__item--ipad-2-5 grid__item--desktop-7-10">
            <h2 className="gifts__title">
              if you choose the gifts of
              <br />
              nature and care about
              <br />
              it’s - scroll down
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gifts;
