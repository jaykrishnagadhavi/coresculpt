import React from 'react';
import { Smartphone, MonitorPlay, MapPin } from 'lucide-react';

const Hero = () => {
  const appStoreUrl = "https://apps.apple.com/app/coresculpt/id6450630737";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.keepwellmantras.coresculpt";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-accent rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-[60.8px] font-bold text-white mb-6 font-heading leading-tight">
              Lose Stubborn <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Belly Fat</span> Without Giving Up Your Desi Lifestyle
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Simple home workouts, practical nutrition and sustainable habits designed for busy women and men.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href={`https://wa.me/447584236848?text=${encodeURIComponent("Hi Prapti! I'm interested in booking a 1:1 consultation to start my transformation journey.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                Book Your 1:1 Consultation
              </a>
              <a 
                href="#gallery" 
                className="btn-outline w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                See Real Transformations ↓
              </a>
            </div>

            <div className="mt-8 flex justify-center md:justify-start">
              <a 
                href="https://keepwellmantras.com/coresculptapp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="bg-brand-primary/20 p-2 rounded-full group-hover:bg-brand-primary/40 transition-colors">
                  <Smartphone className="w-5 h-5 text-brand-primary" />
                </div>
                <span className="font-medium border-b border-dashed border-slate-500 group-hover:border-white pb-0.5">
                  Read More about the CoreSculpt App
                </span>
              </a>
            </div>
          </div>

          {/* Hero 3D Card Image */}
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <div className="relative w-full aspect-[4/5] md:aspect-square rounded-[15px] overflow-hidden shadow-[0_20px_50px_#00000080] border border-brand-border bg-slate-900 group">
                {/* Hero Image */}
                <img 
                  src="/images/prapti-transformation.jpg" 
                  alt="Prapti's Transformation Journey" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0814] via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-brand-primary/20 border border-brand-primary text-brand-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> KeepWell Mantras London
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
