import React from "react";
import "./ContactUs.scss";
import ContactForm from "../../../shared/contactForm/ContactForm";
import birdDesktop from "../../../../assets/images/contact-bird-desktop.jpg";
import birdTablet from "../../../../assets/images/contact-bird-tablet.jpg";

const ContactUs = () => {
  return (
    <section className="contact-us page__section" id="contactUs">
      <div className="container">
        <div className="page__section-subtitle-on-desktop contact-us__subtitle">
          help
        </div>

        <div className="grid grid--ipad">
          <div className="grid__item grid__item--ipad-1-3 grid__item--desktop-2-5">
            <h2 className="contact-us__title page__section-title">
              contact us
            </h2>

            <p className="contact-us__paragraph">
              We will help you choose a product that suits you and answer your
              other questions
            </p>

            <ContactForm />
          </div>

          <div className="grid__item grid__item--ipad-4-6 grid__item--desktop-8-12">
            <picture>
              <source srcSet={birdTablet} media="(max-width:1280px)" />
              <img
                src={birdDesktop}
                alt={"bird"}
                className="contact-us__image"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
