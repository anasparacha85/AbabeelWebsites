import React, { useEffect, useState } from 'react';
import Learn from '/public/executive.jpg'
import 'aos/dist/aos.css'
import Aos from 'aos';

const ServiceFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ is open by default

  // useEffect(() => {
  //   Aos.init();
  // }, []);

  const faqs = [
    {
      question: "What services does Ababeel FZE LLC provide?",
      answer:
        "Ababeel FZE LLC is a Dubai-based recruitment agency that provides staffing, HR consultancy, workforce outsourcing, and talent management solutions. We specialize in connecting businesses with qualified candidates across various industries."
    },
    {
      question: "How long does the recruitment process take?",
      answer:
        "The timeline depends on the type of role and requirements. For most positions, our process usually takes 1 to 3 weeks, as we carefully shortlist, interview, and provide the most suitable candidates."
    },
    {
      question: "How can candidates apply for jobs through Ababeel?",
      answer:
        "Candidates can apply directly through our website or reach out to us with their CV. Our HR experts review applications and match candidates with the most relevant job openings."
    },
    {
      question: "Does Ababeel provide international recruitment?",
      answer:
        "Yes. Ababeel FZE LLC works with clients both in the UAE and internationally, ensuring companies have access to skilled professionals globally."
    },
    {
      question: "How can businesses partner with Ababeel?",
      answer:
        "Companies can contact us via email or phone, share their hiring requirements, and our HR consultants will design a tailored recruitment plan to deliver the right talent efficiently."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="lg:w-1/2"
          >
            <img
              src={Learn}
              alt="HR consultancy illustration"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <p className="text-sm tracking-widest text-orange-500 uppercase mb-4">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-2xl lg:text-4xl font-semibold text-gray-800 mb-6"
              >
                Answers About Ababeel FZE LLC Recruitment Services
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                At Ababeel FZE LLC, we believe in making recruitment
                transparent, efficient, and client-focused. Here are answers to
                some of the most common questions from our clients and
                candidates.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-[30px] overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-6 py-4 cursor-pointer text-left flex items-center rounded-[30px] justify-between transition-all duration-300 ${
                      openFAQ === index
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-semibold text-sm">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
