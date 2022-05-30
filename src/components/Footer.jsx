import React from "react";

//svg
import { ReactComponent as Partner1Svg } from "../svg/Footer/Partner1.svg";
import { ReactComponent as Partner2Svg } from "../svg/Footer/Partner2.svg";
import { ReactComponent as Partner3Svg } from "../svg/Footer/Partner3.svg";
import { ReactComponent as Partner4Svg } from "../svg/Footer/Partner4.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-section container">
        <span className="footer-section__item">
          <p>We Have Built</p>
          <h3>Soulutions For</h3>
        </span>
        <Partner1Svg />
        <Partner2Svg />
        <Partner3Svg />
        <Partner4Svg />
      </section>
    </footer>
  );
}

export default Footer;
