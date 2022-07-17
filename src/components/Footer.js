import React from 'react'
import './css/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="company__address" style={{paddingLeft: "80px"}} >
                <div className="address__top">Address</div>
                <div className="address__header">Jakarta</div>
                <div className="address__detail">Gedung MTH. Square Unit OF 03A/08, Jl. MT. Haryono Kav. 10
Kel. Bidara Cina, Kec. Jatinegara, Kotamadya Jakarta Timur 13330</div>
                <div className="address__header">Palembang</div>
                <div className="address__detail">Pelabuhan (port), Mendis Laut, Musi Banyuasin, Sumatera Selatan</div>
                <div className="address__header">Jambi</div>
                <div className="address__detail">Jl. Mas Indah No. 09 Rt.22 Kel. Handil Jaya, Kec Jelutung, KOTA – JAMBI</div>
                <div className="address__header">Batam</div>
                <div className="address__detail">Ruko Taman Lakota Blok D No.6 Batam Centre</div>
            </div>
            <div className="company__address" style={{paddingRight: "80px"}} >
                <div className="address__top">Contact</div>
                <div className='sosmed__wrapper'>
                    <div className="sosmed__images">
                        <img
                        className='sosmed__image'
                        alt=""
                        src='images/logo_mail.svg'
                        />
                        <div className="address__detail">email: pt8yjr@yahoo.co.id</div>
                    </div>
                </div>
                <div className='sosmed__wrapper'>
                    <div className="sosmed__images">
                        <img
                        className='sosmed__image'
                        alt=""
                        src='images/logo_phone.svg'
                        />
                        <div className="address__detail">Telp/Fax : (0741) 5915988 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
