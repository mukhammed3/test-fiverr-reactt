import React from "react";

//svg
import { ReactComponent as EclipseSvg } from "../svg/Home/Ellipse.svg";
import { ReactComponent as OptionsSvg } from "../svg/Home/OptionsIcon.svg";
import { ReactComponent as OptionsBackgroundSvg } from "../svg/Home/OptionsBackground.svg";

//img
import Hero from "../images/hero.jpg";

function Home() {
  return (
    <section className="section-main">
      <div className="section-main__item">
        <EclipseSvg className="section-main-eclipse" />
        <h2 className="main-title">
          We Brew Success For You <br />
          With Our Exceptional
        </h2>
        <div className="typewriter">
          <h2 className="main-sub-title">Web Development</h2>
        </div>
        <p className="main-text">
          Take A Sip Of Success With Digital Solutions, Crafted Just For You.
          <br />
          We help build and manage your creative and digital media.
        </p>
        <div className="main-options">
          <OptionsBackgroundSvg className="main-options__background" />
          <p className="main-options__text">Our Services</p>
          <div className="main-options__circle">
            <OptionsSvg className="main-options__icon" />
          </div>
        </div>
      </div>
      <div className="section-main__item">
        <img src={Hero} alt="Hero" />
      </div>
    </section>
  );
}

export default Home;
