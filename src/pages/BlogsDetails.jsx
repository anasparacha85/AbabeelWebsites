import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, Calendar, MessageCircle, Tag, ChevronLeft, User } from 'lucide-react';
import { blogsData, categories, allTags} from '../Data/BlogsData'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [commentForm, setCommentForm] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
    saveInfo: false
  });

  // Find the current blog
  const currentBlog = blogsData.find(blog => blog.slug === slug);
  
  // If blog not found, redirect to blogs page
  if (!currentBlog) {
    navigate('/blogs');
    return null;
  }

  // Get recent articles (exclude current blog)
  const recentArticles = blogsData
    .filter(blog => blog.id !== currentBlog.id)
    .slice(0, 3)
    .map(blog => ({
      id: blog.id,
      title: blog.title.toUpperCase().substring(0, 30) + "...",
      date: blog.date,
      image: blog.image
    }));

  // Find previous blog
  const currentIndex = blogsData.findIndex(blog => blog.id === currentBlog.id);
  const previousBlog = currentIndex > 0 ? blogsData[currentIndex - 1] : null;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log('Comment submitted:', commentForm);
    // Reset form
    setCommentForm({
      name: '',
      email: '',
      website: '',
      comment: '',
      saveInfo: false
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <Navbar/>
      {/* Hero Section */}
      <section 
        className="relative    h-[450px] bg-cover bg-center overflow-hidden" 
        style={{backgroundImage: `url('${currentBlog.image}')`}}
      >
        <div className="absolute  inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-slide-up">
            {currentBlog.title}
          </h1>
          <div className="flex items-center gap-3 text-white animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="font-medium">Home</span>
            </div>
            <span className="text-gray-300">/</span>
            <span className="font-medium cursor-pointer" onClick={() => navigate('/blogs')}>Blogs</span>
            <span className="text-gray-300">/</span>
            <span className="font-medium">{currentBlog.category}</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-[70%] space-y-8">
            {/* Blog Header Image */}
            <div className="animate-fade-in">
              <img 
                src={currentBlog.image} 
                alt={currentBlog.title} 
                className="w-full h-[400px] object-cover rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Blog Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <User className="w-5 h-5" />
                <span className="font-medium">{currentBlog.author}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <Calendar className="w-5 h-5" />
                <span>{currentBlog.date}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <MessageCircle className="w-5 h-5" />
                <span>{currentBlog.comments} COMMENTS</span>
              </div>
              <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-300">
                <Tag className="w-5 h-5" />
                <span>{currentBlog.category}</span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              {/* Introduction */}
              {currentBlog.content.introduction.map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}

              {/* Sections */}
              {currentBlog.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4 hover:text-blue-600 transition-colors duration-300">
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Quote Section */}
             <blockquote className="my-12 pl-6 border-l-4 border-orange-500">
                <p className="text-2xl font-serif text-gray-900 italic mb-3">
                  {currentBlog.content.quote.text}
                </p>
                <cite className="text-sm font-semibold text-orange-500 not-italic">
                  — {currentBlog.content.quote.author}
                </cite>
              </blockquote>

             {/* Features List */}
              <div className="my-10 p-8 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h3>
                <div className="grid gap-4">
                  {currentBlog.content.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Images Grid */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {currentBlog.content.images.map((image, index) => (
                  <div key={index} className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in" style={{animationDelay: `${0.5 + index * 0.1}s`}}>
                    <img 
                      src={image} 
                      alt={`Blog image ${index + 1}`} 
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-200 animate-slide-up" style={{animationDelay: '0.7s'}}>
                <span className="font-semibold text-gray-700">Tags:</span>
                <div className="flex gap-2 flex-wrap">
                  {currentBlog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-[30px] text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Previous Post Link */}
              {previousBlog && (
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 animate-slide-up" style={{animationDelay: '0.8s'}}>
                  <div 
                    className="flex items-center gap-3 text-orange-500 font-semibold mb-2 group cursor-pointer"
                    onClick={() => navigate(`/blogs/${previousBlog.id}`)}
                  >
                    <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="text-sm">PREVIOUS</span>
                  </div>
                  <h3 
                    className="text-xl font-semibold leading-relaxed text-gray-900 hover:text-orange-600 transition-colors duration-300 cursor-pointer"
                    onClick={() => navigate(`/blogs/${previousBlog.id}`)}
                  >
                    {previousBlog.title}
                  </h3>
                </div>
              )}

              {/* Comments Section */}
              <div className="mt-12 animate-fade-in" style={{animationDelay: '0.9s'}}>
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">
                  {currentBlog.relatedComments.length} Reply on "{currentBlog.title}"
                </h3>
                
                {/* Comments */}
                {currentBlog.relatedComments.map((comment) => (
                  <div key={comment.id} className="mb-6 p-6 border-gray-200 border-2 rounded-2xl transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-gray-900 text-lg">{comment.author}</h4>
                          <span className="text-sm text-gray-500">{comment.date}</span>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {comment.comment}
                        </p>
                        {/* <button className="flex items-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                          </svg>
                          REPLY
                        </button> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="mt-12 p-8 bg-white rounded-3xl shadow-lg animate-fade-in" style={{animationDelay: '1s'}}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Leave a Reply</h3>
                <p className="text-gray-600 mb-6">Your email address will not be published. Required fields are marked *</p>
                
                <form onSubmit={handleCommentSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Comment *</label>
                    <textarea 
                      className="w-full px-4 py-3 bg-gray-100 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 min-h-[120px] hover:border-blue-300"
                      value={commentForm.comment}
                      onChange={(e) => setCommentForm({...commentForm, comment: e.target.value})}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Name *</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-100 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                        value={commentForm.name}
                        onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-gray-100 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:border-blue-300"
                        value={commentForm.email}
                        onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Website</label>
                    <input 
                      type="url" 
                      className="w-full px-4 py-3 bg-gray-100 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 hover:border-blue-300"
                      value={commentForm.website}
                      onChange={(e) => setCommentForm({...commentForm, website: e.target.value})}
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="saveInfo" 
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 cursor-pointer"
                      checked={commentForm.saveInfo}
                      onChange={(e) => setCommentForm({...commentForm, saveInfo: e.target.checked})}
                    />
                    <label htmlFor="saveInfo" className="text-gray-700 cursor-pointer">
                      Save my name, email, and website in this browser for the next time I comment.
                    </label>
                  </div>
                  
                  <button 
                    type="submit"
                    className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    POST COMMENT
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[26%] space-y-8">
            

            {/* Recent Articles */}
            <div className="bg-white p-6 rounded-[12px] transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Recent Article</h3>
              </div>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <div 
                    key={article.id} 
                    className="flex gap-4 group cursor-pointer hover:translate-x-2 transition-all duration-300"
                    onClick={() => navigate(`/blogs/${article.id}`)}
                  >
                    <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </h4>
                      <p className="text-sm text-orange-500 font-medium">{article.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-[12px] transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900">Categories</h3>
              </div>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-gray-700 hover:text-orange-500 cursor-pointer group hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="font-medium">{category.name}</span>
                    <span className="ml-auto text-sm text-gray-500">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tag Cloud */}
            <div className="bg-white p-6 rounded-[12px] transition-all duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-2 mb-6">
                <Tag className="w-6 h-6 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-900">Tag Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
       
      </div>
       <Footer/>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}