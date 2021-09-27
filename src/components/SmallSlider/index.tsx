import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import Image from '../ImageComponent';
import Loader from '../Loader';

import './smallSlider.scss';

const SmallSlider = () => {
  
  const [slideList, setSlideList] = useState<string[]>([]);

  async function fetchImage(q: number) {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${q}`);
      setSlideList(response.data.message);
    } catch (e) {
      alert(e)
    }
  }

  useEffect(() => {
    fetchImage(20);
  }, [])

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
      const a = new URL(urlPath);
      const b = a.pathname.split('/')[2];      
      return b.slice(0, 1).toUpperCase() + b.slice(1, b.length);
    }

    const generateKey = (urlPath: string) => {
      return `${ getDogBreed(urlPath) }_${ new Date().getTime() }`;
    }
 
    return (
        <div className="small-slider-container">
            <h3>Featured Tracks</h3>
            {slideList.length ? <Slider {...settings}>
                {slideList.map((slideURL) => {
                  return (
                    <div className="slideSmall" key={generateKey(slideURL)}>
                       <Image src={slideURL}/>
                      <div className="titleTrack">{getDogBreed(slideURL)}</div>
                      <span>cute dog</span>
                    </div> 
                  )                    
                })}                                        
              </Slider> : <Loader/>}
        </div>
    );
};

export default SmallSlider;