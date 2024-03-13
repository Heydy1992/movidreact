import React, { useState, useEffect } from 'react';
import slider1 from '../../resources/1.png';
import slider2 from '../../resources/2.png';
import slider3 from '../../resources/3.png';
import './slider.css';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
        <img src={slider1} alt="slider1" />
      </div>
      <div className="slider" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
        <img src={slider2} alt="slider2" />
      </div>
      <div className="slider" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
        <img src={slider3} alt="slider3" />
      </div>
    </div>
  );
};

export default Slider;