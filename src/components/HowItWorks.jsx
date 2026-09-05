import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Identify your goals, lifestyle and biggest challenges."
    },
    {
      num: "02",
      title: "Personalise",
      desc: "Get a practical approach to workouts, nutrition and habits."
    },
    {
      num: "03",
      title: "Follow",
      desc: "Train from home and build sustainable daily habits."
    },
    {
      num: "04",
      title: "Progress",
      desc: "Track your progress with ongoing guidance and support."
    }
  ];

  return (
    <section className="py-24 bg-[#0e0919]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Your Journey <span className="text-brand-primary">Starts Here</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A simple, sustainable path to reaching your goals without turning your life upside down.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] w-[76%] h-0.5 bg-slate-800 z-0">
             <div className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary w-full opacity-50"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 text-center bg-slate-900/50 p-6 rounded-2xl border border-slate-800 lg:border-none lg:bg-transparent lg:p-0">
              <div className="w-20 h-20 mx-auto bg-[#0e0919] border-2 border-brand-primary/50 rounded-full flex items-center justify-center text-2xl font-bold font-heading text-brand-primary mb-6 shadow-[0_0_20px_rgba(155,93,229,0.15)]">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
