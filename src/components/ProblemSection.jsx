import React from 'react';
import { AlertCircle } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    "Stubborn lower belly",
    "Post-pregnancy tummy",
    "Feeling bloated or heavy",
    "Clothes not fitting the way you want",
    "Sitting all day with little movement",
    "No time for long gym sessions",
    "Constantly starting and restarting diets"
  ];

  return (
    <section className="py-24 bg-[#0e0919] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 font-heading text-white">
          Is Your Belly Fat <span className="text-brand-primary">Holding You Back?</span>
        </h2>
        
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
