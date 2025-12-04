import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import RecentEngagements from "../components/partials/Engagements";
import ExpertiseSection from "../components/partials/Experties";
import FAQs from "../components/partials/FAQs";
import HiringSteps from "../components/partials/HiringSteps";
import HiringExperience from "../components/partials/HiringSteps";
import HRHeroSection from "../components/partials/HRHeroSections";
import HrServices from "../components/partials/HRServices";
import IndustriesSection from "../components/partials/IndustrySection";
import OrganizationsSection from "../components/partials/OrganizationsList";
import ResourcesSection from "../components/partials/Resource";
import ServicesSection from "../components/partials/Services";
import StatsSection from "../components/partials/StatsSection";
import WhatWeDoSection from "../components/partials/WhatWeDo";
import backgroundVideo from "../../public/business-people-calculate-profit-discussing-analyz-4k-2025-08-29-08-41-44-utc.mov"
import { useNavigate } from "react-router-dom";

const Home = () => {
  console.log(backgroundVideo);
  const navigate=useNavigate()
  return (
    <>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 lg:px-20 text-white">
        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
         HR is All About The Right people For Your Team
         </h1>
        <button onClick={()=>{navigate('/contact-us')}} className="mt-6 px-6 py-3 bg-white text-orange-400 rounded-md font-semibold hover:bg-blue-100 transition">
          Contact us →
        </button>
      </div>
     
    </div>
     <StatsSection/>
     <HiringSteps/>
     <OrganizationsSection/>
     <IndustriesSection/>
     <HRHeroSection/>
     <ServicesSection/>
     <ExpertiseSection/>
     <FAQs/>
     <ResourcesSection/>
    <HrServices/>
     
     <RecentEngagements/>
     <Footer/>
     
    </>
    
  );
};

export default Home;
