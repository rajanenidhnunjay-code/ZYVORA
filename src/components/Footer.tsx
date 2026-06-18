import React, { useState, useEffect } from 'react';
import { Mail, Github, Compass, Sparkles, MessageCircleCode, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Let's print local time nicely
      const parts = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setTimeStr(parts);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterError('');

    // Verification check for email formatting
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newsletterEmail) {
      setNewsletterError('Email is required');
      return;
    }
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid email address');
      return;
    }

    setSubscribed(true);
    setNewsletterEmail('');
  };


  return (
    <footer id="footer-section" className="bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-200/50 dark:border-neutral-850 py-16 sm:py-24 px-6 sm:px-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 border-b border-neutral-200/60 dark:border-neutral-800/60 pb-16">
          {/* Main call to build */}
          <div className="md:col-span-6 flex flex-col space-y-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-550">
              The Project Start
            </span>
            <h2 id="footer-heading" className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight leading-tight">
              Let’s build something <br />
              <span className="font-semibold italic font-display">extraordinary.</span>
            </h2>

          </div>

          {/* Sitemaps / Info blocks */}
          <div className="md:col-span-3 flex flex-col space-y-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-550">
              Navigation
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {['#work', '#philosophy', '#services', '#process', '#faq', '#contact'].map((section) => {
                let displayName = section.slice(1);
                if (section === '#faq') displayName = 'FAQ';
                if (section === '#work') displayName = 'Example Work';
                return (
                  <a
                    key={section}
                    href={section}
                    className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium transition-colors w-fit"
                  >
                    {displayName}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Minimal Journal/Newsletter subscription */}
          <div className="md:col-span-3 flex flex-col space-y-6">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-550">
              Journal Feed
            </span>
            <div className="flex flex-col space-y-4">
              <h3 className="text-xs uppercase font-mono text-neutral-400 dark:text-neutral-500 font-medium">Studio Dispatches</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-450 font-light leading-relaxed">
                Receive exceptional design perspectives, technical frameworks, and studio announcements directly.
              </p>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-800 text-xs text-neutral-800 dark:text-neutral-200 flex flex-col space-y-1">
                  <span className="font-semibold text-neutral-900 dark:text-white">Subscription registered.</span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-550 font-mono">Welcome to the Zyvora Journal feed.</span>
                </div>
              ) : (
                <form id="newsletter-form" onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
                  <div className="relative flex items-center">
                    <input
                      id="newsletter-email-input"
                      type="text"
                      placeholder="email@example.com"
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (newsletterError) setNewsletterError('');
                      }}
                      className="w-full bg-white dark:bg-neutral-900 p-3 pr-10 text-xs border border-neutral-200 dark:border-neutral-800 rounded-xl focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 font-light"
                    />
                    <button
                      id="newsletter-submit-btn"
                      type="submit"
                      aria-label="Subscribe"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 flex items-center justify-center hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  {newsletterError && (
                    <span className="text-[10px] font-mono text-red-500 dark:text-red-400 mt-1">
                      * {newsletterError}
                    </span>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Base Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-900 dark:text-white font-semibold select-none animate-pulse">
              ZYVORA AGENCY
            </span>
            <span className="text-[10px] font-mono uppercase text-neutral-400 hidden sm:inline">
              |
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              STUDIO CLOCK / {timeStr || '11:18 AM'} UTC
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              © 2026 / ALL RIGHTS DESIGNED
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
