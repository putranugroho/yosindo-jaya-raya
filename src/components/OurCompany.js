import React from 'react'
import './css/OurCompany.css'

function OurCompany() {
    return (
        <div id="our-company">
            <div className="our__company company1">
                <div className="company__header">Bina Insani</div>
                <div className="company_item">
                    <div className="company__box1">
                        <div className="company__logo">
                            <img
                            className='company__image'
                            alt=""
                            src='images/logo_company1.svg'
                            style={{width: "500px"}} 
                            />
                        </div>
                    </div>
                    <div className="company__box2">
                        <div className="company__text">Bina Insani merupakan perusahaan wisata nasional yang bergerak dibidang Tour and Travel haji dan umroh. Perusahaan ini didirikan pada tahun 2018. Produk jasa  meliputi program umroh promo, umroh reguler, umroh plus, haji plus, tour domestik dan internasional</div>
                        <button className="company__button">Lebih Lanjut</button>
                    </div>
                </div>
            </div>
            <div className="our__company company2">
                <div className="company__header">Jaya Raya Resources</div>
                <div className="company_item">
                    <div className="company__box1">
                        <div className="company__logo">
                            <img
                            className='company__image'
                            alt=""
                            src='images/logo_company2.svg'
                            />
                            <div className="company__detail">Jaya Raya Resources</div>
                        </div>
                    </div>
                    <div className="company__box2">
                        <div className="company__text">PT Jaya Raya Resources( JRR ) adalah perusahaan yang bergerak dalam bidang pertambangan dan pemasaran batubara untuk pelanggan industri baik pasar ekspor maupun domestik yang berlokasi di Jambi, Indonesia.</div>
                        <button className="company__button">Lebih Lanjut</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCompany
