import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

const GrayTestimonialsSection = () => {
  const testimonials = [
    {
      text: "Ababeel Construction has consistently delivered high-quality projects on time. Their professionalism and attention to detail truly set them apart in the construction industry.",
      name: "jasica lanon",
      role: "Corporate Client",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Working with Ababeel was a great experience. From design to execution, their team maintained excellent communication and ensured everything matched our requirements.",
      name: "angela yona",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "They have handled large-scale projects with efficiency and expertise. The quality of their construction work speaks for itself and has earned them our trust.",
      name: "Joe root",
      role: "Business Partner",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      text: "Ababeel’s commitment to safety and sustainability in construction impressed us the most. They follow international standards and deliver durable structures.",
      name: "Mrs. Hina Sheikh",
      role: "Client",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "From residential projects to commercial developments, Ababeel Construction has the expertise to handle it all. We are extremely satisfied with their services.",
      name: "Dan Williams",
      role: "Investor",
      img: "https://randomuser.me/api/portraits/men/72.jpg",
    },
    {
      text: "The team at Ababeel is highly skilled and cooperative. Their innovative approach to construction makes them a reliable choice for long-term projects.",
      name: "Ms. Ayesha Noor",
      role: "Architect",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
    },
  ];

  return (
    <section className="bg-gray-800 text-white py-8 px-2 md:py-16 md:px-6 relative">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm tracking-widest text-orange-400 uppercase mb-4">
          Employee Reviews
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">
          What employ say about ababeel
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gray-700 rounded-3xl shadow-lg p-8 overflow-hidden group h-full">
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

              {/* Card content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-3 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300 mb-6">
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
                    <h4 className="font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sm text-red-300 group-hover:text-orange-200 transition-colors duration-300 tracking-wide uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GrayTestimonialsSection;
