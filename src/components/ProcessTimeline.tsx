import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { processSteps } from '../data';
import { ArrowRight, Sparkles, CheckSquare, Target } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStepId, setActiveStepId] = useState(0);

  return (
    <section id="process" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950 px-6 sm:px-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col space-y-4 mb-16 sm:mb-20 text-center items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
              The Path to Pure Design
            </span>
          </div>
          <h2 id="process-title" className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight">
            Our Methodical <span className="font-semibold italic font-display">Workflow</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 font-light text-sm sm:text-base max-w-lg mt-2">
            We structure each timeline precisely to maintain strict design fidelity, clear signoffs, and high performance code.
          </p>
        </div>

        {/* Step Numbers Top bar - Clickable Horizontal Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {processSteps.map((step, idx) => {
            const isActive = activeStepId === idx;
            return (
              <button
                id={`process-step-btn-${idx}`}
                key={idx}
                onClick={() => setActiveStepId(idx)}
                className={`p-6 rounded-2xl flex flex-col justify-between items-start text-left cursor-pointer transition-all duration-300 relative select-none ${
                  isActive
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-md shadow-neutral-900/15 scale-[1.02]'
                    : 'bg-white dark:bg-neutral-900 hover:bg-neutral-100/55 dark:hover:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100'
                }`}
              >
                <div className="flex justify-between w-full items-center mb-6">
                  <span className={`text-[10px] uppercase font-mono tracking-widest ${isActive ? 'text-neutral-400 dark:text-neutral-550' : 'text-neutral-400 dark:text-neutral-500'}`}>
                    {step.timeline}
                  </span>
                  <span className="text-sm font-semibold opacity-10 dark:opacity-20">
                    Step {step.number}
                  </span>
                </div>
                <div>
                  <span className={`text-sm font-mono tracking-wide ${isActive ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-400 dark:text-neutral-500'}`}>
                    {step.number}
                  </span>
                  <h3 className="text-base font-display font-semibold tracking-tight mt-1">
                    {step.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Content Reveal Card */}
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-sm relative overflow-hidden transition-colors">
          {/* Subtle decoration block */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-neutral-50 dark:bg-neutral-950 rounded-full blur-2xl opacity-50 translate-x-20 translate-y-20 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              id="active-process-content"
              key={activeStepId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start"
            >
              {/* Detailed Description */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-neutral-950 dark:bg-neutral-100 flex items-center justify-center text-white dark:text-neutral-950 text-[10px] font-mono">
                    {processSteps[activeStepId].number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500">
                    Active Phase Details ({processSteps[activeStepId].timeline})
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-light text-neutral-900 dark:text-white tracking-tight">
                  {processSteps[activeStepId].title}
                </h3>

                <p className="text-neutral-500 dark:text-neutral-350 text-sm sm:text-base font-light leading-relaxed">
                  {processSteps[activeStepId].description}
                </p>
              </div>

              {/* Sub deliverables / checks */}
              <div className="lg:col-span-5 bg-neutral-50 dark:bg-neutral-950 rounded-2xl p-6 sm:p-8 border border-neutral-100 dark:border-neutral-800 flex flex-col space-y-6">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-neutral-900 dark:text-white" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500">Deliverables</span>
                </div>

                <div className="flex flex-col space-y-3">
                  {processSteps[activeStepId].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-3 text-xs text-neutral-700 dark:text-neutral-300">
                      <div className="w-5 h-5 rounded bg-white dark:bg-neutral-900 flex items-center justify-center border border-neutral-200 dark:border-neutral-800 shadow-xs shrink-0">
                        <CheckSquare className="w-3 h-3 text-neutral-900 dark:text-white" />
                      </div>
                      <span className="font-light">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
