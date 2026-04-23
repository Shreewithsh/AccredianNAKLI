'use client';
import { useState } from 'react';

export default function ReferralBenefits() {
  const [activeCategory, setActiveCategory] = useState("ALL PROGRAMS");
  const [isEnrolled, setIsEnrolled] = useState(true);

  // Sidebar Categories
  const categories = [
    "ALL PROGRAMS",
    "PRODUCT MANAGEMENT",
    "STRATEGY & LEADERSHIP",
    "BUSINESS MANAGEMENT",
    "FINTECH",
    "SENIOR MANAGEMENT",
    "DATA SCIENCE",
    "DIGITAL TRANSFORMATION",
    "BUSINESS ANALYTICS"
  ];

  // Table Data (Based on your screenshot)
  const programs = [
    { name: "Executive Program in Data Science & AI", referrer: "₹10,000", referee: "₹5,000" },
    { name: "Executive Program in Product Management", referrer: "₹10,000", referee: "₹5,000" },
    { name: "Advanced Certification in Business Analytics", referrer: "₹8,000", referee: "₹4,000" },
    { name: "Digital Transformation & Business Management", referrer: "₹12,000", referee: "₹6,000" },
    { name: "Executive Program in FinTech", referrer: "₹10,000", referee: "₹5,000" },
    { name: "Advanced AI & Machine Learning", referrer: "₹10,000", referee: "₹5,000" },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 md:px-8 bg-white">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-12 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1A202C] text-center">
          What Are The <span className="text-blue-600">Referral Benefits?</span>
        </h2>
        
        {/* Toggle Switch (Enrolled Student) */}
        <div className="md:absolute right-0 top-1/2 md:-translate-y-1/2 mt-6 md:mt-0 flex items-center gap-3">
          <span className="text-slate-700 font-medium text-sm">Enrolled Student</span>
          <button 
            onClick={() => setIsEnrolled(!isEnrolled)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${isEnrolled ? 'bg-blue-600' : 'bg-gray-300'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isEnrolled ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/4 bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`w-full text-left px-6 py-4 font-bold border-b border-gray-100 last:border-none transition-all flex justify-between items-center group
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-50'
                }`}
            >
              <span className="text-sm truncate pr-2">{category}</span>
              <span className={`text-lg transition-transform ${activeCategory === category ? 'text-white' : 'text-slate-300 group-hover:translate-x-1'}`}>
                ›
              </span>
            </button>
          ))}
        </div>

        {/* Right Table Area */}
        <div className="w-full lg:w-3/4">
          <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-blue-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-blue-600/10 bg-blue-600 text-white">
                    <th className="p-5 font-bold text-sm w-[55%] rounded-tl-xl border-r border-blue-500/30">Programs</th>
                    <th className="p-5 font-bold text-sm border-r border-blue-500/30">Referrer Bonus</th>
                    <th className="p-5 font-bold text-sm rounded-tr-xl">Referee Bonus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {programs.map((program, index) => (
                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                      <td className="p-5 flex items-center gap-3">
                        <span className="w-5 h-5 flex items-center justify-center">
                           <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        </span>
                        <span className="text-slate-700 font-medium text-[15px]">{program.name}</span>
                      </td>
                      <td className="p-5 font-bold text-slate-700">{program.referrer}</td>
                      <td className="p-5 font-bold text-slate-700">{program.referee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Show All Programs Dropdown */}
          <div className="flex justify-end mt-4">
            <button className="flex items-center gap-2 text-slate-500 font-medium hover:text-blue-600 transition-colors border border-gray-300 rounded-md px-4 py-1.5 shadow-sm text-sm">
              Show All Programs 
              <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}