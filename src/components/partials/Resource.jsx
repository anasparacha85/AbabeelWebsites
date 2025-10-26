import React, { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
const cards = [
  {
      image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/09/contract-staffed-employee-working.jpg',
    title: "What Growth in Fintech Means for Talent",
    tags: ["Articles", "Job Market News & Trends", "Talent Acquisition & Hiring Strategy"],
    description: "Citigroup's $16M Charlotte Expansion and What It Means for Fintech Talent",
  },
  {
        image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/09/contract-to-hire-employee-working.jpg',

    title: "The Hiring Slowdown? Not What We’re Seeing",
    tags: ["Articles", "Job Market News & Trends"],
    description: "The Hiring Slowdown? Not What We're Seeing",
  },
  {
      image: 'https://www.searchsolutiongroup.com/wp-content/uploads/2024/04/it-executive-recruitment-employee-working-1.jpg',

    title: "Hiring In Retail",
    tags: ["Videos"],
    description: "Retail Recruitment Services | Search Solution Group",
  },
];

export default function RecruitmentNews() {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
  return (
    <section  className="px-16 py-10">
      <h2 className="text-5xl font-semibold text-gray-800 text-center mb-8">Recruitment Resources & News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
          // data-aos="fade-down-right" data-aos-offset="300" data-aos-duration="1000"
            key={index}
            className="bg-white   overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2 hover:text-orange-500 ">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
