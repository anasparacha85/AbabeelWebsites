import Aos from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'

const HRprocessSection = () => {
  // useEffect(() => {
  //   Aos.init()
  // }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HR Process Explanation */}
      <section className="bg-slate-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="md:w-[70%] w-full mb-8">
            <p className="text-sm tracking-widest text-gray-400 uppercase">
              OUR PROCESS
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-4xl lg:text-5xl font-semibold leading-tight"
            >
              From Consultation To Recruitment, Onboarding & Continuous Support
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Image */}
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="lg:w-1/2"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
                  alt="Recruitment Process"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:w-1/2 space-y-6">
              <div className="border-l-4 border-orange-400 pl-6">
                <p className="text-gray-300 italic text-lg">
                  “At Ababeel FZE LLC, we believe in building strong workforce
                  foundations by simplifying recruitment, ensuring compliance,
                  and supporting businesses long-term.”
                </p>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Our HR process is designed to connect businesses with the right
                talent quickly and effectively. From the initial consultation to
                onboarding and continuous workforce support, we ensure a smooth
                and transparent journey for our clients.
              </p>

              {/* Step-by-step bullets */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong>Consultation:</strong> Understanding client needs
                    and workforce requirements.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong>Recruitment:</strong> Sourcing, shortlisting, and
                    interviewing qualified candidates.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong>Onboarding:</strong> Assisting with documentation,
                    visa, and compliance processes.
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-300">
                    <strong>Continuous Support:</strong> Post-hiring support to
                    ensure smooth integration and satisfaction.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HRprocessSection;
