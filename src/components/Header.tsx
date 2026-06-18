import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activePage: string;
  onOpenEstimator: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ activePage, onOpenEstimator, isDark, onToggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Example Work', href: '#work', page: 'work' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-neutral-50/80 dark:bg-neutral-950/85 backdrop-blur-md py-4 border-b border-neutral-200/50 dark:border-neutral-800/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#"
            className="font-display text-lg tracking-[0.25em] font-bold text-neutral-900 dark:text-white hover:opacity-75 transition-opacity"
          >
            ZYVORA
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-10">
            {menuItems.map((item) => {
              const itemPage = item.page || item.label.toLowerCase();
              const isActive = activePage === itemPage;
              return (
                <a
                  id={`nav-${itemPage.replace(/\s+/g, '-')}`}
                  key={item.label}
                  href={item.href}
                  className={`text-xs uppercase tracking-widest font-medium transition-colors duration-300 relative group ${
                    isActive
                      ? 'text-neutral-900 dark:text-white'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[1.5px] bg-neutral-900 dark:bg-white transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Elegant Theme Toggle Button */}
            <button
              id="theme-toggle-header-btn"
              onClick={onToggleTheme}
              className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-850 text-neutral-800 dark:text-neutral-200 flex items-center justify-center transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow"
              aria-label="Toggle visual theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -15, scale: 0.6, rotate: 90 }}
                    animate={{ y: 0, scale: 1, rotate: 0 }}
                    exit={{ y: 15, scale: 0.6, rotate: -90 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -15, scale: 0.6, rotate: 90 }}
                    animate={{ y: 0, scale: 1, rotate: 0 }}
                    exit={{ y: 15, scale: 0.6, rotate: -90 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <Moon className="w-4 h-4 text-neutral-800" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                id="cta-start-project"
                onClick={onOpenEstimator}
                className="px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest text-white dark:text-neutral-950 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 flex items-center gap-1.5 group cursor-pointer shadow-sm hover:shadow-md"
              >
                Start Project
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-neutral-900 dark:text-white hover:opacity-70 focus:outline-none transition-opacity cursor-pointer p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 pt-24 pb-8 px-6 bg-neutral-50/95 dark:bg-neutral-950/98 backdrop-blur-lg flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {menuItems.map((item, idx) => {
                const itemPage = item.page || item.label.toLowerCase();
                const isActive = activePage === itemPage;
                return (
                  <motion.a
                    id={`mobile-nav-${itemPage.replace(/\s+/g, '-')}`}
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`text-2xl font-display tracking-wide flex items-center justify-between ${
                      isActive
                        ? 'font-medium text-neutral-900 dark:text-white border-b border-neutral-900 dark:border-white pb-1'
                        : 'font-light text-neutral-500 dark:text-neutral-450 hover:text-neutral-950 dark:hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-neutral-400">0{idx + 1}</span>
                  </motion.a>
                );
              })}
            </div>

            <div className="flex flex-col space-y-6 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-6">
              <button
                id="mobile-cta-estimator"
                onClick={() => {
                  setIsOpen(false);
                  onOpenEstimator();
                }}
                className="w-full py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-white dark:text-neutral-950 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Start Project
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                Studio/Zyvora — © 2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
