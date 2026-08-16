import React from 'react';

const WhatItIs = () => {
  const features = [
    { title: "Core Pilates", desc: "Build a rock-solid foundation with targeted movements." },
    { title: "HIIT", desc: "Burn fat and boost endurance with high-intensity intervals." },
    { title: "Strength", desc: "Develop lean muscle and functional power." },
    { title: "Calisthenics", desc: "Master your bodyweight and improve agility." },
    { title: "Resistance", desc: "Challenge your muscles for maximum toning." },
    { title: "Yoga", desc: "Enhance flexibility, balance, and mental clarity." }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">More Than Just Workouts</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            CoreSculpt is a full transformational membership. Get a unique blend of training styles, customized nutrition support, and mindset coaching - all delivered personally by Prapti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                <div className="w-6 h-6 bg-brand-primary rounded-sm shadow-[0_0_15px_var(--color-brand-primary)]"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatItIs;
