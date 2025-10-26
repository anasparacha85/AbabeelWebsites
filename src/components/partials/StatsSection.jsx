import CountUp from "../../animations/CountUp";

const StatsSection = () => {
  const stats = [
    { number: 1790, label: "Account Number" },
    { number: 491, label: "TRUSTED ADVISERS" },
    { number: 245, label: "HAPPY CLIENTS" },
    { number: 1090, label: "FINISHED PROJECTS" },
  ];

  return (
    <section className="bg-orange-500 text-white py-8 mt-8 rounded-[12px] mx-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold"><CountUp
  from={0}
  to={stat.number}
  separator=","
  direction="up"
  duration={1}
  delay={0.5}
  className="count-up-text"
/>+</h2>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
