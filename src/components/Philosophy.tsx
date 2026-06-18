import React from 'react';
import { motion } from 'motion/react';
import { Eye, Shield, Zap, Sparkles } from 'lucide-react';

export default function Philosophy() {
  const values = [
    {
      icon: Eye,
      title: 'Structural Clarity',
      description: 'We eliminate cognitive noise. By using purposeful grids, generous negative space, and rigid alignments, your messaging becomes impossible to ignore.',
    },
    {
      icon: Zap,
      title: 'Absolute Performance',
      description: 'Websites must respond with immediate tactility. Our codebase is hand-written, optimized for core page-speeds, and lightweight as paper.',
    },
    {
      icon: Sparkles,
      title: 'Typographic Mastery',
      description: 'We treat typography as a primary design system. Choosing proper pairings, scale ratios, and optical line spacing is the difference between template and masterpiece.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-white dark:bg-neutral-900 px-6 sm:px-12 relative overflow-hidden transition-colors duration-300">
      {/* Visual background guide */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-neutral-100/40 dark:bg-neutral-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Bold Editorial philosophy introduction */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
                Our Core Belief
              </span>
            </div>

            <h2 id="philosophy-title" className="text-3xl sm:text-5xl font-display font-light leading-tight text-neutral-900 dark:text-white tracking-tight">
              Design is not what it looks like. <br />
              <span className="font-semibold italic font-display">It is how it works.</span>
            </h2>

            <div className="h-[2px] w-12 bg-neutral-900 dark:bg-white" />
          </div>

          {/* Right Column: Statement Paragraphs & Numbers */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            <p id="about-statement-1" className="text-neutral-500 dark:text-neutral-350 text-lg sm:text-xl font-light leading-relaxed tracking-wide">
              At Zyvora, we believe the modern internet has grown overcrowded and exhausting. Authentic digital luxury is not found in complex overlays, neon flares, or aggressive popups. True design is found in the subtraction of noise.
            </p>
            <p id="about-statement-2" className="text-neutral-500 dark:text-neutral-400 text-base font-light leading-relaxed">
              We design with intentional white space, clean responsive systems, and standard accessibility patterns so that your digital identity is timeless. We build lightweight client solutions because speed, ease, and simplicity drive real-world attention.
            </p>

            {/* Performance Metrics Rows */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white">100%</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 mt-1.5">Bespoke Design</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white">&lt; 0.5s</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 mt-1.5">Avg Load Time</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white">VITE</span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 mt-1.5">Modern Engine</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modular Value Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-24">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <motion.div
                id={`philosophy-card-${idx}`}
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950 hover:bg-neutral-900/5 dark:hover:bg-neutral-800/30 transition-all duration-300 flex flex-col space-y-6 border border-neutral-200/25 dark:border-neutral-800/30"
              >
                <div className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center border border-neutral-200/50 dark:border-neutral-800 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                </div>
                <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-white">
                  {v.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
