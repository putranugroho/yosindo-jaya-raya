import React from 'react';
import './css/Cards.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function CardsCap() {

  const flatCaps = [
    'images/caps1.png',
    'images/caps2.png'
  ];

  return (
    <div className='cards'>
        <img
          className='cards__header'
          alt=""
          src='/images/our-product-caps.png'
        />
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={flatCaps[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img alt="" src={flatCaps[1]} />
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default CardsCap;