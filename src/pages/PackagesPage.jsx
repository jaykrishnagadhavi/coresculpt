import React from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react';

function PackagesPage() {
  const whatsappBaseUrl = "https://wa.me/447584236848";

  const getWhatsappLink = (message) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
          Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary font-black">Iron Core</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-4">
          CoreSculpt App brings you a plethora of options with Circuit training, Bodyweight strength, Yoga, Pilates, Callisthenics, Resistance & strength training along with nutrition and habit coaching services into one comprehensive platform.
        </p>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Our pricing reflects our unwavering commitment to delivering exceptional quality, ensuring you get the best value for your investment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Basic Package */}
        <div className="w-full">
          <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-[15px] relative group hover:border-brand-primary/50 transition-colors duration-300 h-full flex flex-col justify-between">
            <div className="absolute inset-0 bg-brand-primary/5 blur-3xl rounded-[15px] group-hover:bg-brand-primary/10 transition-colors duration-300"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">Basic Package</h3>
              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-4xl font-bold text-brand-primary">£90 <span className="text-xs text-slate-400 font-normal">/ month</span></span>
                <span className="text-slate-500 text-xs mt-2 italic">or £247 per quarter (Save 9%)</span>
              </div>
              <ul className="text-slate-300 space-y-4 mb-8 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to over 500 follow-along videos</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rewards points & consistency badges</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Activity streak calendar</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 space-y-3">
              <a 
                href={getWhatsappLink("Hi, I'm interested in the CoreSculpt Basic Monthly Package (£90/month).")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary block text-center flex justify-center items-center gap-2"
              >
                Buy Monthly (£90) <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsappLink("Hi, I'm interested in the CoreSculpt Basic Quarterly Package (£247/quarter).")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-outline block text-center flex justify-center items-center gap-2"
              >
                Buy Quarterly (£247) <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Rockstar Package */}
        <div className="w-full">
          <div className="bg-slate-900/50 backdrop-blur-md border border-brand-accent/50 p-8 rounded-[15px] relative group hover:border-brand-primary/50 transition-colors duration-300 h-full flex flex-col justify-between">
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-gradient-to-r from-brand-accent to-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            </div>
            <div className="absolute inset-0 bg-brand-accent/5 blur-3xl rounded-[15px] group-hover:bg-brand-accent/10 transition-colors duration-300"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">Rockstar Package</h3>
              <div className="flex flex-col items-center justify-center mb-6">
                <span className="text-4xl font-bold text-brand-primary">£112 <span className="text-xs text-slate-400 font-normal">/ month</span></span>
                <span className="text-slate-500 text-xs mt-2 italic">or £315 per quarter (Save 6%)</span>
              </div>
              <ul className="text-slate-300 space-y-4 mb-8 text-left">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Everything in Basic, plus:</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium healthy eating blogs & tips</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-accent mr-3 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priority community support</span>
                </li>
              </ul>
            </div>

            <div className="relative z-10 space-y-3">
              <a 
                href={getWhatsappLink("Hi, I'm interested in the CoreSculpt Rockstar Monthly Package (£112/month).")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-primary block text-center flex justify-center items-center gap-2"
              >
                Go Rockstar Monthly (£112) <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={getWhatsappLink("Hi, I'm interested in the CoreSculpt Rockstar Quarterly Package (£315/quarter).")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-outline block text-center flex justify-center items-center gap-2"
              >
                Go Rockstar Quarterly (£315) <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-white mb-8 text-center font-heading">Available Add-ons</h3>
        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          In addition to the monthly subscription packages, you can customize your offering with these features:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Sign up to a dedicated Habit coach", msg: "Hi, I'm interested in signing up for a dedicated Habit coach." },
            { name: "Customised Fitness & nutrition 1 hour call with Prapti", msg: "Hi, I'm interested in a customised Fitness & Nutrition 1 hour call with Prapti." },
            { name: "Customised nutrition plan with Prapti", msg: "Hi, I'm interested in a customised nutrition plan with Prapti." },
            { name: "Join Live Classes conducted by Prapti", msg: "Hi, I'm interested in joining Live Classes conducted by Prapti." }
          ].map((addon, idx) => (
            <div key={idx} className="w-full h-full">
              <a 
                href={getWhatsappLink(addon.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-[15px] text-center hover:border-brand-primary/50 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between items-center h-full block"
              >
                <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span className="text-slate-300 text-sm font-medium mb-4">{addon.name}</span>
                <span className="text-xs text-brand-primary font-bold flex items-center gap-1 justify-center">Inquire via WhatsApp <MessageCircle className="w-3 h-3" /></span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PackagesPage
