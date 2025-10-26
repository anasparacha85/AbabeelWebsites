import Aos from "aos";
import { 
  Users,        // HR
  Calculator,   // Accounting
  TrendingUp,   // Sales
  Stethoscope,  // Healthcare
  Laptop,       // IT
  Briefcase     // Management
} from "lucide-react";
import { useEffect } from "react";
import {  Ruler, Paintbrush,  Utensils } from "lucide-react";
import 'aos/dist/aos.css'
// Recruitment Areas of Expertise Component
const ExpertiseSection = () => {
  // useEffect(()=>{
  //   Aos.init()
  // },[])


const expertiseAreas = [
  {
    icon: <Users size={36} />,
    title: "Construction",
    description:
      "We provide expert recruitment for the construction industry, ensuring companies get skilled engineers, site managers, and workers who can deliver projects safely and efficiently.",
  },
  {
    icon: <Ruler size={36} />,
    title: "Architecture",
    description:
      "Our recruitment services connect firms with creative and detail-oriented architects who can design functional, sustainable, and modern structures.",
  },
  {
    icon: <Paintbrush size={36} />,
    title: "Interior Design",
    description:
      "We specialize in sourcing innovative interior designers who bring aesthetics, functionality, and creativity to every project they work on.",
  },
  {
    icon: <Stethoscope size={36} />,
    title: "Healthcare",
    description:
      "From doctors and nurses to healthcare administrators, we recruit highly qualified professionals who ensure top-quality patient care and hospital management.",
  },
  {
    icon: <Utensils size={36} />,
    title: "Hospitality",
    description:
      "We help hotels, restaurants, and resorts hire the best hospitality professionals — from chefs and servers to hotel managers — who provide excellent guest experiences.",
  },
  {
    icon: <Briefcase size={36} />,
    title: "Management & Leadership",
    description:
      "Strong leadership drives success. We recruit managers, directors, and executives who can lead teams, create strategies, and achieve organizational goals.",
  },
];


  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Recruitment Areas of Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Find qualified candidates with the help of our specialized recruiters
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
            data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
              key={index}
              className="shadow-lg rounded-xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-6 text-orange-500   transition-all text-3xl">
                {area.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {area.description}
              </p>
              <button className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center group">
                Learn More
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
