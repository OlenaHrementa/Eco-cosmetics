import React from "react";
import "./HeroSection.scss";
import Button from "../shared/button/Button";
import candlesDesktop from "../../assets/images/candles-desktop.jpg";
import candlesTablet from "../../assets/images/candles-tablet.jpg";
import candlesMobile from "../../assets/images/candles-mobile.jpg";


const HeroSection = () => {
  return (
    <section className="page__section">
      <div className="container">
        <div className="hero-grid hero-grid--ipad hero__content">
          <div className="hero-grid__item hero-grid__item--desktop-2-6">
            <div className="page__title-wrapper">
              <h1 className="page__title">
                Brand of eco-cosmetics and magic candles
              </h1>
            </div>

            <p className="hero__text">20% of sales at a wild bird shelter</p>

            <div className="hero__button-wrapper">
              <Button title="shop" href="#shop"/>
            </div>
          </div>

          <div className="hero-grid__item hero-grid__item--ipad-1-6 hero-grid__item--desktop-7-12">
            <div className="hero__image-wrapper">
              <picture>
                <source srcSet={candlesMobile} media="(max-width:690px)" />
                <source srcSet={candlesTablet} media="(max-width:1280px)" />
                <img
                  src={candlesDesktop}
                  alt={"eco-candles"}
                  className="hero__image"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
