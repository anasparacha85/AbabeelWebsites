import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import "aos/dist/aos.css"
import Perfromace from '/public/perfromacen.jpg'
import Skill from '/public/skilldevelopment.jpg'
import Employeetraining from '/public/employeetraining.jpg'
// Services Section Component with Tabs
const ServicesSection = () => {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
  const [activeTab, setActiveTab] = useState('staffing')

  const directHireServices = [
    {
      title: 'Best Consulting',
      description: 'We have best consulting & experienced adviser.',
      image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2025/04/Executive-Search-Thumbnail-min.jpg',
      buttonText: 'Begin Hiring'
    },
    {
      title: 'Accurate Data',
      description: 'We build accurate data all of our bank reporting',
      image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/04/it-executive-recruitment-employee-working-1.jpg',
      buttonText: 'Begin Hiring'
    },
    {
      title: 'Recruitment Process Outsourcing',
      description: 'Outsource full-cycle, project-based, or hybrid hiring to our expert recruiters for fast, flexible talent solutions.',
      image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2025/06/NEW-Recruiter-On-Demand-Thumbnail-Size.webp',
      buttonText: 'Begin Hiring'
    }
  ];

  const staffingServices = [
    {
      title: 'Skill Development',
      description: 'Ababeel Recruitment Agency FZE LLC provides solutions that help your employees acquire the skills and knowledge.',
      image: Skill,
      buttonText: 'Get Started'
    },
    {
      title: 'Customized Programs',
      description: 'All of our employee training programs are customized to the specific requirements of your industry.',
      image:Employeetraining,
      buttonText: 'Get Started'
    },
    {
      title: 'Performance Improvement',
      description: 'Our training programs at Ababeel Recruitment Agency focus on enhancing the performance of your employees',
      image:Perfromace,
      buttonText: 'Get Started'
    }
  ];

  const currentServices = activeTab === 'direct-hire' ? directHireServices : staffingServices;

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
  <div className="bg-white p-2 flex gap-4">
   <button
      onClick={() => setActiveTab("staffing")}
      className={`px-8 py-3 cursor-pointer  font-medium transition-all duration-300 
        ${
          activeTab === "staffing"
            ? "text-black border-b-4 border-orange-500"
            : "text-gray-600 hover:text-gray-900 border-gray-400"
        }`}
    >
      Employee Services
    </button>
    <button
      onClick={() => setActiveTab("direct-hire")}
      className={`px-8 py-3 cursor-pointer border-gray-400 font-medium transition-all duration-300 
        ${
          activeTab === "direct-hire"
            ? "text-black border-b-4 border-orange-500"
            : "text-gray-600 hover:text-gray-900 border-gray-400"
        }`}
    >
      Direct Hire Services
    </button>

   
  </div>
</div>

        {/* Services Grid */}
        <div className="flex justify-between flex-col md:flex-row gap-8">
          {currentServices.map((service, index) => (
           <div
  data-aos="fade-up"
  data-aos-duration="3000"
  key={index}
  className="bg-white  w-full md:w-[30%] 
             shadow-[0_0_20px_rgba(0,0,0,0.2)] 
             hover:shadow-orange-600  ease-in-out
             transition-all duration-800 group delay-100"
>

              <img src={service.image} alt='no image' className="h-48 w-full bg-gradient-to-br from-gray-100 to-gray-200 mb-6 flex items-center justify-center text-6xl  transition-transform">
              
              </img>
              <div className='w-[100%] flex justify-center flex-col px-3 '>
                 <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
             
              <p className="text-gray-600 mb-6 leading-relaxed text-center">{service.description}</p>
             <div className='w-[100%] flex justify-center py-3'>
              <button className="w-[30%]  bg-transparent border-1 border-orange-500 text-orange-500 py-3  hover:bg-orange-500 hover:text-white transition-all duration-300 font-normal">
                {service.buttonText}
              </button>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesSection