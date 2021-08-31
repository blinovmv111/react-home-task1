import React from 'react';
import Slider from 'react-slick';

import './bigSlider.scss';
import share from '../../icons/share.svg';
import play from '../../icons/play.svg';

const BigSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
          customPaging: (i: any) => (
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
            <span className="slide1__descr-span">// TRENDING</span>
            <h2>Akcent feat Lidia Buble & DDY Nunes</h2>
            <span className="slide1__descr-span slide1__descr-span_16px">- Kamelia</span>
            <div className="button-container">
              <button className="play">
                PLAY
                <img src={play} alt="icon"/>
              </button>
              <button className="share">
                <img src={share} alt="icon"/>
              </button>
            </div>
          </div>
        </div>
        <div className="slide2">
            <h3>2</h3>
        </div>
        <div className="slide3">
            <h3>3</h3>
        </div>
        <div className="slide4">
            <h3>4</h3>
        </div>             
      </Slider>
    );
};

export default BigSlider;