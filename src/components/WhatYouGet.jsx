import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const WhatYouGet = () => {
  const benefits = [
    "500+ workout videos",
    "Home-friendly workouts",
    "Core and strength training",
    "Nutrition guidance",
    "Habit support",
    "Progress tracking",
    "WhatsApp/community support",
    "Coaching/personal guidance (depending on package)"
  ];

  return (
    <section className="py-24 bg-[#0c0814] relative">
      <div className="absolute inset-0 bg-[url('/images/flower-1.f240088aed0134ce8a053618df712aa8.svg')] bg-no-repeat bg-right-bottom opacity-5 mix-blend-screen pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-[100px]"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Everything You Need To Build A <span className="text-brand-primary">Healthier Body</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Get the tools, support, and structure to finally see the results you've been working for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-white text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
