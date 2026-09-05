import React from 'react';
import { AlertCircle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Stubborn Belly Fat",
    "Post Pregnancy belly",
    "Diastasis Recti aka Abs separation",
    "Stretch marks",
    "Cellulites and loose skin",
    "No time for the gym!",
    "Want a lifestyle change",
    "Don't like the gym",
    "Need a structured workout",
    "Need a coach and mentor",
    "Need subconscious reset"
  ];

  return (
    <section className="py-24 bg-[#0e0919] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white">
          More Than Just <span className="text-brand-primary">Weight Loss</span>
        </h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          CoreSculpt is a full transformational membership. We focus on real problems and set realistic expectations for sustainable, long-term health.
        </p>
        <h3 className="text-2xl font-bold mb-8 text-white">
          CoreSculpt is for you if you have...
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-16">
          {problems.map((problem, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              <AlertCircle className="w-6 h-6 text-brand-accent shrink-0 mt-0.5" />
              <span className="text-slate-300 text-lg">{problem}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-brand-primary/10 border border-brand-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
            You don't need another extreme diet.<br className="hidden md:block"/> You need a plan that fits your real life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
