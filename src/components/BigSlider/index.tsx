import React from 'react';
import Slider from 'react-slick';

import Image from '../ImageComponent';

import './bigSlider.scss';

const BigSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: "big-slider",
          appendDots: (dots: any) => (
            <div
              style={{
                backgroundColor: "none",
                borderRadius: "10px",
                padding: "none"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: () => (
            <div
              style={{
                width: "30px",
                color: "blue",
              }}
            >
              <svg width="16" height="5" viewBox="0 0 16 5" fill="#000" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 0H16L15 5H0L1 0Z" fill="#fff"/>
              </svg>
            </div>
          )
      };
    return (
      <Slider {...settings}>
        <div className="slide1">
          <div className="slide1__descr">
            <span className="slide1__descr-span">&frasl; &frasl; &ensp;TRENDING</span>
            <h2>Akcent feat Lidia Buble & DDY Nunes</h2>
            <span className="slide1__descr-span slide1__descr-span_16px">- Kamelia</span>
            <div className="button-container">
              <button className="play" type="button">                
                PLAY
                <Image src='icons/BigSlider/play.svg' className='play-img'/>
              </button>
              <button className="share" type="button">
                <Image src='icons/BigSlider/share.svg' className='share-img'/>
              </button>
            </div>
          </div>          
          <Image src="images/bigSlider/ant1.png "/>
        </div>
        <div className="slide2">
          <Image src="images/bigSlider/ant2.png "/>
        </div>
        <div className="slide3">
          <Image src="images/bigSlider/ant3.png "/>
        </div>
        <div className="slide4">
          <Image src="images/bigSlider/ant4.png "/>
        </div>             
      </Slider>
    );
};

export default BigSlider;