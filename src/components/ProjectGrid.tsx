import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, Activity, Calendar, Award, CheckCircle2, Maximize2 } from 'lucide-react';
import { projects } from '../data';
import { Project } from '../types';

interface ProjectGridProps {
  featuredOnly?: boolean;
}

export default function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Derive available categories dynamically
  const categories = ['All', 'Web Design', 'Branding & Web Design', 'Editorial'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const displayedProjects = featuredOnly ? filteredProjects.slice(0, 3) : filteredProjects;

  return (
    <section id="work" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950 px-6 sm:px-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 sm:mb-20">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
              <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
                Case Studies
              </span>
            </div>
            <h2 id="portfolio-title" className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight">
              {featuredOnly ? 'Featured' : 'Selected'} <span className="font-semibold italic font-display">Creations</span>
            </h2>
          </div>

          {/* Filtering Sub-nav */}
          {!featuredOnly && (
            <div className="flex flex-wrap gap-2 pt-4 md:pt-0">
              {categories.map((cat) => (
                <button
                  id={`cat-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-sm'
                      : 'bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/80 dark:hover:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic Project Grid with motion layout for fluid filter transitions */}
        <motion.div
          id="portfolio-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((p, idx) => (
              <motion.div
                id={`project-card-${p.id}`}
                layout
                key={p.id}
                initial={{ 
                  opacity: 0, 
                  rotateX: 18, 
                  rotateY: -8, 
                  transformPerspective: 1200, 
                  y: 50, 
                  scale: 0.96 
                }}
                whileInView={{ 
                  opacity: 1, 
                  rotateX: 0, 
                  rotateY: 0, 
                  y: 0, 
                  scale: 1 
                }}
                exit={{ 
                  opacity: 0, 
                  rotateX: -10, 
                  y: 15, 
                  scale: 0.98 
                }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.9,
                  delay: (idx % 3) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                  layout: { duration: 0.4 }
                }}
                className="group relative cursor-pointer flex flex-col"
                onClick={() => setActiveProject(p)}
              >
                {/* Image Container with strict 4:3 Aspect Ratio */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800/65 relative">
                  {/* Subtle color highlight background when loading */}
                  <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 transition-opacity duration-500 z-0" />
                  
                  <img
                    src={p.image}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover relative z-10 select-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Absolute Overlay on hover */}
                  <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-300">
                        {p.year}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:translate-x-1 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1">
                      <span className="text-xl sm:text-2xl font-display font-light text-white">
                        {p.title}
                      </span>
                      <span className="text-xs text-neutral-300 font-light">
                        {p.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info block under thumbnail (always visible for mobile/accessibility) */}
                <div className="mt-4 flex items-center justify-between px-1">
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-350 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-xs text-neutral-450 dark:text-neutral-450 font-light mt-0.5">
                      {p.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">
                    {p.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {featuredOnly && (
          <div className="mt-16 flex justify-center">
            <a
              id="all-work-cta"
              href="#work"
              className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white dark:text-neutral-950 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:shadow shadow-sm transition-all duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Explore All Selected Work
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}
      </div>

      {/* High-End Detail Modal / Slider Overlay */}
      <AnimatePresence>
        {activeProject && (
          <div
            id="project-detail-portal"
            className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              id="project-detail-modal"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white dark:bg-neutral-900 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden relative flex flex-col border border-neutral-100 dark:border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Cover Header and Image */}
              <div className="relative h-64 sm:h-96 w-full">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-neutral-250/10" />

                {/* Sticky Action Headers */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded-full">
                    {activeProject.year}
                  </span>
                  <button
                    id="close-project-modal"
                    onClick={() => setActiveProject(null)}
                    className="w-10 h-10 rounded-full bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 transition-transform hover:scale-105 cursor-pointer shadow-md"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-8 right-8 text-white">
                  <span className="text-xs tracking-widest uppercase text-neutral-300 font-mono mb-1 block">
                    {activeProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-display font-light leading-none">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Contents & Metadata Bento Grid */}
              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 bg-white dark:bg-neutral-900">
                {/* Left side: Detailed brief */}
                <div className="lg:col-span-7 flex flex-col space-y-8">
                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">
                      Project Concept
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-350 text-base font-light leading-relaxed">
                      {activeProject.concept}
                    </p>
                  </div>

                  {/* Real measurable metrics / outcomes */}
                  {activeProject.stats && (
                    <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800">
                      <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 mb-4 flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5" /> Core Metrics Achieved
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {activeProject.stats.map((stat, i) => (
                          <div key={i} className="flex flex-col bg-neutral-50 dark:bg-neutral-950 rounded-xl p-4 border border-neutral-100 dark:border-neutral-800">
                            <span className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white font-display">
                              {stat.value}
                            </span>
                            <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-neutral-450 dark:text-neutral-500 mt-1 font-mono leading-none">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right side: Deliverables checklist & quick stats */}
                <div className="lg:col-span-5 flex flex-col space-y-6 lg:border-l lg:border-neutral-100 lg:dark:border-neutral-800 lg:pl-10">
                  <div className="bg-neutral-50 dark:bg-neutral-950 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 flex flex-col space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 flex items-center justify-center">
                        <Award className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-mono text-neutral-400 dark:text-neutral-550 tracking-wider">Client</span>
                        <span className="text-sm font-semibold text-neutral-850 dark:text-neutral-250">{activeProject.client}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-mono text-neutral-400 dark:text-neutral-550 tracking-wider">Studio Year</span>
                        <span className="text-sm font-semibold text-neutral-850 dark:text-neutral-250">{activeProject.year} ©</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
                      Deliverables Provided
                    </h4>
                    <div className="flex flex-col space-y-2">
                      {activeProject.deliverables.map((item, id) => (
                        <div key={id} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-350 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    id={`modal-cta-${activeProject.id}`}
                    onClick={() => {
                      setActiveProject(null);
                      // Scroll to contact
                      document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-4 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-xs uppercase tracking-widest hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    Discuss Similar Project
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
