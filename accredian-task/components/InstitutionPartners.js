'use client'; 

import { useState, useEffect, useRef } from 'react';

export default function InstitutionPartners() {
  const baseInstitutions = [
    { name: "IIM Bangalore", logoText: "IIMB" },
    { name: "IIT Bombay", logoText: "IITB" },
    { name: "IIM Ahmedabad", logoText: "IIMA" },
    { name: "ISB Hyderabad", logoText: "ISB" },
    { name: "FMS Delhi", logoText: "FMS" },
    { name: "XLRI Jamshedpur", logoText: "XLRI" }
  ];

  // PRO TRICK: Multiply the array 100 times.
  // Ab slider humesha aage badhega aur kabhi 'rewind' jhatka nahi dega.
  const institutions = Array(100).fill(baseInstitutions).flat();

  const logoWidthWithGap = 248; 
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      // Humesha forward move karega seamlessly
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleManualNav = (direction) => {
    if (direction === 'prev' && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
    } else if (direction === 'next') {
        setCurrentIndex(prev => prev + 1);
    }
    startTimer(); // Arrow dabane par timer reset ho jayega
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 bg-white relative">
      
      <div className="text-center mb-16 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] leading-tight">
          Real-World Learning Powered By <span className="text-blue-600">Leading Institutions</span>
        </h2>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>

      <div className="relative overflow-hidden w-full group py-4">
        {/* Left Arrow */}
        <button 
          onClick={() => handleManualNav('prev')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-50 transition shadow-md z-20"
        >
          <span className="text-2xl font-bold text-blue-600">‹</span>
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => handleManualNav('next')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-100 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-50 transition shadow-md z-20"
        >
          <span className="text-2xl font-bold text-blue-600">›</span>
        </button>

        {/* Logos Track */}
        <div 
          className="flex transition-transform duration-700 ease-in-out gap-12 items-center px-4" 
          style={{ transform: `translateX(-${currentIndex * logoWidthWithGap}px)` }}
        >
          {institutions.map((inst, index) => (
            <div key={index} className="flex-shrink-0 flex flex-col items-center gap-3 w-[200px]">
              <div className="w-full h-20 bg-gray-50 border border-blue-50 rounded-2xl flex items-center justify-center font-bold text-xl text-slate-400 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 cursor-pointer">
                {inst.logoText}
              </div>
              <p className="text-sm font-semibold text-slate-600 text-center">{inst.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}