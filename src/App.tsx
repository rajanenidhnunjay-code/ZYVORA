import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProjectGrid from './components/ProjectGrid';
import ServicesList from './components/ServicesList';
import ProcessTimeline from './components/ProcessTimeline';
import InteractiveEstimator from './components/InteractiveEstimator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageSkeleton from './components/PageSkeleton';
import FAQ from './components/FAQ';
import BackToTop from './components/BackToTop';

const bentoSectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    }
  }
};

const bentoHeaderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const bentoItemVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isPageLoading, setIsPageLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsPageLoading(true);
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [activePage]);

  // Initialize and synchronize state-based dark theme toggling
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('zyvora-theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('zyvora-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('zyvora-theme', 'light');
    }
  }, [isDark]);

  // Synchronize hash changes to state router
  useEffect(() => {
    // Always default to home page on initial mount/refresh
    if (window.location.hash !== '') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setActivePage('home');
    window.scrollTo({ top: 0, behavior: 'instant' as any });

    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      const validPages = ['work', 'philosophy', 'services', 'process', 'contact', 'estimator', 'faq'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
        // Instant scroll top on page transition for complete single-page application consistency
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setActivePage('home');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleOpenEstimator = () => {
    window.location.hash = '#estimator';
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-neutral-900 antialiased transition-colors duration-300 flex flex-col justify-between">
      {/* Premium Navigation Header */}
      <Header
        activePage={activePage}
        onOpenEstimator={handleOpenEstimator}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Dynamic Router Blocks */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {isPageLoading ? (
            <motion.div
              key={`skeleton-${activePage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <PageSkeleton page={activePage} />
            </motion.div>
          ) : (
            <>
              {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {/* Typographic Hero Section */}
              <Hero />

              {/* Selected Cases & Filters Case Studies - Curated top 3 */}
              <div id="selected-projects">
                <ProjectGrid featuredOnly={true} />
              </div>

              {/* Quick Navigation Bento Grid */}
              <section className="py-24 sm:py-32 bg-white dark:bg-neutral-900 border-t border-neutral-150/40 dark:border-neutral-850 px-6 sm:px-12 transition-colors duration-300">
                <div className="max-w-7xl mx-auto">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={bentoSectionContainerVariants}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
                  >
                    <motion.div
                      variants={bentoHeaderVariants}
                      className="lg:col-span-5 flex flex-col justify-between space-y-6"
                    >
                      <div className="flex flex-col space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
                            Studio Overview
                          </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight leading-tight">
                          Explore our <br />
                          <span className="font-semibold italic font-display">Craft Ecosystem</span>
                        </h2>
                      </div>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
                        Each specialized module is designed independently to provide focused depth and extreme typographical rigor.
                      </p>
                    </motion.div>

                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Philosophy Teaser Card */}
                      <motion.a
                        href="#philosophy"
                        variants={bentoItemVariants}
                        className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 hover:border-neutral-450 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
                      >
                        <div className="flex justify-between items-start text-neutral-400">
                          <span className="text-xs font-mono">01 // CREED</span>
                          <span className="text-xs font-mono">PHILOSOPHY</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-350 transition-colors">
                            Our Philosophy & Manifesto
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-2 line-clamp-2">
                            Impeccable typographic discipline, performance-first methodologies, and absolute minimalism guidelines.
                          </p>
                        </div>
                      </motion.a>

                      {/* Services Teaser Card */}
                      <motion.a
                        href="#services"
                        variants={bentoItemVariants}
                        className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 hover:border-neutral-450 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
                      >
                        <div className="flex justify-between items-start text-neutral-400">
                          <span className="text-xs font-mono">02 // METHODS</span>
                          <span className="text-xs font-mono">CAPABILITIES</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-350 transition-colors">
                            Bespoke Services
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-2 line-clamp-2">
                            Interactive design suites, typographic systems, branding identity packages, and lightning fast code assemblies.
                          </p>
                        </div>
                      </motion.a>

                      {/* Process Teaser Card */}
                      <motion.a
                        href="#process"
                        variants={bentoItemVariants}
                        className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 hover:border-neutral-450 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[220px] group"
                      >
                        <div className="flex justify-between items-start text-neutral-400">
                          <span className="text-xs font-mono">03 // FLOW</span>
                          <span className="text-xs font-mono">TIMELINE</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-350 transition-colors">
                            Our Methodical Process
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-2 line-clamp-2">
                            An aligned path from conception, creative layout, technical composition, to final optimization and deployment.
                          </p>
                        </div>
                      </motion.a>

                      {/* Project Estimator Card */}
                      <motion.a
                        href="#estimator"
                        variants={bentoItemVariants}
                        className="p-8 rounded-2xl bg-neutral-900 dark:bg-white border border-neutral-900 dark:border-neutral-100 flex flex-col justify-between min-h-[220px] group hover:scale-[1.01] transition-transform duration-300"
                      >
                        <div className="flex justify-between items-start text-neutral-450 dark:text-neutral-500">
                          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">04 // BUILD</span>
                          <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500">PLANNER</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold text-white dark:text-neutral-950">
                            Interactive Project Planner
                          </h3>
                          <p className="text-xs text-neutral-300 dark:text-neutral-600 font-light mt-2 line-clamp-2">
                            Define your custom requirements and synthesize a bespoke digital scope estimate instantly.
                          </p>
                        </div>
                      </motion.a>

                      {/* FAQ Card */}
                      <motion.a
                        href="#faq"
                        variants={bentoItemVariants}
                        className="p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 hover:border-neutral-450 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col justify-between min-h-[220px] group sm:col-span-2"
                      >
                        <div className="flex justify-between items-start text-neutral-400">
                          <span className="text-xs font-mono">05 // RESOLUTION</span>
                          <span className="text-xs font-mono">FAQ PERSPECTIVES</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-350 transition-colors">
                            Perspective Board & FAQ
                          </h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light mt-2">
                            Transparent breakdowns regarding pricing formulations, launch execution SLA parameters, and bespoke sprint workflows.
                          </p>
                        </div>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <ProjectGrid featuredOnly={false} />
            </motion.div>
          )}

          {activePage === 'philosophy' && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <Philosophy />
            </motion.div>
          )}

          {activePage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <ServicesList />
            </motion.div>
          )}

          {activePage === 'process' && (
            <motion.div
              key="process"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <ProcessTimeline />
            </motion.div>
          )}

          {activePage === 'estimator' && (
            <motion.div
              key="estimator"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <InteractiveEstimator />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <Contact />
            </motion.div>
          )}

          {activePage === 'faq' && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="pt-24"
            >
              <FAQ />
            </motion.div>
          )}
            </>
          )}
        </AnimatePresence>
      </main>

      {/* Elite Studio Digital Signature Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <BackToTop />
    </div>
  );
}
