import React from 'react';
import './css/OurPartner.css';
// import InstagramEmbed from 'react-instagram-embed';

function OurPartner() {
  return (
    <div id="our-partner" className='partner'>
      <div className='partner__container'>
        <div className='partner__header'>Yosindo Portfolio</div>
        <div className="partner__images">
          <img
            className='partner__image'
            alt=""
            src='images/gambar1.svg'
          />
          <img
            className='partner__image'
            alt=""
            src='images/gambar2.svg'
          />
          <img
            className='partner__image'
            alt=""
            src='images/gambar3.svg'
          />
          <img
            className='partner__image'
            alt=""
            src='images/gambar4.svg'
          />
        </div>
      </div>
      <div className='partner__container'>
        <div className='partner__header' style={{marginTop: "50px"}} >Our Partners</div>
        <div className="partner__images2">
          <img
            className='partner__image'
            alt=""
            src='images/logo_partner1.svg'
            style={{borderRadius: "0px"}}
          />
          <img
            className='partner__image'
            alt=""
            src='images/logo_partner2.svg'
            style={{borderRadius: "0px"}}
          />
        </div>
      </div>
    </div>
  );
}

export default OurPartner;