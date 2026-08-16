import React from 'react';

const NutritionMindset = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-card -z-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent text-sm font-bold uppercase tracking-wider mb-6">
              More Than Just Sweat
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Nutrition & Mindset Coaching</h2>
            <p className="text-lg text-slate-300 mb-8">
              A sculpted core isn't just made in the gym - it's made in the kitchen and in your mind. 
              Your CoreSculpt membership includes comprehensive habit coaching and customized nutrition support to ensure your results last a lifetime.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-slate-300">Daily habit tracking to keep you consistent</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-slate-300">Customized nutrition guidance for your goals</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 text-brand-primary">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-slate-300">Mindset coaching to overcome plateaus</span>
              </li>
            </ul>
            
            <button className="btn-primary">Explore Features</button>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-[0_20px_60px_#00000080] border border-brand-border">
              <div className="w-full h-full bg-slate-800 animate-pulse flex flex-col items-center justify-center text-slate-500">
                <svg className="w-16 h-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-medium tracking-wider uppercase">Nutrition & Mindset Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionMindset;
