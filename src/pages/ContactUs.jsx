import React, { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Aos from "aos";

const Contact = () => {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
    <Navbar />
    <div className="relative min-h-screen bg-[url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d')] bg-cover bg-center bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-teal-900/90"></div>

      {/* Content wrapper */}
      <div className="relative  z-10 flex items-start  flex-col md:flex-row md:justify-around max-w-7xl px-2 mx-auto md:px-6 py-16">
        {/* Left Section */}
        <div data-aos='fade-right' data-aos-duration='1500' className="w-full md:mt-16 md:w-2/5 text-white flex flex-col  justify-center">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Get Started with Ababeel{" "}
            <span className="text-orange-600">Recruitment</span> and{" "}
            <span className="text-orange-600">Managed Services</span> Solutions
            Today!
          </h1>
          <hr className="my-6 border-gray-500" />

          <h2 className="text-xl font-bold text-orange-600 mb-3">
            Services We Offer:
          </h2>
          <ul className="space-y-2 font-semibold text-lg">
            <li>- Recruitment</li>
            <li>- RPO</li>
            <li>- Managed Services</li>
            <li>- Workforce Solutions</li>
            <li>- Freelancing</li>
            <li>- Retained Search</li>
          </ul>
        </div>

        {/* Right Section - Form (smaller height + centered) */}
        <div data-aos='fade-left' data-aos-duration='2000' className="w-full md:w-2/5 bg-white shadow-lg p-8 flex  justify-center self-end mt-6 md:mt-20">
          <form className="w-full space-y-6">
            <h2 className="text-2xl md:text-3xl font-thin text-gray-800 leading-snug">
              Get in touch and let our consultants assist you in growing your
              business:
            </h2>

            {/* Full Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name*"
                               className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"

                required
              />
              <input
                type="email"
                placeholder="Email*"
                               className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"

                required
              />
            </div>

            {/* Phone Number + Job Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number*"
                               className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"

                required
              />
              <input
                type="text"
                placeholder="Job Title*"
                               className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"

                required
              />
            </div>

            {/* Company + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <input
                type="text"
                placeholder="Country where you work*"
                                className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"

                required
              />
            </div>

            {/* Reason Dropdown */}
            <select
                className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-orange-500 outline-none"

              required
            >
              <option value="">Reason for contacting us:*</option>
              <option value="recruitment">Recruitment</option>
              <option value="services">Managed Services</option>
              <option value="freelancing">Freelancing</option>
            </select>

            {/* Requirements */}
            <textarea
              placeholder="What are your Requirements?*"
              rows="4"
                              className="w-full bg-gray-100 px-4 py-3 rounded-md  focus:ring-2 focus:ring-red-500 outline-none"

              required
            ></textarea>

            {/* Checkbox */}
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I agree to receive other communications from Ababeel.
              </p>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 leading-relaxed">
              By clicking submit below, you consent to allow Ababeel to store and
              process the personal information submitted above to provide you
              the content requested.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-auto bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
