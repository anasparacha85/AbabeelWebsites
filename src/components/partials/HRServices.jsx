
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import ImageCard from '../common/ImageCards';
import Aos from 'aos';
import "aos/dist/aos.css"
import HRService from '/public/HRService.jpg'
import Recruitment from '/public/recruitmentsolution.jpg'
import Staffing from '/public/staffing.jpg'
import Placement from '/public/permanentplacing.jpg'
import Executive from '/public/ExecutiveSearch.jpg'
import Industry from '/public/IndustrySpecialization.jpg'
import Payroll from '/public/payroll.jpg'

const HRServices = () => {
    useEffect(()=>{
        Aos.init()
    },[])
 const images=[
        Recruitment,Staffing,Placement,Executive,Industry,Payroll
 ]
  const services = [
    {
      title: "Recruitment Solutions",
      description: "We offer a full range of recruitment servies tailored to meet the diverse needs of our clients.Our experts utilize innovative stratergies to source,screen,and select the best candidates..",
      image: images[0]
    },
    {
      title: "Temporary Staffing",
      description: "Need temporary workers for a project or peak season?Our temporary staffing solutions ensure you have the rightt talent when you need it.",
      image: images[1]
    },
    {
      title: "Permanent Placement",
      description: "Focused on finding the best long term fit,we identify and place candidates who allign with your company culture and objectives.",
      image: images[2]
    },
    {
      title: "Executive Search",
      description: "Our executive search services help you find top level professionals for critical roles in your organization,ensuring ledership quality and vision.",
      image: images[3]
    },
    {
      title: "Industry Specialization",
      description: "We serve a variety of sectors,including: -Information Technology -Healthcare -Engineering -Hospitality -Sales &Marketing -Finance &Marketing.",
      image: images[4]
    },
    {
      title: "Payroll Management",
      description: "Our payroll management services ensure accurate and timely salary disbursements,compliance with local regulations,and efficient handling of all payroll related tasks.",
      image: images[5]
    }
  ];

  return (
     <div className="relative w-full h-full overflow-hidden">
      {/* Background Video */}
      <img
       
        src={HRService} 
        
       
       alt='no image'
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-7xl mx-auto relative py-20">
        {/* Header */}
        <div className="text-center mb-16">
         <h2 className="text-xl font-serif md:text-xl font-light text-orange-300">
            What we do.
          </h2>
          <h1 data-aos="fade-up"
     data-aos-duration="1000" className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Discover Our Core HR Services
          </h1>
          <h2 data-aos="fade-up"
     data-aos-duration="1000" className="text-3xl md:text-4xl font-bold text-white">
            For Your Business.
          </h2>
        </div>

        {/* Services Cards */}
        <div  className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            
           <ImageCard ImageUrl={service.image} title={service.title} description={service.description} />
           
          ))}
        </div>

        {/* Additional spacing for better visual balance */}
        <div className="mt-16"></div>
      </div>
    </div>
  );
};

export default HRServices;