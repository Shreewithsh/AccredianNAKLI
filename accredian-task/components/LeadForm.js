'use client'; // Client component zaroori hai forms ke liye
import { useState } from 'react';

export default function LeadForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) setStatus("Thank you! We'll be in touch.");
  };

  return (
    <div className="bg-blue-600 p-8 rounded-lg text-white max-w-md mx-auto my-10">
      <h3 className="text-xl font-bold mb-4">Want to learn more?</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full p-2 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="w-full bg-white text-blue-600 font-bold py-2 rounded hover:bg-gray-100 transition">
          Get Free Consultation
        </button>
      </form>
      {status && <p className="mt-4 text-sm font-medium">{status}</p>}
    </div>
  );
}