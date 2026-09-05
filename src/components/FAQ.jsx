import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      q: "Do I need a gym?",
      a: "No! All CoreSculpt workouts are designed to be done from the comfort of your own home, with minimal to no equipment needed."
    },
    {
      q: "Can I eat roti and rice?",
      a: "Yes, absolutely. Our nutrition guidance is built around practical, sustainable habits that fit your real life—including your favorite desi foods."
    },
    {
      q: "Can vegetarians follow the programme?",
      a: "Yes, we provide extensive guidance for vegetarian and vegan diets to ensure you're getting the right nutrients for your goals."
    },
    {
      q: "Do I need separate meals from my family?",
      a: "Not at all. The goal is to build sustainable habits. You can eat the same meals as your family, just with portion and balance adjustments that we'll teach you."
    },
    {
      q: "Is this suitable for beginners?",
      a: "Yes! We offer modifications for all levels, ensuring you can build a strong foundation safely and effectively."
    },
    {
      q: "Can I work out from home?",
      a: "Yes, the entire programme is designed around highly effective home workouts."
    },
    {
      q: "How does the consultation work?",
      a: "During the 1:1 consultation, Prapti will assess your current lifestyle, challenges, and goals. From there, you'll get a clear starting point."
    },
    {
      q: "What happens after I book?",
      a: "You'll receive a confirmation email with a link to schedule your consultation time and a brief questionnaire to complete before the call."
    }
  ];

  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section className="py-24 bg-[#0e0919]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Frequently Asked <span className="text-brand-primary">Questions</span>
          </h2>
          <p className="text-lg text-slate-400">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIdx === idx ? 'bg-slate-900 border-brand-primary/50' : 'bg-transparent border-slate-800 hover:border-slate-700'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                {openIdx === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-primary shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-300 text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
