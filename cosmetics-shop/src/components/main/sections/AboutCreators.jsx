import React from "react";
import "./AboutCreators.scss";
import Button from "../../shared/Button";
import BirdDesktop from "../../../assets/images/bird-desktop.jpg";
import BirdTablet from "../../../assets/images/bird-tablet.jpg";


const AboutCreators = () => {
  return (
    <section className="about-creators page__section">
      <div className="container">
        <div className="page__section-subtitle-on-desktop about-creators__subtitle">
          about the creators
        </div>

        <div className="grid grid--ipad">
          <div className="grid__item grid__item--ipad-1-3 grid__item--desktop-2-5">
            <h2 className="page__section-title about-creators__title">
              about the creators
            </h2>

            <div className="about-creators__paragraphs-wrapper">
              <p className="about-creators__paragraph">
                My name is Victoria, I’m a master at candle making and natural
                cosmetics. In the past, a cynologist, was engaged in herbs, made
                layouts on the Tarot.
              </p>

              <p className="about-creators__paragraph">
                I am also a volunteer to save wild birds in distress, a
                consultant to the Phoenix Wildlife Rehabilitation Center, a
                member of the Society for the Conservation of Birds of Ukraine
                with the support of Birdlife International.
              </p>

              <p className="about-creators__paragraph about-creators__paragraph--on-desktop">
                My husband and I live in the Carpathian region in the city of
                Chernivtsi. I dream of my center for the rehabilitation of wild
                birds, as it is very difficult to rescue birds in a rented
                communal apartment.
              </p>
            </div>

            <a href="#0" className="about-creators__link">
              LEARN MORE
            </a>

            <Button title="to contact us" href="#0"/>
          </div>

          <div className="grid__item grid__item--ipad-4-6 grid__item--desktop-7-12">
            <picture>
              <source srcSet={BirdTablet} media="(max-width:1280px)" />
              <img src={BirdDesktop} alt={"bird"} className="about__image" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreators;
