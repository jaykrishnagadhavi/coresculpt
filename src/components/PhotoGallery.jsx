import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RefreshCcw, ArrowRight, TrendingUp } from 'lucide-react';

const PhotoGallery = () => {
  const featuredImages = [
    { src: '/images/trans-29.jpg', label: 'Unbelievable 3 Months Progress', tag: 'Transformation' },
    { src: '/images/trans-30.jpg', label: 'Post-Pregnancy Core Definition', tag: 'Core Strength' },
    { src: '/images/trans-31.jpg', label: 'Total Body Sculpt & Weight Loss', tag: 'Client Journey' },
    { src: '/images/trans-32.jpg', label: 'Building Functional Strength', tag: 'Success Story' },
  ];

  // Add the remaining 18 transformation images scraped from the site
  const moreImages = Array.from({ length: 18 }, (_, i) => `/images/trans-${i + 33}.jpg`);

  return (
    <section className="py-24 md:py-32 bg-[#08080c] relative overflow-hidden" id="gallery">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Real Results</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white mb-6 leading-tight">
              Transformations that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">Inspire</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400">
              Witness the incredible journeys of our community members. Real people, real dedication, and undeniable results.
            </p>
          </div>
          <Link to="/packages" className="btn-primary shrink-0 group relative overflow-hidden hidden md:inline-flex">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
        </div>

        {/* Featured Bento Grid Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-16">
          
          {/* Main Featured Class Image */}
          <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden group min-h-[400px] md:min-h-[500px] lg:min-h-[600px] border border-slate-800 bg-slate-900 shadow-2xl">
            <img 
              src="/images/Product-Section-Img-1.jpg" 
              alt="Live Session Energy" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/50 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
              <div className="flex items-center gap-4 mb-5">
                <span className="bg-brand-primary/20 backdrop-blur-md border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Live Classes
                </span>
                <span className="flex items-center gap-2 text-white/90 text-sm font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  Daily Sessions
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white font-heading mb-4 leading-tight">
                Morning Core & HIIT Energy
              </h3>
              <p className="text-slate-300 max-w-md text-lg">
                Experience the unmatched energy of our community workouts, designed to push your limits.
              </p>
            </div>
          </div>

          {/* Featured Transformation Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {featuredImages.map((img, i) => (
              <div 
                key={i} 
                className={`relative rounded-[20px] overflow-hidden group border border-slate-800 bg-slate-900 shadow-xl ${
                  i === 0 || i === 3 ? 'sm:aspect-[4/5]' : 'sm:aspect-square'
                } aspect-video`}
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Glassmorphic overlay on hover */}
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block text-brand-primary text-xs font-bold uppercase tracking-wider mb-2">
                      {img.tag}
                    </span>
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {img.label}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extensive Masonry Gallery of All Before/Afters */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-white">Real Results</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See the incredible transformations from our CoreSculpt community. Real people, real hard work, amazing results.
            </p>
          </div>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {moreImages.map((src, i) => (
              <div key={i} className="break-inside-avoid relative rounded-xl md:rounded-[20px] overflow-hidden group border border-slate-800 bg-slate-900 shadow-lg">
                <img 
                  src={src} 
                  alt="Client Transformation Before and After" 
                  className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-brand-primary font-bold text-sm tracking-wider flex items-center gap-1">Results <TrendingUp className="w-3 h-3" /></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Call to Action */}
        <div className="mt-16 text-center md:hidden">
          <Link to="/packages" className="btn-primary w-full max-w-sm inline-flex items-center justify-center gap-2">
            Start Your Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
