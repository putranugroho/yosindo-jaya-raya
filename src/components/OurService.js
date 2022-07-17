import React from 'react';
import './css/OurService.css';
// import InstagramEmbed from 'react-instagram-embed';

function OurService() {
  return (
    <div id="service" className='service'>
      <div className='service__container'>
        <div className='service__header'>Full supply Chain Service</div>
        <div className="service__images">
          <img
            className='service__image'
            alt=""
            src='images/service1.svg'
          />
          <img
            className='service__image'
            alt=""
            src='images/service2.png'
            style={{width: "167px"}} 
          />
          <img
            className='service__image'
            alt=""
            src='images/service3.svg'
          />
          <div className='service__detail'>Trading fuel Oil Industry</div>
          <div className='service__detail'>Fuel Scale Distribution</div>
          <div className='service__detail'>Fuel shipping Import</div>
        </div>
      </div>
    </div>
  );
}

export default OurService;