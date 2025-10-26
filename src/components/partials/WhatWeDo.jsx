import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
const WhatWeDoSection = () => {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
  const services = [
    {
      title: 'HR in a Box',
      description: 'Build your HR function with confidence using our comprehensive one-time setup toolkit. It includes 80 customizable, legally compliant HR documents, templates, and tools to manage the entire employee lifecycle.',
            image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/09/contract-staffed-employee-working.jpg',

      buttonColor: 'bg-orange-400 hover:bg-orange-500'
    },
    {
      title: 'Recruitment',
      description: 'We go beyond filling roles—we find talent that fits your business and culture. Combining recruitment know-how with hands-on support, we help you build strong, high-performing teams.',
           image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/09/contract-staffed-employee-working.jpg',

        buttonColor: 'bg-orange-400 hover:bg-orange-500'
    },
    {
      title: 'HR on Demand',
      description: 'Access senior HR expertise exactly when you need it. Our pay-as-you-go model means no retainers, just reliable support for your people matters, delivered flexibly to suit your business needs.',
          image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/09/contract-staffed-employee-working.jpg',

        buttonColor: 'bg-orange-400 hover:bg-orange-500'
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">What We Do</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div data-aos="zoom-in-down" data-aos-offset="300" key={index} className="bg-white   transition-all duration-300 overflow-hidden group">
              <img src={service.image} alt="no image" className="h-48 w-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform"/>
               
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <button className={`w-full ${service.buttonColor} text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105`}>
                  Book a Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhatWeDoSection