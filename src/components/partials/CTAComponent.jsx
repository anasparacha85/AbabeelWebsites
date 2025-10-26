import { ArrowRight } from 'lucide-react';
import React from 'react';

const CTAComponent = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-slate-900 bg-opacity-80"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
   <div className="absolute inset-0 bg-slate-900/60"></div>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
          Build Your Team With Ababeel FZE LLC
        </h2>

        <p className="text-gray-200 text-lg leading-relaxed mb-10">
          Your trusted <span className="text-orange-400 font-semibold">recruitment partner in Dubai</span>.  
          We connect businesses with top talent and help professionals find the right opportunities.  
          Let’s shape the future of work—together.
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-3 text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
          Hire Talent Now
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default CTAComponent;
