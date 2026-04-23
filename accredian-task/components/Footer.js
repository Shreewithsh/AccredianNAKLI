import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A202C] text-white">
      {/* Top CTA Banner in Footer (Optional but highly recommended for conversions) */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to accelerate your career?</h3>
            <p className="text-gray-400">Join thousands of successful alumni who have transformed their careers.</p>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg whitespace-nowrap">
            Explore All Programs
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* 1. Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter block">
              accredian
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Empowering professionals globally to upskill, transition, and accelerate their careers with programs designed by top industry experts.
            </p>
            <div className="flex gap-4 pt-2">
              {/* Social Icons (Placeholders styled professionally) */}
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group">
                 <span className="font-bold text-gray-400 group-hover:text-white">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group">
                 <span className="font-bold text-gray-400 group-hover:text-white">fb</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer group">
                 <span className="font-bold text-gray-400 group-hover:text-white">tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer group">
                 <span className="font-bold text-gray-400 group-hover:text-white">yt</span>
              </a>
            </div>
          </div>

          {/* 2. Programs Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100 border-b border-gray-700 pb-2 inline-block">Programs</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Data Science & AI</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Product Management</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Business Analytics</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Digital Transformation</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Business Management</Link></li>
            </ul>
          </div>

          {/* 3. Useful Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-100 border-b border-gray-700 pb-2 inline-block">Useful Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Refer & Earn</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Masterclasses</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white hover:translate-x-2 block transition-all duration-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* 4. Contact Us Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6 text-gray-100 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <div className="space-y-5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <span className="text-blue-500 text-lg mt-0.5">📍</span>
                <p className="leading-relaxed">1st Floor, Promacs Building, Sector 1, HSR Layout, Bangalore - 560102</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500 text-lg">📞</span>
                <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500 text-lg">✉️</span>
                <a href="mailto:support@accredian.com" className="hover:text-white transition">support@accredian.com</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-500 text-lg">💬</span>
                <a href="mailto:admissions@accredian.com" className="hover:text-white transition">admissions@accredian.com</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Accredian. A Brand of FullStack Education Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-6 font-medium">
            <Link href="#" className="hover:text-gray-300 transition">Terms of Service</Link>
            <Link href="#" className="hover:text-gray-300 transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}