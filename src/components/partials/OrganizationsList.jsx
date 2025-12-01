import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Ramboll from '/public/Ramboll.webp'
import Parsons from '/public/Parsons.webp'
import ASGC from '/public/ASGC.webp'
import ASG from '/public/ASG.webp'
import DAMAC from '/public/dell-logo.webp'

const OrganizationsSection = () => {
  const navigate = useNavigate();

  const companyImages = [
    ASGC,
    ASG,
    Ramboll,
    Parsons,
     ASGC,
    Ramboll,
    Parsons,
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">
          Organisations we've helped
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-10 mb-5"
        >
          {companyImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-16 flex items-center justify-center">
                <img
                  src={item}
                  className="h-full w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  alt="company logo"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => navigate("/services")}
          className="bg-orange-500 mt-12 cursor-pointer hover:bg-orange-600 text-white font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          VIEW ALL CASE STUDIES
        </button>
      </div>
    </div>
  );
};

export default OrganizationsSection;
