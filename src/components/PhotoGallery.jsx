import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowRight } from 'lucide-react';

const PhotoGallery = () => {
  const testimonials = [
    {
      src: '/images/depali.jpeg',
      name: 'Depali',
      timePeriod: 'Transformation',
      result: 'Incredible Change',
      testimonial: '"I never thought I could achieve this level of fitness. Thank you Prapti for the constant motivation!"'
    },
    {
      src: '/images/simmi.jpeg',
      name: 'Simmi',
      timePeriod: 'Transformation',
      result: 'Strength & Confidence',
      testimonial: '"Finding a routine that works for me was hard until I joined. Highly recommended!"'
    },
    {
      src: '/images/Ayesha.jpeg',
      name: 'Ayesha',
      timePeriod: 'Transformation',
      result: 'Amazing Results',
      testimonial: '"The journey with CoreSculpt has been life changing. The support and workouts are top notch."'
    },
    {
      src: '/images/suchi.jpeg',
      name: 'Suchi',
      timePeriod: 'Transformation',
      result: 'Fitter & Healthier',
      testimonial: '"The home workouts are challenging but doable, and the nutrition advice changed my life."'
    },
    {
      src: '/images/surmi.jpeg',
      name: 'Surmi',
      timePeriod: 'Transformation',
      result: 'Unbelievable Progress',
      testimonial: '"This program pushed me beyond my limits and showed me what my body is capable of."'
    }
  ];

  return (
    <section className="py-24 bg-[#0c0814] relative overflow-hidden" id="gallery">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl flex flex-col group">
              {/* Image Section */}
              <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={`${item.name} Transformation`} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">
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
        
        <div className="mt-12 text-center">
          <Link to="/transformations" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg">
            View All Transformations <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
