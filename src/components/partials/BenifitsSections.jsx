import Aos from "aos"
import { useEffect } from "react"
import BenifitsImage from '/public/discoverbenifits.jpg'
const BenefitsSection = () => {
  // useEffect(() => {
  //   Aos.init()
  // }, [])
  return (
    <section className="py-20 px-4 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        // style={{
        //   backgroundImage: "url('/images/benefits-bg.png')",
        // }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-medium tracking-wider uppercase text-orange-400">
                WHY CHOOSE ABABEEL
              </span>
            </div>

            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance"
            >
              Discover The Benefits Of Partnering With Ababeel FZE LLC
            </h2>

            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Ababeel FZE LLC is more than a recruitment agency — we are a
              trusted partner for companies across Dubai and beyond. Our team
              specializes in providing reliable manpower solutions, connecting
              businesses with highly skilled professionals while ensuring
              compliance, transparency, and long-term value.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personalized HR Services - Orange Card */}
              <div
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                className="bg-orange-500 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">Tailored Recruitment</h3>
                <p className="text-orange-100 leading-relaxed">
                  Industry-specific hiring solutions designed for your business
                  needs.
                </p>
              </div>

              {/* Scalable Solutions */}
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="bg-gray-700 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">
                  Scalable Workforce Support
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  From small teams to large-scale projects, we scale with you.
                </p>
              </div>

              {/* Legal Compliance */}
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="bg-gray-700 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">
                  Compliance & Transparency
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ensuring legal standards, fair practices, and risk mitigation.
                </p>
              </div>

              {/* Experienced HR */}
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="bg-gray-700 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold mb-4">Global Talent Pool</h3>
                <p className="text-gray-300 leading-relaxed">
                  Access to experienced professionals from Dubai and worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
             <img src={BenifitsImage} alt="Professional working on laptop" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default BenefitsSection
