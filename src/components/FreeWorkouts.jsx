import React from 'react';
import { Smartphone } from 'lucide-react';

const FreeWorkouts = () => {
  return (
    <section className="py-24 bg-[#0e0919] relative overflow-hidden border-t border-slate-800/50">
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
          <span className="text-brand-primary">Free</span> Workouts
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Download the CoreSculpt App to try the free workouts.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://play.google.com/store/apps/details?id=com.keepwellmantras"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-3 px-8 py-4 text-lg shadow-[0_0_20px_rgba(155,93,229,0.2)]"
          >
            <Smartphone className="w-6 h-6" />
            <div className="text-left leading-tight">
              <span className="text-[10px] block opacity-80 uppercase tracking-wider">Get it on</span>
              <span className="font-bold text-base">Google Play</span>
            </div>
          </a>
          
          <a 
            href="https://apps.apple.com/us/app/coresculpt/id6450386191"
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline w-full sm:w-auto text-center flex items-center justify-center gap-3 px-8 py-4 text-lg border-slate-700 hover:border-brand-primary/50 bg-slate-900/50"
          >
            <Smartphone className="w-6 h-6" />
            <div className="text-left leading-tight">
              <span className="text-[10px] block opacity-80 uppercase tracking-wider text-slate-400">Download on the</span>
              <span className="font-bold text-base text-white">App Store</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeWorkouts;
