import React from 'react'
import { testimonials } from '../data'
import { Star, CheckCircle2 } from 'lucide-react';

function TestimonialsPage() {
  // Create list of local client transformation photos we can show alongside testimonials
  const transImages = Array.from({ length: 18 }, (_, i) => `/images/trans-${i + 33}.jpg`);

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary font-black">Rockstars</span> Say
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Read the real journeys of our dedicated members. These stories and results are a testament to their dedication!
        </p>
      </div>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((testimonial, idx) => {
          // Associate some testimonials with a transformation image
          const hasImage = idx % 4 === 0;
          const imageSrc = hasImage ? transImages[Math.floor(idx / 4) % transImages.length] : null;

          return (
            <div key={idx} className="break-inside-avoid mb-6">
              <div className="w-full">
                <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 sm:p-8 rounded-[15px] relative group hover:border-brand-primary/50 transition-colors duration-300">
                  {/* Decorative Quote Icon */}
                  <div className="absolute top-4 right-4 text-slate-800 opacity-30 group-hover:text-brand-primary/10 transition-colors duration-300">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                    </svg>
                  </div>
                  
                  {imageSrc && (
                    <div className="mb-4 rounded-lg overflow-hidden border border-slate-800 aspect-video w-full bg-slate-950">
                      <img 
                        src={imageSrc} 
                        alt="Client Transformation Progress" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}

                  <p className="text-slate-300 leading-relaxed relative z-10 text-sm sm:text-base">
                    "{testimonial}"
                  </p>
                  
                  <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs text-brand-primary font-bold uppercase tracking-wider flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Verified Rockstar client</span>
                    <span className="flex text-brand-gold">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default TestimonialsPage
