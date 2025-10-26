import Aos from "aos";
import { ArrowRight } from "lucide-react";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,     // fast aur smooth animation
      once: true,        // ek bar animate hoga, scroll karne par dobara nahi
      offset: 100,       // thoda scroll hone ke baad hi trigger karega
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex flex-col mt-[6%] md:flex-row items-center lg:w-[85%] md:w-[85%] w-full mx-auto justify-center h-full lg:p-4 md:p-4">
      <div className="flex flex-col gap-5 md:flex-row items-center text-center md:text-left">
        
        {/* Text Section */}
        <div
          data-aos="fade-up"
          className="p-2 md:w-2/5 w-full flex flex-col items-center md:items-start"
        >
          <h2 className="text-sm text-orange-500 font-normal mt-4 mb-2">
            ABOUT US
          </h2>
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl text-gray-800 font-semibold mt-4 mb-4"
          >
            Why Choose ababeel
          </h2>
          <p className="text-gray-800 text-base sm:text-md mt-2 leading-relaxed">
           A Leading Recruitment Agency in Dubai, where we connect the right people with the right opportunities across diverse sectors including Construction 🚧, Architecture 🏢, Interior Design📐👷🏻‍♀️, Hospitality🏨, and Healthcare🩺👩🏻‍⚕️. Whether you're an individual looking for a new challenge or a business seeking to enhance your team, we're here to provide the perfect match 🤝
          </p>
          <button className="bg-orange-500 hover:-translate-y-2 ease-in-out transition-all cursor-pointer uppercase text-sm font-bold mt-7 flex gap-3 items-center text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500">
            Learn more <ArrowRight size={16} />
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-3/5 w-full flex gap-4 xl:mt-0">
          <div
            data-aos="fade-right"
            className="w-2/4 xl:h-[550px] h-[400px] rounded-[20px] shadow-lg"
            style={{
              backgroundImage:
                "url('https://kit2.wirastudio.co/auhar/wp-content/uploads/sites/5/elementor/thumbs/adult-female-hr-specialist-waiting-for-a-candidate-for-a-position-in-a-cafe-with-a-cup-of-coffee-and-qw26gaibc484qirnk73du4w7ophz9p05ruf86o5wsg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            data-aos="fade-left"
            className="w-2/4 xl:h-[500px] h-[350px] rounded-[20px] shadow-lg"
            style={{
              backgroundImage:
                "url('https://kit2.wirastudio.co/auhar/wp-content/uploads/sites/5/elementor/thumbs/streamlining-operations-with-innovative-digital-solutions-qw26g8mmyg5k3audv6a4p5dahxr8uasp3l49848p4w.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default About;
