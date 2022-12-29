import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">No 13, Oloruntedo street, Okeira nla, Ajah, Lagos Nigeria.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 08:00 am - 12:00 am.</p>
        <p className="p__opensans">Sat - Sun: 07:00 am - 11:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}> <a href="https://wa.me/message/LACPTRIBV5JCM1">Visit Us</a>
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.beauty} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
