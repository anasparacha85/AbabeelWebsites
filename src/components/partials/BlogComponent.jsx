import Aos from 'aos';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'
const BlogComponent = ({blogPosts,Hidden}) => {
  // useEffect(()=>{
  //   Aos.init()
  // },[])
 const navigate=useNavigate()
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest text-orange-00 uppercase mb-4">LATEST INSIGHTS ON HR TRENDS</p>
          <h2  data-aos='fade-up' data-aos-duration='2000' className="text-4xl lg:text-5xl font-semibold text-gray-800">
            Read And Discover Our Blog &<br />Latest News Updated.
          </h2>
        </div>
        
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-orange-400 text-sm">{post.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                
                {/* Read More Link */}
                <button onClick={()=>navigate(`/blogs/${post.slug}`)} className="text-teal-600 cursor-pointer hover:text-teal-700 font-semibold text-sm inline-flex items-center gap-2 transition-colors">
                  READ MORE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* See All Blog Button */}
        <div className={`text-center ${Hidden}`}>
          <button onClick={()=>navigate('/blogs')} className="bg-orange-400 cursor-pointer  hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-full transition-colors inline-flex items-center gap-3">
            SEE ALL BLOG
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;