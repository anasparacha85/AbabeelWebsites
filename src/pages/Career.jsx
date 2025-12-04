import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Rambol from '/public/Ramboll.webp'
import Parsons from '/public/Parsons.webp'
import ASGC from '/public/ASGC.webp'
import ASC from '/public/ASG.webp'
import Omber from '/public/Screenshot_1 (1).webp'
const Career = () => {
    const [transparent, settransparent] = useState(true)
  return (
    <>
    <Navbar transparent={transparent}/>
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 md:mt-15">
      {/* Left Section - Trusted By */}
      <div className="md:w-1/4 w-full bg-gray-100 flex flex-col items-center justify-center space-y-8 py-10">
        <h2 className="text-lg font-medium text-gray-700">Trusted By</h2>
        <div className="grid grid-cols-2 gap-8">
            <img src= {Rambol} alt="Kraft Heinz" className="h-8" />
        <img src={ASC} alt="Chewy" className="h-8 w-20" />
      
          <img src={Parsons} alt="SC Johnson" className="h-8" />
          <img src={Omber} alt="Thermo Fisher" className="h-8" />
          <img src={ASGC} alt="Chevron" className="h-8 w-20" />
          <img src={ASC} alt="Chewy" className="h-8 w-20" />
       
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-3/4 w-full flex flex-col justify-center px-4 md:px-16 py-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center">Upload Resume</h1>
        <p className="text-gray-500 mb-8 text-center text-2xl">Let’s find your dream job!</p>
        <iframe
         src='https://techie-soft.com/system/job-application-form/eyJpdiI6ImdNUjRGQ1dXcktNaEtpalllK282YWc9PSIsInZhbHVlIjoibVEwUmlSM2RISkVpV3hOd2hXREh1Zz09IiwibWFjIjoiNzhkYWJiYzlmNDFmNWUxZWU0MTJlOWZiNzU0MzFhY2I2MDQ2MWJmM2M5YzJmM2U5YTgyZWFmYWVjNGM4OGJjYiIsInRhZyI6IiJ9' 
          height="750"
          style={{ overflow: 'hidden', border: 'none' }}
          frameBorder="0"
          title="Job Application Form"
        ></iframe>
{/* <div className="w-full flex justify-center">
        <form className="space-y-6 md:w-[70%] w-full ">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name*"                                className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 />
            <input type="text" placeholder="Last Name*"                        className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 />

          </div>

          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Email Address*" 
                                      className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 />
            
            <input type="tel" placeholder="Phone Number*" 
                                         className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 />

             
          </div>

          <select                                className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 
>
            <option>Current Location</option>
            <option>USA</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Pakistan</option>
          </select>

          
          <div className="grid grid-cols-2 gap-4">
            <input type="text" 
            placeholder="Current Job Title"
                                          className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 
/>
            <input type="text" 
            placeholder="Desired Job Title" 
                                        className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 
/>
          </div>

       
          <textarea placeholder="Additional Comments" rows="4" className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 ></textarea>

         
          <div>
            <label className="block mb-2 text-gray-600">Upload Resume*</label>
            <input type="file" 
                                         className="w-full bg-gray-100 border-gray-300 border-2 px-4 py-3  focus:ring-2 focus:ring-orange-500 outline-none"
 
/>
          </div>

         
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="policy" className="h-4 w-4 text-blue-600" />
            <label htmlFor="policy" className="text-gray-600 text-sm">
            I agree to Search Solution Group’s <span className="text-orange-500">Privacy Policy</span>
            </label>
          </div>

<div className="border border-gray-300 rounded-md bg-white shadow-sm flex items-center justify-between px-4 py-3">
  <div className="flex items-center space-x-3">
    <input type="checkbox" className="h-5 w-5 accent-blue-600" />
    <span className="text-gray-700 text-sm font-medium">I’m not a robot</span>
  </div>

 
  <div className="flex items-center space-x-1">
    <img
      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
      alt="reCAPTCHA"
      className="h-6"
    />
    <div className="flex flex-col leading-tight">
      <span className="text-[10px] text-gray-500">reCAPTCHA</span>
      <a href="#" className="text-[8px] text-blue-600 hover:underline">
        Privacy · Terms
      </a>
    </div>
  </div>
</div>

         
          <div className="w-full flex justify-center">
          <button type="submit" className="w-[50%] bg-orange-500 hover:bg-orange-500 text-white py-3 rounded-md font-medium">
            Submit
          </button>
          </div>
          
        </form>
        </div> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Career;
