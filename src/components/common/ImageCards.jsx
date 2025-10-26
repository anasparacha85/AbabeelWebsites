import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const TalentCard = ({ImageUrl,title,description}) => {
     useEffect(()=>{
        Aos.init()
    },[])
  return (
    <div  data-aos="fade-up"
     data-aos-easing="ease-in-out"
     data-aos-duration="2000" className="w-full h-full ">
    <div  className="relative  max-w-sm mx-auto my-10">
      {/* Card container with shadow + rounded corners */}
      <div  className="  shadow-lg overflow-hidden ">
        {/* Image */}
        <div className="w-full  rounded-[30px] border-8 border-white rounder-xl">
        <img
          src={ImageUrl}
          alt="Talent Acquisition"
          className="w-full h-96 rounded-[30px] object-cover"
        />
        </div>

        {/* Content Box */}
        <div className="absolute group cursor-pointer hover:bg-gray-800 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transition ease-in-out  w-[85%] hover:translate-y-[43%] duration-700  bg-white rounded-[30px] shadow-lg p-6 text-center">
          <h3 className="text-lg font-semibold   group-hover:text-gray-200 text-gray-900">{title}</h3>
          <p className="text-sm group-hover:text-gray-200 text-gray-500 mt-2">
            {description}.
          </p>
          <a
            href="#"
            className="mt-4 inline-block text-sm hover:mt-1 transition ease-in-out duration-1000 group-hover:text-orange-400  font-medium text-teal-600 hover:underline"
          >
            LEARN MORE →
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TalentCard;
