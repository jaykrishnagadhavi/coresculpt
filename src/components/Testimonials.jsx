import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      text: "I actually look forward to doing your workouts. As a trainer, you are so engaging... There is never a dull moment, and before you know it, time is up.",
      name: "Happy Member"
    },
    {
      text: "Joining Prapti from Keepwell Mantras has been the best decision and investment I have made in my life. Her ever challenging core workouts targets both cardio and strength and every part of the body. I have seen an increase in endurance, weight loss and toning.",
      name: "Dedicated Member",
      highlight: true
    },
    {
      text: "Prapti's classes are wonderfully varied. You'll never get bored of the same routine as each class is different. She gives options of easy/hard on every exercise which makes it great to tailor to your personal fitness level.",
      name: "Consistent Member"
    },
    {
      text: "I have known Prapti for six months now and every time this girl surprises me with her determination... She checked everyday on me if I was consistent with everything. I especially recommend her Six weeks challenge of transformation, it's amazing.",
      name: "Challenge Participant",
      highlight: true
    },
    {
      text: "An angel in disguise. I started Prapti's sessions soon after my physiotherapy for neck pain was completed. I could barely hold my planks for a few seconds... I have built strength and not gotten my neck pain back. I have seen 300% improvement in my strength.",
      name: "Recovering Member"
    },
    {
      text: "With 2 challenges... 8 kgs lost, face is leaner, I am able to fit in my pre-pregnancy dresses... I feel active. In total I have lost 15 kgs from where I started.",
      name: "Transformation Success"
    }
  ];

  return (
    <section className="py-24 bg-brand-card border-y border-brand-border relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-gold opacity-5 filter blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Don't Just Take Our Word For It</h2>
          <p className="text-lg text-brand-gold font-medium">100% Recommend Rate on Trustpilot</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, idx) => (
            <div key={idx} className={`break-inside-avoid glass-panel p-8 ${review.highlight ? 'border-brand-primary/30 shadow-[0_10px_30px_var(--color-brand-primary-glow)]' : ''}`}>
              <div className="flex text-brand-gold mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 italic mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 font-bold uppercase">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{review.name}</p>
                  <p className="text-xs text-slate-500">CoreSculpt Member</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
