import Link from 'next/link';

export default function Navbar() {
  const courseOptions = [
    "Data Science & AI",
    "Product Management",
    "Business Analytics",
    "Digital Transformation",
    "Strategy & Leadership",
    "FinTech",
    "Project Management"
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#EEF5FF] py-2.5 px-4 text-center">
        <p className="text-[#1A202C] text-sm font-medium">
          Navigate your ideal career path with tailored expert advice. 
          <span className="text-blue-600 font-bold ml-2 cursor-pointer hover:underline">Contact Expert</span>
        </p>
      </div>

      {/* 2. Main Navigation */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-16 flex items-center justify-between">
          
          {/* Left: Logo & Courses Dropdown */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tighter">
              accredian
            </Link>
            
            {/* --- DROPDOWN START --- */}
            <div className="relative group hidden md:block">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition">
                Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Hidden Menu: Opens on hover */}
              <div className="absolute left-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50 overflow-hidden">
                <div className="py-2">
                  {courseOptions.map((course, index) => (
                    <Link 
                      key={index} 
                      href="#" 
                      className="block px-6 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-slate-50 last:border-none transition-colors"
                    >
                      {course}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* --- DROPDOWN END --- */}
          </div>

          {/* Middle/Right: Links & Auth */}
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-700">
              <Link href="#" className="hover:text-blue-600 transition">Refer & Earn</Link>
              <Link href="#" className="hover:text-blue-600 transition">Resources</Link>
              <Link href="#" className="hover:text-blue-600 transition">About Us</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="bg-[#eaedf2] text-slate-900 px-5 py-2 rounded-md font-semibold text-sm hover:bg-gray-200 transition">
                Login
              </button>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold text-sm hover:bg-blue-700 transition shadow-md">
                Try for free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}