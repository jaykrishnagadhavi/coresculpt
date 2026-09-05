import React from 'react';

const BellyFatSolutions = () => {
  const features = [
    { 
      title: "Belly Fat", 
      desc: "Work toward reducing overall body fat while building a stronger core through targeted, high-energy movements." 
    },
    { 
      title: "Post-Pregnancy Body", 
      desc: "Progressive movement and strength-focused routines appropriate to your individual needs and timeline." 
    },
    { 
      title: "Core & Tummy Strength", 
      desc: "Build true strength from the inside out and improve your everyday functional fitness." 
    },
    { 
      title: "Diastasis Recti", 
      desc: "Provide appropriate guidance and refer to qualified healthcare professionals when assessment or specialised care is needed." 
    },
    { 
      title: "Stretch Marks & Cellulite", 
      desc: "Address realistic expectations rather than promising that exercise will magically erase them. Focus on confidence and health." 
    }
  ];

  return (
    <section className="py-24 relative bg-[#0c0814]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-heading">
            More Than Just <span className="text-brand-primary">Weight Loss</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            CoreSculpt is a full transformational membership. We focus on real problems and set realistic expectations for sustainable, long-term health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                <div className="w-6 h-6 bg-brand-primary rounded-sm shadow-[0_0_15px_var(--color-brand-primary)]"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BellyFatSolutions;
