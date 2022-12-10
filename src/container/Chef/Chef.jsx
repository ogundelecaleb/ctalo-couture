import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.doyin1} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Designer's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" className="quotee" />
          <p className="p__opensans">I have always believed that fashion was not only to make women more beautiful but also to reassure them, give them confidence.</p>
        </div>
      </div>

      <div className="app__chef-sign">
        <p>Ogundele Esther</p>
        <p className="p__opensans">Designer & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
