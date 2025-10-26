import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const engagements = [
  { title: "Deployed 50+ Engineers at Dubai Airport", filled: "Completed in 7 days" },
  { title: "IT Support Staff for Expo 2020 Dubai", filled: "Completed in 5 days" },
  { title: "Healthcare Professionals for Abu Dhabi Clinics", filled: "Completed in 6 days" },
  { title: "Oil & Gas Project Team in Abu Dhabi", filled: "Completed in 9 days" },
  { title: "Banking Sector Compliance Specialists", filled: "Completed in 4 days" },
  { title: "Telecom Network Engineers in Sharjah", filled: "Completed in 5 days" },
  { title: "Construction Project Workforce in Dubai Marina", filled: "Completed in 8 days" },
  { title: "Government Sector Data Analysts", filled: "Completed in 6 days" },
  { title: "Retail Sales Workforce for UAE Malls", filled: "Completed in 3 days" },
];

export default function RecentEngagements() {
  const navigate=useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 5; // number of cards visible at once

  const nextSlide = () => {
    if (currentIndex < engagements.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-[#0d3a37] text-white py-10 px-6 md:px-16">
    <div className="flex justify-between">
        <h2 className="text-xl md:text-5xl font-light mb-4">
        Recent engagements
      </h2>
      <div className="" >
        <button
          onClick={prevSlide}
          className="top-1/2 -left-4 mr-2 bg-orange-600 p-2 rounded-full text-white hover:bg-orange-500"
        >
          <ChevronLeft size={24} color="black" />
        </button>
        <button
          onClick={nextSlide}
          className=" top-1/2 -right-4  bg-orange-600 p-2 rounded-full text-white hover:bg-orange-500"
        >
          <ChevronRight size={24} color="black" />
        </button>
      </div>
    </div>
      
      
      <hr className="border-gray-600 mb-6" />

      {/* Carousel Wrapper */}
      <div className="relative overflow-hidden">
      
        <div
          className="flex  transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            width: `${(engagements.length / visibleCards) * 100}%`,
          }}
        >
          {engagements.map((item, i) => (
            <div
              key={i}
              className="w-1/5 px-2 flex-shrink-0"
              style={{ minWidth: `${100 / visibleCards}%` }}
            >
              <div className="border border-gray-400 p-6 h-40 flex flex-col justify-between">
                <h3 className="text-orange-600 md:text-3xl font-semibold">
                  {item.title}
                </h3>
                <span className="text-xs bg-gray-700 text-gray-200 px-3 py-1 rounded-full w-fit">
                  {item.filled}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <button onClick={()=>navigate('/career')} className="border-2 border-white px-7 cursor-pointer rounded-[8px] py-4 font-medium font-sans text-sm hover:bg-white hover:text-black transition">
          SUBMIT RESUME
        </button>
        <button className="bg-orange-600 px-7 py-4  cursor-pointer rounded-[8px] text-sm font-medium font-sans text-white hover:bg-orange-500 transition">
          START HIRING
        </button>
      </div>
    </section>
  );
}
