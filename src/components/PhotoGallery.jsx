import React from 'react';
import { Quote } from 'lucide-react';

const PhotoGallery = () => {
  const testimonials = [
    {
      src: '/images/trans-29.jpg',
      name: 'Priya M.',
      timePeriod: '3 Months',
      result: 'Lost 8kg & 4 inches off waist',
      testimonial: '"I finally found a routine that fits my busy schedule. The home workouts are challenging but doable, and the nutrition advice changed my life."'
    },
    {
      src: '/images/trans-30.jpg',
      name: 'Sneha R.',
      timePeriod: '6 Months',
      result: 'Restored core strength',
      testimonial: '"After my baby, I thought I would never get my core strength back. CoreSculpt proved me wrong safely and effectively."'
    },
    {
      src: '/images/trans-31.jpg',
      name: 'Anjali T.',
      timePeriod: '4 Months',
      result: 'Dropped 2 dress sizes',
      testimonial: '"No more extreme diets for me. I eat what I love, train from my living room, and have never felt better or stronger."'
    },
    {
      src: '/images/trans-32.jpg',
      name: 'Rohan K.',
      timePeriod: '5 Months',
      result: 'Built functional strength',
      testimonial: '"The combination of HIIT and strength training completely transformed my energy levels. Highly recommend Prapti\'s approach."'
    }
  ];

  return (
    <section className="py-24 bg-[#08080c] relative overflow-hidden" id="gallery">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Real People. <span className="text-brand-primary">Real Progress.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            See the incredible transformations from our CoreSculpt community. Real hard work and undeniable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col group">
              {/* Image Section */}
              <div className="relative aspect-square sm:aspect-video overflow-hidden">
                <img 
                  src={item.src} 
                  alt={`${item.name} Transformation`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-[#08080c] text-xs font-bold px-3 py-1.5 rounded-full">
                  {item.timePeriod}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-800/50" />
                
                <h3 className="text-2xl font-bold text-white mb-1 font-heading">{item.name}</h3>
                <p className="text-brand-accent font-semibold mb-6">{item.result}</p>
                
                <p className="text-slate-300 leading-relaxed italic relative z-10">
                  {item.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
