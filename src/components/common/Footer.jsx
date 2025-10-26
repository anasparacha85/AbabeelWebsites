import { Linkedin, Youtube, X, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1c1f] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="col-span-1 lg:col-span-2">
          <h2 className="text-white font-bold text-2xl mb-6">Ababeel</h2>
          <p className="text-[16px] leading-relaxed mb-6">
            Explore our projects. Discover the possibilities. Take a look at
            some of our recent work and see how together we embrace the possible
            with some of the largest organisations on the planet.
          </p>

          <div className="flex flex-wrap gap-2 text-sm mb-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>-</span>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
            <span>-</span>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
          </div>

          <a href="#" className="text-sm hover:underline block mb-6">
            Company Tax Strategy
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <X size={20} />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-orange-600 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Managed Services</li>
            <li>Contract & Freelance Staffing</li>
            <li>Permanent Recruitment</li>
            <li>Executive Search</li>
            <li>Outsourced Payroll</li>
            <li>Recruitment Process Outsourcing</li>
          </ul>
        </div>

        {/* Jobs Categories */}
        <div>
          <h3 className="text-orange-600 font-semibold mb-4">Job Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Architecture</li>
            <li>HealthCare</li>
            <li>Hospitality</li>
            <li>Construction</li>
            <li>Interior</li>
            <li>Telecommunications</li>
            <li>Life Sciences</li>
            <li>Real Estate</li>
            <li>Public Sector</li>
            <li>Oil, Gas & Energy</li>
          </ul>
        </div>

        {/* Key Services & About */}
        <div className="flex flex-col sm:flex-row sm:col-span-2 lg:col-span-1 gap-10">
          <div>
            <h3 className="text-orange-600 font-semibold mb-4">Key Services</h3>
            <ul className="space-y-2 text-sm">
              <li>HR Consulting</li>
              <li>Improving Resource</li>
              <li>Strategic Planning</li>
              <li>Employee Training</li>
              <li>Leadership Training</li>
              <li>HR Management</li>
              <li>Corporate Program</li>
              <li>Operational Management</li>
              <li>Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-orange-600 font-semibold mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Our Values</li>
              <li>Leadership</li>
              <li>Contact Us</li>
              <li>Office Locations</li>
              <li>Work With Us</li>
              <li>Jobs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Ababeel. All rights reserved.
      </div>
    </footer>
  );
}
