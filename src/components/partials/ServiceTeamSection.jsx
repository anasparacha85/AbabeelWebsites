import React, { useEffect } from "react";
import BackgroundImage from '/public/pexels-ivan-samkov-4238505.jpg'
import 'aos/dist/aos.css'
import Aos from "aos";
const ServiceTeamSection = () => {
  // useEffect(()=>{
  //   Aos.init
  // }),[]
  const teamMembers = [
    {
      id: 1,
      name: "Mr. John Doe",
      role: "Director",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Ms. Jane Smith",
      role: "HR Manager",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    },
    {
      id: 3,
      name: "Mr. Robert Brown",
      role: "Recruiter",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
  ];

  return (
    <section className="relative py-16 px-6">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-slate-800 bg-opacity-90"
        style={{
          backgroundImage:
            `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity:"60%"
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-red-400 uppercase mb-4">
            MEET OUR HR EXPERTS
          </p>
          <h2 data-aos='fade-up'
          data-aos-duration='1000'  className="text-4xl lg:text-5xl font-bold text-white">
            Lets Discover Our Great Choicing
            <br />
            People Team Working.
          </h2>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="relative overflow-hidden border-8 border-white rounded-3xl transition-all duration-500 group-hover:shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-96 md:h-[500px] object-cover"
                />

                {/* Hover Overlay (slide from bottom to top) */}
                <div className="absolute inset-0 bg-slate-900/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-300 uppercase tracking-wide text-sm">
                      {member.role}
                    </p>

                    {/* Social icons */}
                    <div className="flex gap-4 mt-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
                <button className="bg-orange-500 hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 inline-flex items-center gap-3 text-[10px] shadow-lg hover:shadow-xl transform hover:scale-105">

            DISCOVER TEAM
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  );
};

export default ServiceTeamSection;
