/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-indent */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable import/no-duplicates */
import React from "react";
// import { Link } from "react-router-dom";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";


import { SubHeading } from "../../components";
import { data } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scrollRef2 = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  const scroll2 = (direction) => {
    const { current } = scrollRef2;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Here is collection of dress styles proudly worn by our beautiful customers, we put in so much effort to please
           our customer demands to put a beautiful smile in their faces.
        </p>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {data.gallery2.map((image) => (
            <div className="app__gallery-images_card flex__center">
              <a href={image.link}>
                <img src={image.imgUrl} alt="gallery_image" />
              </a>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}

        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef2}>
          {data.gallery.map((image) => (
            <div className="app__gallery-images_card flex__center">
              <a href={image.link}>
                <img src={image.imgUrl} alt="gallery_image" />
              </a>
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}

        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll2("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll2("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
