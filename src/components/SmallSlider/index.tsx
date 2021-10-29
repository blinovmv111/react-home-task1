import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';

import Image from '../ImageComponent';
import Loader from '../Loader';

import style from './smallSlider.module.scss';

const SmallSlider = ({slideList}: any) => {

    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      dots: false,
      speed: 500,
      slidesToShow: 7,
      swipeToSlide: true,
    };
    
    const getDogBreed = (urlPath: string) => {
      const urlString = new URL(urlPath);
      const breed = urlString.pathname.split('/')[2];      
      return breed.slice(0, 1).toUpperCase() + breed.slice(1, breed.length);
    }
 
    return (
        <div className={style.smallSliderContainer}>
            <h3 className={style.smallSliderHeader}>Featured Tracks</h3>
            {slideList.length ? <Slider {...settings}>
                {slideList.map((slideURL: any) => {
                  return (
                    <div className={style.slideSmall} key={new Date().getTime()}>
                       <Image src={slideURL} className={style.smallSlideImage}/>
                      <div className={style.titleTrack}>{getDogBreed(slideURL)}</div>
                      <span className={style.subtitle}>cute dog</span>
                    </div> 
                  )                    
                })}                                        
              </Slider> : <Loader/>}
        </div>
    );
};

export default SmallSlider;