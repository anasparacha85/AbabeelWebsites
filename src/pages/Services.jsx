import React, { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import About from '../components/partials/About'
import HRServices from '../components/partials/HRServices'
import ServicesPartials from '../components/partials/Servicespartials'
import ServicesHeroSection from '../components/partials/ServicesHeroSection'
import BenefitsSection from '../components/partials/BenifitsSections'


import HRprocessSection from '../components/partials/HRprocessSection'
import PricingPlans from '../components/partials/PricingPlans'
import ServiceTeamSection from '../components/partials/ServiceTeamSection'
import ServiceFAQ from '../components/partials/ServiceFAQ'
import CTAComponent from '../components/partials/CTAComponent'
import BlogComponent from '../components/partials/BlogComponent'
import Footer from '../components/common/Footer'
import TestimonialsSection from '../components/partials/TestimonialsSection'
import ServicesOrganizationsSections from '../components/partials/ServicesOrganizationsSections'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ServiceBackground from '/public/Servicebackground.jpg'
import { blogsData } from '../Data/BlogsData'

const Services = () => {
  // useEffect(()=>{Aos.init()},[])
   const blogPosts =blogsData.slice(3,6)

  return (
    <>
     <div className="relative w-screen  md:h-screen h-[400px] overflow-hidden">
      {/* Background Video */}
      <img
       
        src={ServiceBackground} 
        
       
       alt='no image'
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div  className="relative z-10 flex flex-col justify-center items-center h-full px-6 lg:px-20 text-white">
       <h3 className="text-[11px] text-orange-300 md:text-[15px] text-center font-normal max-w-3xl leading-tight">
          Trusted Recruitment & HR Partner in Dubai
        </h3>
        <h1 data-aos="fade-up"
     data-aos-duration="2000" className="text-3xl mt-7 md:text-6xl md:w-[60%] text-center font-semibold max-w-3xl leading-tight">
        Scalable HR & Recruitment Solutions to Power Your Business Growth
        </h1>
        <div className='w-full flex justify-center'>
            <button className="bg-orange-500 hover:-translate-y-2 ease-in-out transition-all cursor-pointer  uppercase text-sm font-bold mt-7 flex gap-3 items-center text-white px-8 py-3 rounded-3xl hover:bg-orange-600 duration-500">
         Hire Talent Today
        </button>
        </div>
        
      </div>
     
    </div>
    <About/>
    <ServicesOrganizationsSections/>
    <HRServices/>
    <ServicesPartials/>
    <ServicesHeroSection/>
    <BenefitsSection/>
    <TestimonialsSection/>
    <HRprocessSection/>
    {/* <PricingPlans/> */}
    <ServiceTeamSection/>
    <ServiceFAQ/>
    <CTAComponent/>
    <BlogComponent blogPosts={blogPosts}/>
    <Footer/>
     {/* <StatsSection/>
     <HiringSteps/>
     <OrganizationsSection/>
     <IndustriesSection/>
     <HRHeroSection/>
     <ServicesSection/>
     <ExpertiseSection/>
     <FAQs/>
     <WhatWeDoSection/>
     <ResourcesSection/>
     <HrServices/>
     <RecentEngagements/>
     <Footer/> */}
     
    </>
  )
}

export default Services
