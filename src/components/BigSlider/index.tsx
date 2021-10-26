import React from 'react';
import Slider from 'react-slick';

import Image from '../ImageComponent';
import Button from '../Button';
import Icon from '../IconsComponent';

import style from './bigSlider.module.scss';

const BigSlider = () => {

    const handleClick = () => {
      alert('pressed!');
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: style.bigSlider,
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
        <div className={style.slide1}>
          <div className={style.description}>
            <span className={style.tranding}>&frasl; &frasl; &ensp;TRENDING</span>
            <h2 className={style.artistHeader}>Akcent feat Lidia Buble & DDY Nunes</h2>
            <span className={style.song}>- Kamelia</span>
            <div className={style.buttonContainer}>
              <Button className={style.buttonPlay} onClick={handleClick}>
                PLAY
                <span className={style.buttonPlayIcon} >
                  <Icon name="play" width="7" height="9" fill="#E6152B" stroke="#F51E38" stroke-width="0.3"/>
                </span>                
              </Button>
              <Button className={style.buttonShare} onClick={handleClick}>
                <span className={style.buttonShareIcon} >
                  <Icon name="share" width="14" height="12" fill="#F51E38"/>
                </span>                
              </Button>
            </div>
          </div>          
          <Image src="images/bigSlider/ant1.png "/>
        </div>
        <div className={style.slide2}>
          <Image src="images/bigSlider/ant2.png "/>
        </div>
        <div className={style.slide3}>
          <Image src="images/bigSlider/ant3.png "/>
        </div>
        <div className={style.slide4}>
          <Image src="images/bigSlider/ant4.png "/>
        </div>             
      </Slider>
    );
};

export default BigSlider;