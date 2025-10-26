const HiringSteps = () => {
const steps = [
  {
    number: "1",
    title: "Consultation & Requirement Gathering",
    desc: "We start with a detailed meeting to understand your staffing needs, job roles, and organizational culture, ensuring we align with your business goals.",
  },
  {
    number: "2",
    title: "Customized Hiring Strategy",
    desc: "Our team designs a recruitment plan tailored to your industry and requirements, focusing on sourcing the most qualified candidates efficiently.",
  },
  {
    number: "3",
    title: "Candidate Sourcing & Shortlisting",
    desc: "Ababeel’s recruiters leverage networks, databases, and screening methods to provide you with pre-vetted resumes and the best available talent.",
  },
  {
    number: "4",
    title: "Interviews & Onboarding Support",
    desc: "We assist with scheduling interviews, final selection, visa/work permit processing, and smooth onboarding so you can hire with confidence.",
  },
];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-normal text-gray-800 mb-16">
          A Superior Hiring Experience
        </h2>

        {/* Steps Wrapper */}
        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-[2px] bg-gray-300 z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number in circle */}
                <div className="w-14 h-14 rounded-full bg-gray-100  flex items-center justify-center text-[25px] lg:text-[40px] font-bold text-orange-500 transition-transform duration-300 hover:scale-110">
                  {step.number}
                </div>

                {/* Vertical line (mobile) */}
                {i < steps.length - 1 && (
                  <div className="block lg:hidden w-[2px] h-10 bg-gray-300"></div>
                )}

                {/* Title */}
                <h3 className="mt-6 text-[20px] font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-[16px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringSteps;
