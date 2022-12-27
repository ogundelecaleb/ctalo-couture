/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding "
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.needle} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Ctalo couture is a Nigerian-based custom tailor with strong commitment
          to provide quality clothings that meet local demands while also
          competing favourably with foreign fashion brands. Ctalo couture piece
          are Made-to-order basis, that is, the attire are made available when
          order and payment are made. <br /> Our attires are cut and
          sewn according to our size guide. Customized measurements are allowed
          if your size doesn&lsquo;t tally with our size chart. Alteration in
          our designs is allowed with an extra fee. We ensure that every
          customer feels confident by choosing designs and styles that fits them
          amd we do our part by delivering a topnotch service to satisfy our client's personal
          need.
        </p>
        <button type="button" className="custom__button">
          <a href="https://Instagram.com/ctalo_couture?igshid=YmMyMTA2M2Y=">Know More</a>
        </button>
      </div>

      <div className="app__aboutus-content_history animate__animated animate__slideInUp">
        <h1 className="headtext__cormorant">Featured Product</h1>
        <img src={images.needle} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Our products includes custom-made outfits for ladies, cooperate
          wears(skirts and gowns) for ladies, beach wears, wedding gowns, on
          demand styles and uniforms.
        </p>
        <button type="button" className="custom__button">
          <a href="https://Instagram.com/ctalo_couture?igshid=YmMyMTA2M2Y=">Know More</a>
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
