import React from "react";
import "./Header.scss";
import logo from "../../assets/svg/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="top-actions header__top-actions">
          <p className="icon icon--menu" />

          <p className="logo">
            <img src={logo} alt={"logo"} className="logo__image" />
          </p>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="#shop" className="nav__link" smooth>
                  Shop
                </Link>
              </li>

              <li className="nav__item">
                <Link to="#contactUs" className="nav__link" smooth>
                  Contact
                </Link>
              </li>

              <li className="nav__item">
                <Link to="#about" className="nav__link" smooth>
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <p className="icon icon--bag"></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
