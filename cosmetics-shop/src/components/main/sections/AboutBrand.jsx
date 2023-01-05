import React from "react";
import "../sections/AboutBrand.scss";
import aboutBrandDesktop from "../../../assets/images/about-brand-desktop.jpg";
import aboutBrandTablet from "../../../assets/images/about-brand-tablet.jpg";
import aboutBrandAdditional from "../../../assets/images/about-brand-additional-photo.jpg";

const AboutBrand = () => {
  return (
    <section className="about page__section" id="about">
      <div className="container">
        <div className="page__section-subtitle-on-desktop about__subtitle">
          witch of mountain winds
        </div>

        <div className="grid grid--ipad">
          <div className="grid__item grid__item--ipad-1-3 grid__item--desktop-2-5">
            <h2 className="page__section-title about__title">
              about our brand
            </h2>

            <p className="about__paragraph">
              Our brand cosmetics are made from natural ingredients and we are
              promoting them to the masses. Shampoo, hair conditioner, soap - in
              recycled paper. Creams, oils, washing products in glass containers
              with recycled paper labels. No synthetics and microplastics in
              cosmetics. And the packaging from it can be returned for recycling
              or reused.
            </p>

            <p className="about__paragraph about__paragraph--on-desktop">
              We are all neighbors of one big House. And we must protect what we
              have. Destroying everything around for the sake of consumerism and
              imaginary convenience, we destroy what does not belong to us. Be
              aware of your choice!
            </p>

            <a href="#0" className="about__link">
              LEARN MORE
            </a>
          </div>

          <div className="grid__item grid__item--ipad-4-6 grid__item--desktop-7-10">
            <picture>
              <source srcSet={aboutBrandTablet} media="(max-width:1280px)" />
              <img
                src={aboutBrandDesktop}
                alt={"our brand"}
                className="about__image"
              />
            </picture>
          </div>

          <div className="grid__item grid__item--desktop-11-12">
            <div className="about__image-wrapper">
              <img
                src={aboutBrandAdditional}
                alt={"our brand"}
                className="about__image--on-desktop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;
