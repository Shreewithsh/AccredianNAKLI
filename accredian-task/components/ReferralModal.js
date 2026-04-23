'use client';

import { useState } from 'react';

export default function ReferralModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    program: 'Data Science'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Yahan hum baad mein API call add karenge
    console.log("Referral Data:", formData);
    alert("Referral Sent Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-lg rounded-[30px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-blue-600 p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold">Refer a Friend</h3>
          <button onClick={onClose} className="text-2xl hover:rotate-90 transition-transform">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
              <input 
                required
                className="w-full border-b-2 border-slate-100 focus:border-blue-600 outline-none py-2 transition-colors"
                onChange={(e) => setFormData({...formData, referrerName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Your Email</label>
              <input 
                required type="email"
                className="w-full border-b-2 border-slate-100 focus:border-blue-600 outline-none py-2 transition-colors"
                onChange={(e) => setFormData({...formData, referrerEmail: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Friend's Name</label>
              <input 
                required
                className="w-full border-b-2 border-slate-100 focus:border-blue-600 outline-none py-2 transition-colors"
                onChange={(e) => setFormData({...formData, refereeName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Friend's Email</label>
              <input 
                required type="email"
                className="w-full border-b-2 border-slate-100 focus:border-blue-600 outline-none py-2 transition-colors"
                onChange={(e) => setFormData({...formData, refereeEmail: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Select Program</label>
            <select 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 ring-blue-100"
              onChange={(e) => setFormData({...formData, program: e.target.value})}
            >
              <option>Data Science & AI</option>
              <option>Product Management</option>
              <option>Business Analytics</option>
              <option>FinTech</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 hover:bg-blue-700 active:scale-[0.98] transition-all">
            Send Referral Now
          </button>
        </form>
      </div>
    </div>
  );
}