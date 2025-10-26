/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQs = () => {
  const [expandedSection, setExpandedSection] = useState(null)

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

 const solutions = [
  {
    title: 'What recruitment services does Ababeel provide?',
    description:
      "Ababeel FZE LLC specializes in end-to-end recruitment, connecting businesses with skilled professionals across industries. Whether you need entry-level staff or senior executives, we ensure the right talent for your business."
  },
  {
    title: 'Can Ababeel manage HR functions for my company?',
    description:
      "Yes, we offer complete HR outsourcing solutions. From payroll and compliance to benefits management and employee relations, we take care of HR operations so you can focus on growing your business."
  },
  {
    title: 'Does Ababeel help with visa and work permit processing?',
    description:
      "Absolutely. As a Dubai-based recruitment agency, we provide visa processing, work permits, and PRO services to ensure smooth onboarding and legal compliance for both local and international employees."
  },
  {
    title: 'Can I hire temporary or project-based staff through Ababeel?',
    description:
      "Yes. We provide flexible workforce management solutions, including temporary staffing, contract employees, and long-term manpower planning, tailored to your project and business needs."
  },
  {
    title: 'Does Ababeel assist with hiring executives or senior managers?',
    description:
      "Definitely. Our executive search service identifies leaders who can drive growth, inspire teams, and deliver results. We carefully match top executives with organizations seeking visionary leadership."
  }
]

  return (
    <div className=" text-gray-700 min-h-screen p-4 md:p-8 mt-[6%] lg:p-16">
      <div className="lg:w-[90%] md:w-[90%] sm:w-full w-full mx-auto">
      
        <h1 className="text-3xl md:text-5xl font-normal mb-9 text-center">
        <span className='text-orange-500'>Frequently asked questions </span> about Ababeel
        </h1>
        
       

        <div className="space-y-4">
          {solutions.map(({ title, description }) => (
            <div key={title} className="border-b border-gray-600-500">
              <button
                onClick={() => toggleSection(title)}
                className="w-full cursor-pointer text-left py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-xl font-semibold">{title}</span>
                <ChevronDown
                  className={`transform text-orange-400 transition-transform duration-300 ${
                    expandedSection === title ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedSection === title && (
                <div className="pb-4">
                  <p className="text-gray-700">{description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQs
