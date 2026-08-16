import React from 'react';
import { Link } from 'react-router-dom';

const PricingTeaser = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
        <p className="text-xl text-slate-300 mb-10">
          Join Prapti today and get access to all workouts, nutrition plans, and the exclusive member community.
        </p>
        
        <div className="glass-panel-dark p-10 md:p-14 max-w-2xl mx-auto relative overflow-hidden group hover:border-brand-primary/50 transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h3 className="text-3xl font-bold text-white mb-2 relative z-10">CoreSculpt Premium</h3>
          <p className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-8 relative z-10">All-Access Membership</p>
          
          <div className="flex justify-center items-baseline gap-2 mb-8 relative z-10">
            <span className="text-5xl font-black text-white">Try it Free</span>
          </div>
          
          <p className="text-slate-400 mb-8 relative z-10">Download the app to view subscription options and start your free trial today.</p>
          
          <Link to="/packages" className="btn-primary w-full text-lg py-4 relative z-10 inline-block text-center">Start Your Journey Now</Link>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
