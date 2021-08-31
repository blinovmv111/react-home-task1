import React from 'react';
import Slider from 'react-slick';

import {SlidersCard} from '../../smallSliderData.js'

import './smallSlider.scss';

const SmallSlider = () => {

  interface SliderObject {
    photo: any,
    title: string,
  };

    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      dots: false,
      speed: 500,
      slidesToShow: 7,
      swipeToSlide: true,
    };
 
    return (
        <div className="small-slider-container">
            <h3>Featured Tracks</h3>
              <Slider {...settings}>
                {SlidersCard.map((slide: SliderObject, index: number) => {
                  return (
                    <div className="slideSmall" key={index}>
                      <img src={slide.photo} alt="img"/>
                      <div className="titleTrack">{slide.title}</div>
                      <span>Jonas Brothers</span>
                    </div> 
                  )                    
                })}                                        
              </Slider>
        </div>
    );
};

export default SmallSlider;