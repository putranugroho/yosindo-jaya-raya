import React from 'react'
import '../App.css'
import HeroSection from './HeroSection'
import About from './About'
import OurService from './OurService'
import Sertifikat from './Sertifikat'
import OurPartner from './OurPartner'
import OurCompany from './OurCompany'
import ContactUs from './ContactUs'
import Footer from './Footer'

function Home() {
    return(
        <>
            <HeroSection/>
            <OurService/>
            <About/>
            <Sertifikat/>
            <OurPartner/>
            <OurCompany/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home