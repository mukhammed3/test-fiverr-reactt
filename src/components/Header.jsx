/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

//svg
import { ReactComponent as LogoSvg } from "../svg/Logo.svg";
import { ReactComponent as TalkBackSvg } from "../svg/TalkBackground.svg";
import { ReactComponent as TalkIconSvg } from "../svg/TalkIcon.svg";

function Header() {
  return (
    <>
      <header className="header">
        <LogoSvg className="logo" />
        <nav className="nav">
          <a href="#" className="nav__link nav__link--current">
            Home
          </a>
          <a href="#" className="nav__link">
            About Us
          </a>
          <a href="#" className="nav__link">
            Services
          </a>
          <a href="#" className="nav__link">
            Portfolio
          </a>
          <a href="#" className="nav__link">
            Testimonials
          </a>
          <a href="#" className="nav__link">
            Contact Us
          </a>
        </nav>
        <div className="lets-talk">
          <TalkBackSvg className="lets-talk__background" />
          <TalkIconSvg className="lets-talk__icon" />
          <p className="lets-talk__text">Let's Talk</p>
        </div>
      </header>

      {/* mobile menu  */}
      <div class="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul class="menu__box">
          <li>
            <a class="menu__item menu__item--current" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              About Us
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Services
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a class="menu__item" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
