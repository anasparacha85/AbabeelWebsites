import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import PartnerImage from "/public/Partner.jpg"
const HRHeroSection = () => {
  // useEffect(() => {
  //   Aos.init();
  // }, []);
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="space-y-6"
          >
            <div className="inline-block bg-orange-500 w-12 h-2 rounded-full mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Why Partner with Ababeel FZE LLC?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <span className="text-orange-500 font-medium">Ababeel FZE LLC</span>, 
              we specialize in <span className="text-orange-500 font-medium">HR outsourcing</span>,{" "}
              <span className="text-orange-500 font-medium">recruitment solutions</span>, 
              and <span className="text-orange-500 font-medium">payroll services</span> across Dubai and the UAE.  
              Our goal is simple: help businesses save time, reduce costs, and hire the 
              right talent without the hassle of managing complex HR processes.  
              With our transparent approach and industry expertise, we make workforce 
              management smooth and efficient so you can focus on growing your business.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 group">
              Schedule Consultation
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Image */}
          <div
            data-aos="fade-left"
            data-aos-offset="350"
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-lg absolute -top-6 -right-6 z-10"></div>
            <div className="rounded-2xl  p-2  shadow-xl relative">
              <div className="w-full h-96  rounded-xl flex items-center justify-center">
                <img
                  src={PartnerImage}
                  alt="Ababeel Recruitment Dubai"
                  className="w-full h-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRHeroSection;
