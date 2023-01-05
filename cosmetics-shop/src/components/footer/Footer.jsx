import React from "react";
import "./Footer.scss";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="grid grid--ipad">
          <div className="grid__item grid__item--ipad-1-1 grid__item--desktop-1-3">
            <nav className="nav footer__nav">
              <ul className="nav__list footer__list">
                <li className="nav__item footer__nav-item">
                  <Link to="#shop" className="nav__link footer__link" smooth>
                    Shop
                  </Link>
                </li>

                <li className="nav__item footer__nav-item">
                  <Link
                    to="#contactUs"
                    className="nav__link footer__link"
                    smooth
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav__item footer__nav-item">
                  <Link to="#about" className="nav__link footer__link" smooth>
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="grid__item grid__item--ipad-4-6 grid__item--desktop-8-12">
            <div className="footer__text">Ukraine</div>

            <a
              href="mailto:support.mountain@gmail.com"
              className="footer__link footer__text"
            >
              support.mountain@gmail.com
            </a>

            <a href="tel:+380934476839" className="footer__link footer__text">
              +380934476839
            </a>

            <div className="footer__text">
              Support is available Monday - Friday 9am-6pm
            </div>
          </div>

          <div className="grid__item grid__item--ipad-1-3 grid__item--desktop-1-5">
            <p className="footer__text footer__text--author">
              Made with 🤍 by Olena Hrementa
            </p>
            <div className="footer__text footer__text--copyright">
              <span className="footer__copyright">Copyright</span>&copy; 2023
              witch of mountain winds
            </div>
          </div>

          <div className="grid__item grid__item--desktop-8-8">
            <div className="footer__social-link">
              <a
                href="https://www.facebook.com/witch.of.mountain.winds"
                target="_blank"
                className="icon icon--facebook"
              ></a>
              <a
                href="https://www.instagram.com/witch_of_mountain_winds/"
                target="_blank"
                className="icon icon--instagram"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
