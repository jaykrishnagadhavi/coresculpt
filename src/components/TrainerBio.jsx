import React from 'react';
import { ShieldCheck, Leaf } from 'lucide-react';

const TrainerBio = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full md:w-5/12">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src="/images/PHOTO-2024-03-25-20-11-36.jpg" 
                alt="Prapti Dutt" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-40"></div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold tracking-wider text-brand-primary uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Level 4 Trainer
              </span>
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold tracking-wider text-brand-accent uppercase flex items-center gap-2">
                <Leaf className="w-4 h-4" /> Nutritionist
              </span>
            </div>
          </div>

          <div className="w-full md:w-7/12">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Meet Your Coach</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-heading text-white">Prapti Dutt</h2>
            
            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed">
              <p>
                I created CoreSculpt because I saw too many people jumping from one extreme diet to another, only to end up exactly where they started.
              </p>
              <p>
                My philosophy is simple: fitness should build you up, not break you down. I focus on sustainable habits because true health is about making wellness an unfaltering part of your daily life.
              </p>
              <p>
                Whether you're a busy mother looking to restore your core strength post-pregnancy, or someone ready to finally shed stubborn belly fat, I'm here to give you a clear, achievable path.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default TrainerBio;
