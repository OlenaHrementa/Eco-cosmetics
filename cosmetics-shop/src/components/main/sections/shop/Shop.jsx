import React from "react";
import "./Shop.scss";
import Button from "../../../shared/button/Button";
import oilDesktop from "../../../../assets/images/shop/hydrophilic-oil-desktop.jpg";
import oilTablet from "../../../../assets/images/shop/hydrophilic-oil-tablet.jpg";
import oilMobile from "../../../../assets/images/shop/hydrophilic-oil-mobile.jpg";
import ubtainDesktop from "../../../../assets/images/shop/ubtain-desktop.jpg";
import ubtainTablet from "../../../../assets/images/shop/ubtain-tablet.jpg";

const Shop = () => {
  return (
    <section className="shop page__section" id="shop">
      <div className="container">
        <div className="page__section-subtitle-on-desktop shop__subtitle">
          shop
        </div>

        <div className="grid grid--ipad">
          <div className="grid__item grid__item--ipad-1-3 grid__item--desktop-2-6">
            <h2 className="shop__title page__section-title">shop</h2>

            <nav className="shop__nav">
              <ul className="shop__list">
                <li className="shop__list-item">
                  <a href="#0" className="shop__list-link">
                    face
                  </a>
                </li>
                <li className="shop__list-item">
                  <a href="#0" className="shop__list-link">
                    body
                  </a>
                </li>
                <li className="shop__list-item">
                  <a href="#0" className="shop__list-link">
                    hair
                  </a>
                </li>
                <li className="shop__list-item">
                  <a href="#0" className="shop__list-link">
                    candles
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="grid grid--only-ipad shop__content">
          <div className="grid__item grid__item--ipad-1-3 shop__good">
            <div className="good">
              <div className="good__image-wrapper">
                <picture>
                  <source srcSet={oilMobile} media="(max-width:690px)" />
                  <source srcSet={oilTablet} media="(max-width:1280px)" />
                  <img
                    src={oilDesktop}
                    alt={"Hydrophilic oil"}
                    className="good__image"
                  />
                </picture>
              </div>

              <h3 className="good__subtitle">Hydrophilic oil</h3>

              <div className="good__price">160 UAH</div>
            </div>
          </div>

          <div className="grid__item grid__item--ipad-4-6 shop__good">
            <div className="good good--second">
              <div className="good__image-wrapper">
                <picture>
                  <source srcSet={ubtainTablet} media="(max-width:1280px)" />
                  <img
                    src={ubtainDesktop}
                    alt={"ubtan"}
                    className="good__image"
                  />
                </picture>
              </div>

              <h3 className="good__subtitle">ubtan</h3>

              <div className="good__price">160 UAH</div>
            </div>
          </div>
        </div>

        <div className="shop__button-wrapper">
          <Button title=" all products" href="#0"/>
        </div>
      </div>
    </section>
  );
};

export default Shop;
