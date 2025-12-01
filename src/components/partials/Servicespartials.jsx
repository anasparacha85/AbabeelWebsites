// import { Button } from "@/components/ui/button"
import Aos from "aos"
import { Check, Play } from "lucide-react"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import CountUp from "../../animations/CountUp"
import Resource from '/public/recruitmentexcellence.jpg'

const ServicesPartials = () => {
  // useEffect(() => {
  //   Aos.init()
  // }, [])
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="text-sm font-medium tracking-wider uppercase text-orange-500">
                Ababeel FZE LLC
              </span>
            </div>

            <h2
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Recruitment Excellence in Dubai
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Ababeel FZE LLC is a trusted recruitment agency based in Dubai,
              dedicated to connecting businesses with the right talent across
              diverse industries. With a strong commitment to quality and
              efficiency, Ababeel bridges the gap between employers seeking
              skilled professionals and candidates looking for the right career
              opportunities.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              From construction and engineering to healthcare, hospitality, and
              technology, Ababeel specializes in sourcing, screening, and
              placing candidates that meet the exact needs of its clients. Their
              mission is simple — to empower businesses with reliable human
              capital while helping individuals achieve their professional
              goals.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  Tailored recruitment solutions across multiple industries
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  Strong network of skilled professionals in Dubai and abroad
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">
                  Focus on trust, transparency, and long-term partnerships
                </span>
              </div>
            </div>

            <button className="bg-orange-400 cursor-pointer hover:bg-orange-500 hover:-translate-2 transition-all duration-500 ease-in-out text-white px-8 py-3 rounded-full font-semibold">
              LEARN MORE →
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Recruitment Image Card */}
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="bg-white rounded-3xl p-8 shadow-lg mb-6 relative"
            >
              <div className="aspect-video bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                <img
                  src={Resource}
                  alt="Recruitment Services"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metric */}
            <div className="absolute top-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-orange-500 mb-1">
                <CountUp
                  from={0}
                  to={95}
                  separator=","
                  direction="up"
                  duration={1}
                  delay={0.5}
                  className="count-up-text"
                />
                %
              </div>
              <div className="text-sm text-gray-600">
                Client Satisfaction Rate
              </div>
            </div>

            {/* Improve Hiring Card */}
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-2xl p-6 max-w-xs">
              <h3 className="font-bold text-lg mb-3">
                Building Strong Teams
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ababeel FZE LLC is more than a recruitment agency — it’s a
                partner in your company’s growth, helping you find and retain
                the right people for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ServicesPartials
