import React, { useEffect } from 'react'
import TestimonialsSection from '../components/partials/TestimonialsSection'
import GrayTestimonialsSection from '../components/partials/GrayTestimonialsComponent'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import CTAComponent from '../components/partials/CTAComponent'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Testimonials = () => {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
  return (
    <div>
      <div className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Video */}
      <img
       
        src="https://media.istockphoto.com/id/2031208312/photo/modern-style-luxury-black-meeting-room-interior-with-night-city-view-background-3d-render.jpg?b=1&s=612x612&w=0&k=20&c=c92tp5WpsPQuWkd01A-hajXCMnsr8VEJ_RlJghXszAM=" 
        
       
       alt='no image'
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 lg:px-20 text-white">
       <h3 data-aos='fade-up' data-aos-duration='1000' className="text-[11px] md:text-[15px] text-orange-300 text-center font-normal max-w-3xl leading-tight">
          Testimonials
        </h3>
        <h1 data-aos='fade-up' data-aos-duration='2000' className="text-3xl md:text-5xl text-center font-bold max-w-3xl leading-tight">
         Lets Discover What They Says About Our Business.
        </h1>
       
        
      </div>
     
    </div>
    <TestimonialsSection/>
    <GrayTestimonialsSection/>
       <CTAComponent/>
       <Footer/>
    </div>
  )
}

export default Testimonials
