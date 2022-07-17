import React from 'react'
import './css/ContactUs.css'

function ContactUs() {
    return (
        <div id="contact-us" className="contact__us">
            <div className="text__box1">
                <div className="text__header">Kirim Pesan</div>
                <div className="text__detail">Anda mempunyai pertanyaan atau ingin mengetahui informasi tentang kami, kirim pesan disini.</div>
            </div>
            <form className="form">
                <input className="form__input" placeholder="Your Name"/>
                <input className="form__input" placeholder="Your Email"/>
                <input className="form__input" style={{height: "100px"}} placeholder="Your Message"/>
            </form>
            <button className="form__button">Submit</button>
        </div>
    )
}

export default ContactUs
