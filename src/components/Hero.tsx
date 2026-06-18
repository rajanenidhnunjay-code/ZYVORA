import React from 'react';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for high-end feel
      },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 px-6 sm:px-12 overflow-hidden pt-24 transition-colors duration-300"
    >
      {/* Soft noise/grid background texture for elevated elegance */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#26262b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 dark:opacity-60 pointer-events-none" />

      {/* Decorative vertical lines on sides to establish alignment grids */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-neutral-200/40 dark:bg-neutral-800/20 hidden xl:block z-0" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-neutral-200/40 dark:bg-neutral-800/20 hidden xl:block z-0" />

      <div className="max-w-4xl w-full text-center z-10 relative">
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Studio Label */}
          <motion.div id="hero-studio-badge" variants={itemVariants} className="mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-500 dark:text-neutral-450 font-medium">
              Based in Hyderabad / Telangana
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-light text-neutral-900 dark:text-white tracking-tight leading-[1.05] mb-8"
          >
            We Design <br />
            <span className="font-semibold italic font-display">Websites</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            id="hero-subtext"
            variants={itemVariants}
            className="text-neutral-500 dark:text-neutral-400 text-sm sm:text-lg max-w-xl font-light leading-relaxed tracking-wide mb-12"
          >
            Zyvora crafts high-end digital homes for visionary brands. We pair 
            impeccable typography, generous whitespace, and flawless code to let your brand breathe.
          </motion.p>

          {/* CTA Group */}
          <motion.div id="hero-cta-group" variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              id="hero-cta-work"
              href="#work"
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-white dark:text-neutral-950 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Selected Work
            </a>
            <a
              id="hero-cta-philosophy"
              href="#philosophy"
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              Our Philosophy
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating features footer for density */}
      <div className="absolute bottom-10 left-6 sm:left-12 right-6 sm:right-12 flex items-end justify-between text-[10px] uppercase font-mono tracking-widest text-neutral-450 dark:text-neutral-550 z-10 w-full max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-6rem)]">
        <div className="hidden sm:block">
          Focused on / Simplicity, Clarity, Purpose
        </div>
        <a
          id="scroll-indicator"
          href="#work"
          className="flex flex-col items-center gap-2 group hover:text-neutral-900 dark:hover:text-white transition-colors mx-auto sm:mx-0 cursor-pointer"
        >
          <span className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">Scroll down</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
          </motion.div>
        </a>
        <div className="hidden sm:block">
          Est. / © 2026 Zyvora Studio
        </div>
      </div>
    </section>
  );
}
