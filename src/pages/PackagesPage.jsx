import React, { useState } from 'react'
import { ArrowRight, MessageCircle, Check, Star, Crown, Zap } from 'lucide-react';

function PackagesPage() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const whatsappBaseUrl = "https://wa.me/447584236848";

  const getWhatsappLink = (message) => {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  };

  const sharedFeatures = [
    "Access to all workout categories",
    "Flexibility to choose any workout from a library of over 500 videos",
    "Unlimited play time of repeat watch",
    "New workout videos added every month",
    "Activity calendar tracker",
    "Measurement tracking",
    "Reward points and consistency badges",
    "Free video tips from Prapti & Habit Coaches",
    "Monthly newsletters with tips and tricks",
    "Customised nutrition plan with Prapti (add on)",
  ];

  const whatsappGroupPerks = [
    "Recipe ideas",
    "Extra challenges",
    "Group chat support",
    "Accountability partners",
  ];

  const monthlyPackages = [
    {
      name: "Basic Package",
      icon: Zap,
      price: "£60",
      originalPrice: "£75",
      period: "/month",
      videoCount: "10 videos/MONTH",
      videoDescription: "10 new workout videos every month",
      highlight: false,
      badge: null,
      extraFeature: null,
      ctaMessage: "Hi Prapti! I'm interested in the CoreSculpt Basic Package (£60/month).",
    },
    {
      name: "Standard Package",
      icon: Star,
      price: "£90",
      originalPrice: "£120",
      period: "/month",
      videoCount: "15 videos/MONTH",
      videoDescription: "15 new workout videos every month",
      highlight: true,
      badge: "Most Popular",
      extraFeature: null,
      ctaMessage: "Hi Prapti! I'm interested in the CoreSculpt Standard Package (£90/month).",
    },
    {
      name: "Premium Package",
      icon: Crown,
      price: "£120",
      originalPrice: "£160",
      period: "/month",
      videoCount: "20 videos/MONTH",
      videoDescription: "20 new workout videos every month",
      highlight: false,
      badge: "Best Value",
      extraFeature: "A dedicated coach assigned to you",
      ctaMessage: "Hi Prapti! I'm interested in the CoreSculpt Premium Package (£120/month).",
    },
  ];

  const quarterlyPackages = [
    {
      name: "Basic Package",
      icon: Zap,
      price: "£165",
      originalPrice: "£220",
      period: "/quarter",
      videoCount: "30 videos/QUARTER",
      videoDescription: "30 new workout videos every quarter",
      highlight: false,
      badge: null,
      extraFeature: null,
      ctaMessage: "Hi Prapti! I'm interested in the CoreSculpt Basic Quarterly Package (£165/quarter).",
    },
    {
      name: "Standard Package",
      icon: Star,
      price: "£250",
      originalPrice: "£330",
      period: "/quarter",
      videoCount: "45 videos/QUARTER",
      videoDescription: "45 new workout videos every quarter",
      highlight: true,
      badge: "Most Popular",
      extraFeature: null,
      ctaMessage: "Hi Prapti! I'm interested in the CoreSculpt Standard Quarterly Package (£250/quarter).",
    },
    {
      name: "Premium Package",
      icon: Crown,
      price: "£320",
      originalPrice: "£425",
      period: "/quarter",
      videoCount: "60 videos/QUARTER",
      videoDescription: "60 new workout videos every quarter",
      highlight: false,
      badge: "Best Value",
      extraFeature: "A dedicated coach assigned to you",
      ctaMessage: "Hi Prapti! I'm interested in the CoreSculpt Premium Quarterly Package (£320/quarter).",
    },
  ];

  const packages = billingPeriod === 'monthly' ? monthlyPackages : quarterlyPackages;

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-white">
          Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary font-black">Iron Core</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-4">
          CoreSculpt App brings you a plethora of options with Circuit training, Bodyweight strength, Yoga, Pilates, Callisthenics, Resistance &amp; strength training along with nutrition and habit coaching services into one comprehensive platform.
        </p>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto">
          Our pricing reflects our unwavering commitment to delivering exceptional quality, ensuring you get the best value for your investment.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full p-1.5 inline-flex">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              billingPeriod === 'monthly'
                ? 'bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-[0_0_20px_rgba(155,93,229,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('quarterly')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 relative ${
              billingPeriod === 'quarterly'
                ? 'bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-[0_0_20px_rgba(155,93,229,0.3)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Quarterly
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              Save
            </span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => {
          const Icon = pkg.icon;
          return (
            <div key={`${billingPeriod}-${index}`} className="w-full">
              <div className={`bg-slate-900/50 backdrop-blur-md border ${pkg.highlight ? 'border-brand-accent/50 shadow-[0_0_40px_rgba(155,93,229,0.15)]' : 'border-slate-800'} p-8 rounded-[15px] relative group hover:border-brand-primary/50 transition-all duration-300 h-full flex flex-col`}>
                
                {pkg.badge && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center">
                    <span className="bg-gradient-to-r from-brand-accent to-brand-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className={`absolute inset-0 ${pkg.highlight ? 'bg-brand-accent/5' : 'bg-brand-primary/5'} blur-3xl rounded-[15px] ${pkg.highlight ? 'group-hover:bg-brand-accent/10' : 'group-hover:bg-brand-primary/10'} transition-colors duration-300`}></div>
                
                <div className="relative z-10 text-center flex-grow">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-14 h-14 rounded-full ${pkg.highlight ? 'bg-brand-accent/10' : 'bg-brand-primary/10'} flex items-center justify-center`}>
                      <Icon className={`w-7 h-7 ${pkg.highlight ? 'text-brand-accent' : 'text-brand-primary'}`} />
                    </div>
                  </div>

                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading uppercase tracking-wide">{pkg.name}</h3>
                  
                  {/* Video count badge */}
                  <div className="inline-block bg-brand-primary/10 border border-brand-primary/20 rounded-full px-4 py-1.5 mb-4">
                    <span className="text-brand-primary text-sm font-bold">{pkg.videoCount}</span>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col items-center justify-center mb-2">
                    {pkg.originalPrice && (
                      <span className="text-slate-500 text-lg line-through mb-1">{pkg.originalPrice} {pkg.period}</span>
                    )}
                    <span className="text-4xl font-bold text-brand-primary">
                      {pkg.price} <span className="text-base text-slate-400 font-normal">{pkg.period}</span>
                    </span>
                  </div>

                  {/* Included text */}
                  <p className="text-slate-400 text-sm mb-2">Included in your subscription</p>
                  <p className="text-slate-300 text-sm mb-6">{pkg.videoDescription}</p>

                  {/* Auto-renewal notice */}
                  <p className="text-slate-500 text-xs italic mb-6 px-2">
                    The subscription will automatically renew until it is canceled. Payments are non-refundable.
                  </p>

                  {/* Extra feature for Premium */}
                  {pkg.extraFeature && (
                    <div className="bg-brand-accent/10 border border-brand-accent/30 rounded-xl p-3 mb-6">
                      <div className="flex items-center justify-center gap-2">
                        <Crown className="w-5 h-5 text-brand-accent" />
                        <span className="text-brand-accent font-bold text-sm">{pkg.extraFeature}</span>
                      </div>
                    </div>
                  )}

                  {/* Features */}
                  <ul className="text-slate-300 space-y-3 mb-6 text-left text-sm">
                    {sharedFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-4 h-4 text-brand-accent mr-2.5 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* WhatsApp Group */}
                  <div className="bg-slate-800/50 rounded-xl p-4 mb-8 text-left">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageCircle className="w-4 h-4 text-green-500" />
                      <span className="text-white text-sm font-bold">Membership of active WhatsApp group</span>
                    </div>
                    <ul className="text-slate-400 space-y-2 text-sm pl-1">
                      {whatsappGroupPerks.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-brand-primary mr-2">–</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="relative z-10">
                  <a 
                    href="https://keepwellmantras.com/coresculptapp#packages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full ${pkg.highlight ? 'btn-primary shadow-[0_0_20px_rgba(155,93,229,0.3)]' : 'btn-primary'} block text-center flex justify-center items-center gap-2 py-4 text-lg font-bold`}
                  >
                    Subscribe Now <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
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
