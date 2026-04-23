// 👇 Yahan bracket mein { onReferClick } receive karna zaroori hai
export default function Hero({ onReferClick }) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-12 py-8 mt-24">
      <div className="relative bg-[#EEF5FF] rounded-[40px] shadow-lg shadow-blue-100/50 overflow-hidden min-h-[500px] flex flex-col md:flex-row items-center">
        
        <div className="absolute top-0 left-0 w-16 h-16 bg-blue-200/30 rounded-full -translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 right-1/2 w-24 h-24 bg-blue-100/40 rounded-full translate-y-12"></div>

        <div className="relative z-10 md:w-[55%] p-8 md:p-16 lg:p-20 space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1A202C] leading-[1.1] tracking-tight">
            Let's Learn <br /> & <span className="text-blue-600">Earn</span>
          </h1>
          
          <div className="space-y-3">
            <p className="text-2xl md:text-3xl text-[#4A5568] font-medium">
              Get a chance to win up-to
            </p>
            <p className="text-4xl md:text-5xl font-bold text-blue-600 flex items-center gap-3">
              Rs. 15,000 
              <span className="text-sm bg-white/60 px-3 py-1 rounded-full text-blue-600 font-bold border border-blue-100 shadow-sm">
                LIMITED OFFER
              </span>
            </p>
          </div>

          <div className="pt-4">
            {/* 👇 Yahan par onClick={onReferClick} lagaya hai */}
            <button 
              onClick={onReferClick}
              className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200"
            >
              Refer Now
            </button>
          </div>
          
          <p className="text-sm text-slate-400 font-medium italic">
            *Terms and conditions apply
          </p>
        </div>

        <div className="md:w-[45%] h-full self-stretch relative hidden md:block">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EEF5FF] to-transparent z-10"></div>
          
          <div className="relative h-full w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
              alt="Students learning and earning" 
              className="h-full w-full object-cover object-center scale-105"
            />
            
            <div className="absolute bottom-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <p className="text-xs text-slate-500 font-bold">BONUS CREDITED</p>
                  <p className="text-sm font-black text-slate-800">₹15,000 Received</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 overflow-x-auto pb-4 no-scrollbar">
        <div className="bg-[#EEF5FF] rounded-full px-2 py-2 flex items-center gap-2 md:gap-4 shadow-inner border border-blue-50">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-md transition-all">
            Refer
          </button>
          <button className="text-slate-600 hover:text-blue-600 px-8 py-3 rounded-full font-bold transition-all">
            Benefits
          </button>
          <button className="text-slate-600 hover:text-blue-600 px-8 py-3 rounded-full font-bold transition-all">
            FAQs
          </button>
          <button className="text-slate-600 hover:text-blue-600 px-8 py-3 rounded-full font-bold transition-all">
            Support
          </button>
        </div>
      </div>
    </section>
  );
}