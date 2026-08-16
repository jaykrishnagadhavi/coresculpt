import React, { useState } from 'react';

const TrainerBio = () => {
  const [showStory, setShowStory] = useState(false);

  const awards = [
    { src: '/images/women_impact_award.jpeg', name: 'Women of Impact Award' },
    { src: '/images/women_wonder_award.jpeg', name: 'Women Wonder Award' },
    { src: '/images/award.jpg', name: 'Fitness Excellence Award' },
    { src: '/images/award8.jpeg', name: 'Community Leadership' },
    { src: '/images/award3.jpeg', name: 'Active Life Coach Award' },
    { src: '/images/award5.jpeg', name: 'KeepWell Mantras Recognition' },
  ];

  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden" id="about">
      {/* Decorative Blur */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-96 opacity-10 bg-brand-primary filter blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Trainer Image */}
          <div className="w-full lg:w-5/12">
            <div className="w-full">
              <div className="relative w-full aspect-[3/4] rounded-[15px] overflow-hidden shadow-[0_15px_50px_#00000080] border border-brand-border group">
                <img 
                  src="/images/PHOTO-2024-03-25-20-11-36.jpg" 
                  alt="Prapti Dutt" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-40"></div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold tracking-wider text-brand-primary uppercase">🛡️ Level 4 Trainer</span>
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold tracking-wider text-brand-accent uppercase">🥗 Nutritionist</span>
              <span className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-bold tracking-wider text-brand-gold uppercase">🏆 Award-Winning</span>
            </div>
          </div>

          {/* Bio Text */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">Meet Prapti Dutt 👑</h2>
            <h3 className="text-xl md:text-2xl text-brand-primary mb-8 font-heading">Founder of KeepWell Mantras & CoreSculpt Mobile App 🚀</h3>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                CoreSculpt isn't a generic app with a faceless content library. It's a personal transformational journey guided by me, every single day. 🧘‍♀️✨
              </p>
              <p>
                As a Level 4 fitness trainer and nutritionist based in London, my philosophy is simple: fitness should build you up, not break you down. We focus on building a resilient core, functional strength, and a mindset that embraces challenges.
              </p>
              <p>
                Whether you're holding your first plank or crushing advanced calisthenics, I am here live and on-demand to ensure you have the support, modifications, and motivation to become your best self. 👟💪
              </p>
            </div>
            
            <div className="mt-10">
              <button 
                onClick={() => setShowStory(!showStory)}
                className="btn-outline cursor-pointer"
              >
                {showStory ? 'Hide Full Story 📖' : 'Read Full Story 📖'}
              </button>
            </div>
          </div>
        </div>

        {/* Expanding Full Story Area */}
        {showStory && (
          <div className="mt-16 bg-slate-900/30 border border-slate-800 rounded-[15px] p-8 md:p-12 backdrop-blur-md animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white font-heading">My Credentials & Background 📜</h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Introducing Prapti Dutt: A London-based, multi-award-winning fitness transformation coach whose approach blends science-backed training with deep inner healing. A certified Level 4 Strength & Conditioning trainer, Level 3 Pilates instructor, Level 3 Pre/Post-Pregnancy trainer, and Level 3 Nutritionist, Prapti’s expertise extends far beyond traditional coaching.
                </p>
                <p className="text-slate-300 mb-6 leading-relaxed font-semibold text-brand-primary">
                  "Making wellness an unfaltering habit!"
                </p>
                <p className="text-slate-400 leading-relaxed text-sm">
                  These are not surface-level results. This work creates inside-out transformations — where physical change is supported by nervous system regulation, subconscious healing, and sustainable habits.
                </p>
              </div>

              <div className="relative rounded-[15px] overflow-hidden border border-slate-800 aspect-video">
                <img 
                  src="/images/region-chair.jpeg" 
                  alt="Prapti award presentation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Awards Grid */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold mb-8 text-center text-white font-heading">Awards & Recognition 🏆✨</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {awards.map((award, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-4 rounded-[15px] text-center hover:border-brand-primary/40 transition-colors duration-300">
                    <div className="aspect-square rounded-lg overflow-hidden mb-3 bg-slate-900 border border-slate-800">
                      <img 
                        src={award.src} 
                        alt={award.name} 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-slate-400 text-xs font-medium block leading-snug">{award.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TrainerBio;
