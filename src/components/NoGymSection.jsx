import React from 'react';
import { Home, Clock, Dumbbell, CheckCircle2 } from 'lucide-react';

const NoGymSection = () => {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_20px_50px_#00000080] border border-slate-800 aspect-square">
              <img 
                src="/images/Product-Section-Img-1.jpg" 
                alt="Home Workout" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  </div>
                  <p className="text-white font-medium">CoreSculpt provides structured workouts that can be done entirely from home.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-white leading-tight">
              Your Transformation Can Start <span className="text-brand-primary">From Home</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              No expensive gym memberships. No 2-hour workouts. No complicated equipment required. Just you, consistency, and a plan that works.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Home className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Train Anywhere</h3>
                  <p className="text-slate-400 leading-relaxed">Whether you're in your living room, on vacation, or in a small space, our workouts are designed to fit your environment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Time Efficient</h3>
                  <p className="text-slate-400 leading-relaxed">Stop wasting time commuting to the gym. Get a highly effective, full-body burn in under 45 minutes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Dumbbell className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">No Equipment Needed</h3>
                  <p className="text-slate-400 leading-relaxed">Master your bodyweight and build functional strength without the need for complex machines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoGymSection;
