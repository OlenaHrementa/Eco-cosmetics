import React from "react";
import "./Benefits.scss";

const Benefits = () => {
  return (
    <section className="benefits page__section">
      <div className="container">
        <div className="grid grid--ipad">
          <div className="benefits__item grid__item grid__item--ipad-1-2 grid__item--desktop-1-4">
            <div className="benefits__icon-wrapper">
              <div className="icon icon--turtle benefits__icon"></div>
            </div>
            <p className="benefits__text">No synthetics and microplastics</p>
          </div>

          <div className="benefits__item grid__item grid__item--ipad-3-4 grid__item--desktop-5-8">
            <div className="benefits__icon-wrapper">
              <div className="icon icon--reused benefits__icon"></div>
            </div>
            <p className="benefits__text">
              product packaging can be recycled or reused
            </p>
          </div>

          <div className="benefits__item grid__item grid__item--ipad-5-6 grid__item--desktop-9-12">
            <div className="benefits__icon-wrapper">
              <div className="icon icon--leaves benefits__icon"></div>
            </div>
            <p className="benefits__text">only natural ingredients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
