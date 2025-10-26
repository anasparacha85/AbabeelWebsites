const IndustriesSection = () => {
  const industries = [
    "Banking",
    "Oil, Gas & Energy",
    "Construction",
    "Financial Services",
    "Government",
    "Public Sector",
    "Life Sciences",
    "Healthcare",
    "Real Estate",
    "Technology",
    "Retail",
    "Telecommunications",
  ];

  return (
    <div className="bg-gradient-to-br from-teal-800 to-teal-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-16">
          Discover the Industries We Work With
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105 font-medium"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
      
      {/* Chat icon in bottom right */}
     {/* <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
  <div className="bg-orange-500 hover:bg-orange-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  </div>
</div> */}

    </div>
  );
};
export default IndustriesSection