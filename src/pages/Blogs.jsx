import React, { useEffect } from 'react'
import BlogComponent from '../components/partials/BlogComponent'
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import AiImage from '/public/group-of-successful-architects-sitting-at-conferen-2024-11-17-10-49-57-utc.jpg'
import Aos from 'aos';
import { blogsData } from '../Data/BlogsData';

const Blogs = () => {
  // useEffect(() => {
  //   Aos.init()
  // }, [])

  const blogPosts = blogsData

  return (
    <div>

      {/* HERO SECTION */}
      <div
        className="relative w-full h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${AiImage})` }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 lg:px-20 text-white">
          <h3
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-[11px] md:text-[15px] text-orange-300 text-center font-normal max-w-3xl leading-tight"
          >
            Our Blog
          </h3>

          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-3xl md:text-5xl text-center font-bold max-w-3xl leading-tight"
          >
            Read And Discover Our Blog & Latest News Updated.
          </h1>
        </div>

      </div>

      {/* BLOG LIST */}
      <BlogComponent blogPosts={blogPosts} Hidden={'hidden'} />

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export default Blogs
