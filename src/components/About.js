import React from 'react'
import "./css/About.css"
// import ReactPlayer from 'react-player'

function About() {
    const sertifikat = "Sertifikasi Perusahaan / ISO"

    return (
        <div id="about" className='about'>
            {/* <div className='about__container'>
                <img
                    className='about__item__img'
                    alt=""
                    src='/images/About.svg'
                />
            </div>
            <div className='about__text'>
                <div className="about__detail">
                Trah Singo Karyan memulai perjalanan dengan melakukan riset sejak tahun 2017 dengan tujuan agar dapat melakukan proses produksi botol kemasan E - Liquid yang memiliki kualitas prima.
                </div><div className="about__detail">
                Untuk dapat dengan segera memenuhi kebutuhan konsumen maka Trah Singo Karyan melakukan proses produksi botol kemasan E – Liquid di wilayah Jawa Barat, Kabupaten Bandung Barat.
                </div><div className="about__detail">
                Komitmen kami adalah mendorong pertumbuhan industry E – Liquid di Indonesia agar dapat tumbuh dan bersaing dalam pasar domestik maupun global.
                </div>
            </div> */}
            <div className='about__text'>
                <div className="about__header">Visi</div>
                <div className="about__detail2">
                    Menjadi Sebuah perusahaan yang bermanfaat, kuat dan hebat dalam melakukan perniagaan dan transportir sehingga terkemuka secara Nasional Maupun Internasional.
                </div>
            </div>
            <div className='about__text'>
                <div className="about__header">{sertifikat}</div>
            </div>
            <div className='about__text'>
                <ul className="about__list">
                    <li>
                        Membangun hubungan kemitraan jangka Panjang dengan partner Bisnis
                    </li>
                    <li>
                        Mendistribusikan BBM di seluruh Indonesia dan memasarkan Produk BBM industri yang terjaga akan kualitasnya
                    </li>
                    <li>
                        Perusaan yang dapat memberikan nilai tambah bagi Partner, Customer, Pekerja, Pemegang Saham dan Masyarakat
                    </li>
                    <li>
                        Perusahaan yang mampu berkontribusi dalam mengisi pembangunan masyarakat, bangsa dan negara republik indonesia serta Dunia
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
