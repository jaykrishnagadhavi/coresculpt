import React from 'react';
import { MessageCircle } from 'lucide-react';

const PricingTeaser = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#08080c]">
      <div className="absolute inset-0">
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading text-white">
          Ready To Start Your <span className="text-brand-primary">Transformation?</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Stop guessing what to eat, how to train and what to change. Get a clear starting point based on your goals and lifestyle.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/packages" 
            className="btn-primary w-full sm:w-auto text-center px-8 py-4 text-lg shadow-[0_0_20px_rgba(20,241,149,0.3)]"
          >
            BOOK YOUR 1:1 CONSULTATION
          </a>
          <a 
            href="https://wa.me/447712345678" // Using a dummy number, they can update this
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-outline w-full sm:w-auto text-center flex items-center justify-center gap-2 px-8 py-4 text-lg border-slate-700 hover:border-brand-primary/50 bg-slate-900/50"
          >
            <MessageCircle className="w-5 h-5 text-green-500" /> CHAT WITH PRAPTI
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
