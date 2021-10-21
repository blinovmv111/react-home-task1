import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import axios from 'axios';

import Image from '../ImageComponent';
import Loader from '../Loader';

import './smallSlider.scss';

const SmallSlider = () => {
  
  const [slideList, setSlideList] = useState<string[]>([]);

  async function fetchImage(quantity: number) {
    try {
      const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${quantity}`);
      setSlideList(response.data.message);
    } catch (err) {
      alert(err);
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
      const urlString = new URL(urlPath);
      const breed = urlString.pathname.split('/')[2];      
      return breed.slice(0, 1).toUpperCase() + breed.slice(1, breed.length);
    }
 
    return (
        <div className="small-slider-container">
            <h3>Featured Tracks</h3>
            {slideList.length ? <Slider {...settings}>
                {slideList.map((slideURL) => {
                  return (
                    <div className="slideSmall" key={new Date().getTime()}>
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