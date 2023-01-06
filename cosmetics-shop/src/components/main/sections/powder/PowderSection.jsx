import React from "react";
import "./PowderSection.scss";
import Powder from "../../../../assets/images/powder.svg";

const PowderSection = () => {
  return (
    <section className="powder page__section">
      <div className="container">
        <div className="page__section-subtitle-on-desktop powder__subtitle">
          Ingredients
        </div>

        <div className="grid grid--ipad">
          <div className="grid__item grid__item--ipad-1-3 grid__item--desktop-2-5">
            <h2 className="powder__title page__section-title">
              Ayurvedic Tooth Powder
            </h2>
          </div>

          <div className="powder__content grid__item grid__item--ipad-2-6 grid__item--desktop-6-12">
            <ul className="powder__list">
              <li className="powder__list-item">Kaolin</li>
              <li className="powder__list-item">Sivak</li>
              <li className="powder__list-item">Calcium</li>
              <li className="powder__list-item">Licorice root</li>
              <li className="powder__list-item">Turmeric</li>
            </ul>

            <div className="powder__image-wrapper">
              <img src={Powder} alt="tooth powder" className="powder__image" />
            </div>
          </div>

          <div className="grid__item grid__item--ipad-1-2 grid__item--desktop-2-3">
            <a href="#0" className="powder__link link">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowderSection;
