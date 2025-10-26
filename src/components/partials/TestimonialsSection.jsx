import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const TestimonialsSection = () => {
  const navigate=useNavigate()
  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "CLIENT",
      text: "Ababeel FZE helped us recruit top talent in record time. Their professional approach and understanding of the Dubai market made the entire process smooth and efficient.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah Johnson",
      role: "CLIENT",
      text: "Working with Ababeel was a game changer for our business. They understood our hiring needs perfectly and delivered skilled professionals who fit right into our company culture.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mohammed Ali",
      role: "CLIENT",
      text: "We struggled with high turnover before partnering with Ababeel FZE. Thanks to their recruitment expertise, we now have a stable and reliable workforce in place.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      name: "Emily Carter",
      role: "CLIENT",
      text: "Ababeel’s commitment and transparency really stood out. They didn’t just provide candidates, they helped us build a long-term staffing strategy for our company.",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Rizwan Malik",
      role: "CANDIDATE",
      text: "Thanks to Ababeel FZE, I secured a great job opportunity in Dubai within weeks. Their team guided me at every step, from interview preparation to final placement.",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Anna Lopez",
      role: "CANDIDATE",
      text: "I had been struggling to find the right role, but Ababeel connected me with a company that truly values my skills. Their support gave me the confidence I needed.",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-8 md:py-20 px-2 md:px-6">
      <div className="max-w-7xl mx-auto flex md:justify-between md:flex-row flex-col gap-12 items-center">
        {/* Left Content */}
        <div className="md:w-[40%] w-full">
          <h2
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            className="text-2xl md:text-5xl font-semibold text-gray-900 mb-6 leading-snug"
          >
            What Our Clients <br /> Are Saying.
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis
          </p>
          <button onClick={()=>navigate('/testimonials')} className="bg-orange-500 hover:-translate-y-2 ease-in-out transition-all cursor-pointer uppercase text-sm font-bold mt-7 flex gap-3 items-center text-white px-8 py-3 rounded-3xl hover:bg-red-500 duration-500">
            DISCOVER MORE →
          </button>
        </div>

        {/* Right Testimonials Swiper */}
        <div className="md:w-[60%] w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }} //for dots
            breakpoints={{ 
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-3xl shadow-lg p-8 overflow-hidden group h-full">
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

                  {/* Card content */}
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-3 text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 text-lg group-hover:text-white transition-colors duration-300 mb-6">
                      {item.text}
                    </p>

                    {/* Profile */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-sm text-red-500 group-hover:text-orange-500 transition-colors duration-300 tracking-wide uppercase">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
