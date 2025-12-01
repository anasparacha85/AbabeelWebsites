// import { Button } from "@/components/ui/button"

import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
const ServicesHeroSection=()=> {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
  return (
    <section className="relative md:min-h-[80vh] h-full f py-6 flex flex-col md:flex-row justify-between overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7793995/pexels-photo-7793995.jpeg?_gl=1*1bcj141*_ga*MTIwNDU4MTc4OS4xNzI1MzYzMjg1*_ga_8JE65Q40S6*czE3NTc3NzMzMTEkbzQ3JGcxJHQxNzU3Nzc0NDQxJGo1OSRsMCRoMA..')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="w-[40%] md:block hidden"></div>

      {/* Content */}
      <div className="md:w-[50%] w-full flex justify-start items-center relative z-10">
      <div className=" text-start text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="text-sm font-medium tracking-wider uppercase text-orange-300">FREE HR ASSESSMENT</span>
        </div>

        <h1 data-aos="fade-up"
     data-aos-duration="1000" className="text-xl md:text-3xl  lg:text-[42px]  font-semibold mb-8 leading-tight text-balance">
         Transform Your HR Today
        </h1>
          <h1 data-aos="fade-up"
     data-aos-duration="1000" className="text-xl md:text-3xl  lg:text-[42px]  font-semibold mb-8 leading-tight text-balance">
          With Us.
        </h1>
        

        <p className="text-sm md:text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover how our tailored HR and recruitment solutions can streamline your workforce management, reduce costs, and help you hire the right talent effortlessly. Get your free HR assessment today and take the first step towards transforming your business with Ababeel FZE LLC.
        </p>

        <button
          size="lg"
         className="bg-orange-500 hover:-translate-y-2 ease-in-out transition-all cursor-pointer  uppercase text-sm font-bold mt-7 flex gap-3 items-center text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500">
        
          GET A QUOTATION →
        </button>
      </div>
      </div>
    </section>
  )
}
export default ServicesHeroSection