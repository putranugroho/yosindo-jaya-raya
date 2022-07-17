import React from 'react';
import './css/Sertifikat.css';
// import InstagramEmbed from 'react-instagram-embed';

function Sertifikat() {
  return (
    <div id="sertifikat" className='sertifikat'>
      <div className='sertifikat__container'>
        <div className='sertifikat__header'>Sertifikat dan Legalitas</div>
        <div className="sertifikat__images">
          <img
            className='sertifikat__image'
            alt=""
            src='images/sertifikat1.svg'
          />
          <img
            className='sertifikat__image'
            alt=""
            src='images/sertifikat2.svg'
          />
          <img
            className='sertifikat__image'
            alt=""
            src='images/sertifikat3.svg'
          />
          <img
            className='sertifikat__image'
            alt=""
            src='images/sertifikat4.svg'
          />
        </div>
      </div>
      <div className='sertifikat__container'>
        <div className='sertifikat__header' style={{marginTop: "50px"}} >Spesifikasi Minyak dan Bahan Bakar</div>
        <div className="sertifikat__images">
          <img
            className='sertifikat__image'
            alt=""
            src='images/sertifikat5.svg'
          />
        </div>
      </div>
    </div>
  );
}

export default Sertifikat;