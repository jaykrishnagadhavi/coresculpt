import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Download the App",
      desc: "Available on both iOS and Android. Get it free from the stores."
    },
    {
      num: "02",
      title: "Choose Your Plan",
      desc: "Select a membership that fits your goals and get instant access."
    },
    {
      num: "03",
      title: "Start Sweating",
      desc: "Join Prapti live or on-demand and start transforming your core."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How to Get Started</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Your transformation is just three simple steps away.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] w-[70%] h-0.5 bg-brand-border z-0">
             <div className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary w-full animate-pulse"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-[#12121ab3] border-2 border-brand-primary rounded-full flex items-center justify-center text-3xl font-bold font-heading text-white shadow-[0_0_30px_var(--color-brand-primary-glow)] mb-6">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
