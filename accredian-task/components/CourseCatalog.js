'use client'; // Ye lagana zaroori hai kyunki hum hooks (useState, useEffect) use kar rahe hain

import { useState, useEffect, useRef } from 'react';

export default function CourseCatalog() {
  // 1. Categories aur unke respective courses ka data
  const categories = [
    "Data Science & AI", 
    "Product Management", 
    "Business Analytics", 
    "FinTech & Strategy"
  ];

  const coursesData = {
    "Data Science & AI": [
      { title: "Executive Program in Data Science & AI", duration: "6 Months", popular: true, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" },
      { title: "Advanced AI & Deep Learning", duration: "8 Months", popular: false, image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop" }
    ],
    "Product Management": [
      { title: "Advanced Certification in Product Management", duration: "4 Months", popular: true, image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" },
      { title: "Product Strategy & Growth", duration: "3 Months", popular: false, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" }
    ],
    "Business Analytics": [
      { title: "Business Analytics & Digital Transformation", duration: "5 Months", popular: true, image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop" },
      { title: "Data-Driven Decision Making", duration: "2 Months", popular: false, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" }
    ],
    "FinTech & Strategy": [
      { title: "FinTech Innovation & Leadership", duration: "6 Months", popular: false, image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" },
    ]
  };

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const sectionRefs = useRef({});

  // 2. Scroll Logic: Dekhne ke liye konsa section screen par hai
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jab section screen ke beech mein aaye
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" } // Screen ka kitna hissa cover hone par trigger ho
    );

    categories.forEach((cat) => {
      if (sectionRefs.current[cat]) {
        observer.observe(sectionRefs.current[cat]);
      }
    });

    return () => observer.disconnect();
  }, []);

  // 3. Click karke smooth scroll karna
  const scrollToCategory = (category) => {
    setActiveCategory(category);
    const element = sectionRefs.current[category];
    if (element) {
      // Navbar ka space chhod kar scroll karna
      const y = element.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 bg-white">
      <div className="flex items-center gap-3 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C]">
          Unlock Your Potential with World-Class Programs
        </h2>
        <span className="bg-green-100 text-green-700 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
          New
        </span>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12 relative items-start">
        
        {/* Left Sidebar (STICKY PANEL) */}
        <aside className="lg:w-1/4 sticky top-40 space-y-3 hidden lg:block z-20">
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => scrollToCategory(category)}
              className={`w-full text-left px-6 py-4 rounded-xl font-bold transition-all flex justify-between items-center group
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-2' 
                  : 'bg-white hover:bg-slate-50 border border-transparent hover:border-slate-200 text-slate-600'
                }`}
            >
              {category} 
              <span className={`transition-transform ${activeCategory === category ? 'text-white' : 'text-transparent group-hover:text-slate-400 translate-x-0 group-hover:translate-x-1'}`}>
                →
              </span>
            </button>
          ))}
        </aside>

        {/* Mobile Dropdown (Agar screen chhoti ho toh sidebar chupa do) */}
        <div className="lg:hidden w-full sticky top-32 z-30 bg-white/90 backdrop-blur-md pb-4">
           <select 
              className="w-full p-4 border border-blue-200 rounded-xl bg-blue-50 text-blue-800 font-bold outline-none"
              value={activeCategory}
              onChange={(e) => scrollToCategory(e.target.value)}
           >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
           </select>
        </div>

        {/* Right Main Grid (SCROLLING CONTENT) */}
        <div className="lg:w-3/4 space-y-24">
          {categories.map((category) => (
            <div 
              key={category} 
              id={category} 
              ref={(el) => (sectionRefs.current[category] = el)}
              className="scroll-mt-40" // Navbar se takraye na isliye margin
            >
              <h3 className="text-2xl font-black text-slate-800 mb-8 border-b border-gray-100 pb-4 inline-block">
                {category} Programs
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {coursesData[category].map((course, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                    {/* Card Image */}
                    <div className="h-44 bg-slate-200 relative overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                      />
                      {course.popular && (
                        <span className="absolute top-4 left-4 bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 rounded-sm tracking-wider uppercase shadow-sm">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-slate-800 mb-4 leading-snug flex-grow">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-6">
                        <span>🕒</span>
                        <span>{course.duration}</span>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <button className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-1">
                          Know More <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 transition" title="Download Brochure">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}