import React from 'react';
import { Link } from 'react-router-dom';

const TrustBar = () => {
  const avatars = [
    '/images/trans-33.jpg',
    '/images/trans-34.jpg',
    '/images/trans-35.jpg',
    '/images/trans-36.jpg',
  ];

  return (
    <section className="py-10 border-y border-brand-border bg-brand-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <Link to="/testimonials" className="flex items-center gap-4 group cursor-pointer">
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-card bg-slate-800 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img src={src} alt="Client avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-white group-hover:text-brand-primary transition-colors">Trusted by 1,500+ 👋</p>
              <p className="text-slate-400">active rockstars</p>
            </div>
          </Link>
          
          <div className="hidden md:block w-px h-12 bg-brand-border"></div>
          
          <Link to="/testimonials" className="flex items-center gap-4 group cursor-pointer">
            <div className="flex text-brand-gold group-hover:scale-105 transition-transform duration-300">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-white group-hover:text-brand-primary transition-colors">80+ 5-Star Reviews 🌟</p>
              <p className="text-slate-400">100% recommend rate</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
