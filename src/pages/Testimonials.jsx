import React, { useEffect } from 'react'
import TestimonialsSection from '../components/partials/TestimonialsSection'
import GrayTestimonialsSection from '../components/partials/GrayTestimonialsComponent'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import CTAComponent from '../components/partials/CTAComponent'
import testimonialBg from '/public/picture-of-attractive-saleswoman-working-in-office-2025-03-13-02-19-21-utc - Copy - Copy.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
  // useEffect(() => {
  //   Aos.init()
  // }, [])

  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="relative w-full h-[60vh]  bg-no-repeat"
        style={{ backgroundImage: `url(${testimonialBg})` ,backgroundPosition:'center',backgroundSize:'cover'}}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 lg:px-20 text-white">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[11px] md:text-[15px] text-orange-300 text-center font-normal max-w-3xl leading-tight"
          >
            Testimonials
          </h3>

          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-3xl md:text-5xl text-center font-bold max-w-3xl leading-tight"
          >
            Lets Discover What They Says About Our Business.
          </h1>
        </div>
      </div>

      {/* PAGE SECTIONS */}
      <TestimonialsSection />
      <GrayTestimonialsSection />
      <CTAComponent />
      <Footer />
    </div>
  )
}

export default Testimonials
