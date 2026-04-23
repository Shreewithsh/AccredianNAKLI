'use client'; // Modal aur State ke liye ye sabse upar hona chahiye

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ReferralBenefits from '../components/ReferralBenefits'; 
import CourseCatalog from '../components/CourseCatalog'; 
import Footer from '../components/Footer';
import InstitutionPartners from '../components/InstitutionPartners';
import ReferralModal from '../components/ReferralModal';

export default function Home() {
  // 1. Modal ki State: Pata karne ke liye ki popup khula hai ya nahi
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Functions modal ko control karne ke liye
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const programs = [
    { name: "Executive Program in Data Science & AI", referrer: "₹10,000", referee: "₹5,000" },
    { name: "Executive Program in Product Management", referrer: "₹10,000", referee: "₹5,000" },
    { name: "Advanced Certification in Business Analytics", referrer: "₹8,000", referee: "₹4,000" },
    { name: "Digital Transformation & Business Management", referrer: "₹12,000", referee: "₹6,000" },
  ];

  return (
    <main className="bg-white min-h-screen text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      {/* Hero Section: Button click par openModal function call hoga */}
      <div className="pt-24 md:pt-28">
        <Hero onReferClick={openModal} />
      </div>

      {/* 1. How to Refer Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A202C] mb-4">
            How Do I <span className="text-blue-600">Refer?</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            It's simple, quick, and highly rewarding. Follow these three easy steps to start earning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-blue-100 -z-10 border-t-2 border-dashed border-blue-200"></div>
          {/* Steps code... */}
          <div className="bg-[#EEF5FF] p-8 md:p-10 rounded-[30px] text-center shadow-sm border border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-3xl">📝</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Submit Referral</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Fill out the referral form with your friend's details on our portal.</p>
          </div>
          <div className="bg-[#EEF5FF] p-8 md:p-10 rounded-[30px] text-center shadow-sm border border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-3xl">🎓</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Friend Enrolls</h3>
            <p className="text-slate-600 font-medium leading-relaxed">Your friend successfully enrolls in one of our premium enterprise programs.</p>
          </div>
          <div className="bg-[#EEF5FF] p-8 md:p-10 rounded-[30px] text-center shadow-sm border border-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-3xl">💰</div>
            <h3 className="text-xl font-bold mb-3 text-slate-800">Both Get Rewarded</h3>
            <p className="text-slate-600 font-medium leading-relaxed">You earn a referral bonus, and your friend gets an exclusive discount!</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={openModal} // Click par modal khulega
            className="bg-blue-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            Start Referring Now
          </button>
        </div>
      </section>

      {/* 2. Referral Benefits Table Section */}
      

      {/* Baki components components render karna */}
      <ReferralBenefits onReferClick={openModal} />
      <InstitutionPartners />

      {/* 3. Alumni / Hiring Partners Marquee */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800">Our Alumni Work At Top Global Organizations</h3>
        </div>
        
        {/* Marquee Wrapper */}
        <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden">
          {/* Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee gap-24 px-12 items-center opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">
            
            {/* --- SET 1 --- */}
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Google</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">amazon</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Microsoft</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">IBM</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Meta</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Netflix</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Apple</div>

            {/* --- SET 2 (Must be EXACTLY identical to Set 1 for seamless loop) --- */}
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Google</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">amazon</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Microsoft</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">IBM</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Meta</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Netflix</div>
            <div className="text-3xl font-black text-slate-800 tracking-tighter">Apple</div>
            
          </div>
        </div>
      </section>

      <CourseCatalog />

      {/* Footer & Modal */}
      <Footer />
      
      {/* 2. Modal Component: Prop pass karna zaroori hai */}
      <ReferralModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 hover:scale-110 transition-all">
        <span className="text-2xl">🎧</span>
      </button>
    </main>
  );
}