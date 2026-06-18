import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Plus, Minus, CheckCircle, Clock } from 'lucide-react';
import { services } from '../data';

export default function ServicesList() {
  const [expandedId, setExpandedId] = useState<string | null>('web-design');

  return (
    <section id="services" className="py-24 sm:py-32 bg-white dark:bg-neutral-900 px-6 sm:px-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading info */}
          <div className="lg:col-span-5 flex flex-col space-y-6 lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
                Our Capabilities
              </span>
            </div>

            <h2 id="services-title" className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight leading-tight">
              Bespoke Services <br />
              <span className="font-semibold italic font-display">Crafted for Quality</span>
            </h2>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
              We focus on a concentrated set of visual discipline suites. We do not do standard mass production templates. Each project is crafted with high typographic fidelity and flawless performance.
            </p>
          </div>

          {/* Right Column: Interactive Dividers / Accordion List */}
          <div className="lg:col-span-7 flex flex-col border-t border-neutral-200 dark:border-neutral-800">
            {services.map((srv, idx) => {
              const isExpanded = expandedId === srv.id;
              return (
                <div
                  id={`service-row-${srv.id}`}
                  key={srv.id}
                  className="border-b border-neutral-250/60 dark:border-neutral-800/60 py-6 transition-all"
                >
                  {/* Clickable Row Header */}
                  <div
                    onClick={() => setExpandedId(isExpanded ? null : srv.id)}
                    className="flex justify-between items-center cursor-pointer group select-none"
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                        0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-display font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-350 transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 transition-all group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 group-hover:text-white dark:group-hover:text-neutral-950">
                      {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </div>

                  {/* Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        id={`service-panel-${srv.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 sm:pl-16 pr-4 flex flex-col space-y-6">
                          <p className="text-neutral-500 dark:text-neutral-355 text-sm sm:text-base font-light leading-relaxed">
                            {srv.description}
                          </p>

                          {/* Quick Stats Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                            {/* Duration Indicator */}
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-full bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center text-neutral-600 dark:text-neutral-450 border border-neutral-150 dark:border-neutral-800">
                                <Clock className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                                Est. Delivery: <strong className="font-semibold text-neutral-900 dark:text-white">{srv.duration}</strong>
                              </span>
                            </div>

                            {/* Core deliveries list */}
                            <div className="flex flex-col space-y-2">
                              <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 dark:text-neutral-550">Scope Deliverables:</span>
                              <div className="grid grid-cols-1 gap-1.5">
                                {srv.details.map((detail, dIdx) => (
                                  <div key={dIdx} className="flex items-center gap-2 text-xs font-light text-neutral-600 dark:text-neutral-350">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
