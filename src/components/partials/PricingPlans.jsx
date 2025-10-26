import Aos from "aos";
import { Check } from "lucide-react";
import React, { useEffect } from "react";

const PricingPlans = () => {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
  const plans = [
  {
    title: "Recruitment Starter",
    price: "AED 1,499",
    priceNote: "per hire",
    features: [
      "Job posting on top platforms",
      "Candidate shortlisting",
      "Initial screening interviews",
      "Dedicated recruiter support",
      "Basic reporting & updates",
    ],
    isPopular: false,
    dark: false,
  },
  {
    title: "Talent Growth",
    price: "AED 3,999",
    priceNote: "per project",
    features: [
      "End-to-end recruitment support",
      "Advanced candidate assessments",
      "Unlimited interviews",
      "Industry-specific talent sourcing",
      "Weekly progress reports",
    ],
    isPopular: true,
    dark: true,
  },
  {
    title: "HR Compliance",
    price: "AED 5,999",
    priceNote: "per month",
    features: [
      "Full HR documentation support",
      "Visa & labor law compliance",
      "Employee contracts & policies",
      "Payroll setup assistance",
      "24/7 HR advisory support",
    ],
    isPopular: false,
    dark: false,
  },
  {
    title: "Enterprise Solutions",
    price: "Custom",
    priceNote: "Contact for quote",
    features: [
      "Custom recruitment campaigns",
      "On-site HR support",
      "Executive search & headhunting",
      "End-to-end payroll outsourcing",
      "Tailored HR strategy for growth",
    ],
    isPopular: false,
    dark: false,
  },
];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-red-400 uppercase mb-4">
            FLEXIBLE HR SERVICE PLANS
          </p>
          <h2 className="text-4xl lg:text-5xl
           font-semibold text-gray-800">
            Lets Choose Our Flexible HR
            <br /> Pricing & Plans.
          </h2>
        </div>

        {/* Plans Grid */}
        <div className="grid mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
           <div
  key={index}
  data-aos={`${plan.dark?'fade-right':'fade-up'}`}
     data-aos-duration={`${plan.dark?`2000`:`1000`}`} 
  className={`relative rounded-[30px] p-8  ${plan.dark?'h-[110%] -mt-8':'h-full'} shadow-lg flex flex-col justify-between ${
    plan.dark ? "bg-slate-800 text-white" : "bg-white text-gray-800"
  }`}
>
  {/* Popular badge */}
  {plan.isPopular && (
    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
      <span className="inline-block bg-red-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
        POPULAR
      </span>
    </div>
  )}

  {/* Top section */}
  <div>
    <h3
      className={`text-2xl font-semi mb-2 ${
        plan.dark ? "text-white" : "text-gray-800"
      }`}
    >
      {plan.title}
    </h3>

    <div className="mb-8">
      <span
        className={`text-4xl font-bold ${
          plan.dark ? "text-white" : "text-red-400"
        }`}
      >
        {plan.price}
      </span>
      <span
        className={`ml-2 ${plan.dark ? "text-gray-400" : "text-gray-500"}`}
      >
        {plan.priceNote}
      </span>
    </div>
  </div>
        <div className="w-full border-[0.5px] border-dashed "/>
  {/* Middle (features grow karega height ke hisaab se) */}
  <div className="flex-grow mt-10 mb-10">
    <div className="space-y-4">
      {plan.features.map((feature, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className={`w-5 h-5 font-bold rounded flex items-center justify-center ${
              plan.dark ? "text-white" : "text-red-400"
            }`}
          >
            <Check size={22} strokeWidth={5} />
          </div>
          <span
            className={`${
              plan.dark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {feature}
          </span>
        </div>
      ))}
    </div>
  </div>
 <div className=" w-full border-[0.5px] border-dashed "/>
  {/* Bottom button */}
  <button className="w-full hover:-translate-y-2 transition-all ease-in-out duration-500 mt-8 bg-red-400 hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-full cursor-pointer flex items-center justify-center gap-2">
    GET A QUOTE
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      ></path>
    </svg>
  </button>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
