/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-indent */
/* eslint-disable quotes */
import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import "animate.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info animate__animated animate__slideInUp">
      <SubHeading title="Chase the new Styles" />
      <div className="app__header-h1 ">CTALO&apos;s COUTURE</div>
      <p className="p__opensans" style={{ margin: "1rem 0" }}>
        A Nigerian based custom tailor that understand the art and science of
        satisfying your clothing needs. Our quality sewn outfits satisfy local
        demand and compete favorably with global fashion brands.{" "}
      </p>
      <button type="button" className="custom__button">
       <a href="#gallery">Explore</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.ctalo} alt="header_img" loading="lazy" />
    </div>
  </div>
);

export default Header;
