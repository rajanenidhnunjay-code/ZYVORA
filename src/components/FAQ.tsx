import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, HelpCircle, DollarSign, Clock, Settings, X, ArrowRight } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'pricing' | 'timeline' | 'workflow';
  question: string;
  answer: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  // Pricing Category
  {
    id: 'price-1',
    category: 'pricing',
    question: 'How is project pricing calculated?',
    answer: 'Our project prices are determined strictly based on complexity, scope requirements, and deliverables formulated through our Interactive Estimator. We prefer transparent, fixed-pricing models over legacy variable hourly rates to guarantee delivery alignment without sudden invoicing surges.',
    tags: ['Estimation', 'Fixed Price', 'Transparency'],
  },
  {
    id: 'price-2',
    category: 'pricing',
    question: 'Are there any recurring or hidden monthly overheads?',
    answer: 'No. We construct our builds using robust serverless architectures and static hosting workflows. When your project concludes, you retain 100% intellectual property ownership and direct cloud access. Any cloud hosting costs are configured straight to your billing cards (often within free tiers for small setups).',
    tags: ['Intellectual Property', 'Serverless', 'Clear Costs'],
  },
  {
    id: 'price-3',
    category: 'pricing',
    question: 'What is your standard deposit and invoicing schedule?',
    answer: 'We operate on a standard 50% upfront deposit to initiate sprints, locking in our design and engineering roster. The remaining 50% is tied directly to client-verified milestones (typically 25% upon design system sign-off and 25% upon final production deployment acceptance).',
    tags: ['Milestone Pay', 'Sprints', 'Invoices'],
  },
  {
    id: 'price-4',
    category: 'pricing',
    question: 'Do you offer custom enterprise discount structures?',
    answer: 'Yes, for continuous multi-quarter engineering retention or complex multi-tier system bundles, we provide custom partnership retainer agreements offering scaled pricing, guaranteed support priority, and consistent sprint capacity allocations.',
    tags: ['Enterprise', 'Retainers', 'Partnership'],
  },

  // Timeline Category
  {
    id: 'time-1',
    category: 'timeline',
    question: 'What is your typical project delivery SLA?',
    answer: 'Depending on complexity: simple interactive web setups take 4–6 weeks; comprehensive corporate products and systems require 8–12 weeks; while custom enterprise-scale integrations are planned on 12–16 week roadmaps. We divide all runs into 2-week agile sprint review sheets.',
    tags: ['SLA', 'Agile Sprints', 'Timeline'],
  },
  {
    id: 'time-2',
    category: 'timeline',
    question: 'Can you accommodate urgent, high-priority schedules?',
    answer: 'Absolutely. We offer an expedited path with premium rush surcharges. By scaling active team assignments and running concurrent design-dev modules, we can accelerate standard timelines by up to 40% depending on resource roster levels.',
    tags: ['Rush Sprint', 'Concurrent Dev', 'Roster'],
  },
  {
    id: 'time-3',
    category: 'timeline',
    question: 'How do you handle scope shifts or unforeseen delays?',
    answer: 'Any scope alterations are calculated live using our interactive planner. If a feature is added mid-project, we outline its impact and generate a signed addendum so that timeline expectations and final pricing revisions stay perfectly balanced and documented.',
    tags: ['Scope Shift', 'Change Request', 'Adjustments'],
  },

  // Workflow Category
  {
    id: 'flow-1',
    category: 'workflow',
    question: 'What are your communications and status update loops?',
    answer: 'We leverage Slack as our primary asynchronous hub, including real-time video demo cards and weekly interactive screen shares. You will receive private dashboard links to view real-time Figma canvases and Github commits directly.',
    tags: ['Async Work', 'Github Commits', 'Weekly Demos'],
  },
  {
    id: 'flow-2',
    category: 'workflow',
    question: 'Are there generic layout frameworks or custom templates?',
    answer: 'Never. Every brand book, typographic spacing layout, atomic component, and database module we assemble is coded completely from zero. This ensures optimal asset sizing, unmatched performance scores, and layout designs that reflect your exact brand essence.',
    tags: ['Bespoke Code', 'Typography', 'Zero Templates'],
  },
  {
    id: 'flow-3',
    category: 'workflow',
    question: 'Do you offer maintenance and server care after deployment?',
    answer: 'Yes. Every project includes 30 days of complimentary, post-launch elite warranty support to resolve any edge-case anomalies. Beyond that, we provide modular monthly retainer agreements covers security patches, server operations, and small feature adjustments.',
    tags: ['Support SLA', 'Security Care', 'Warranty'],
  },
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pricing' | 'timeline' | 'workflow'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleCategorySelect = (category: 'all' | 'pricing' | 'timeline' | 'workflow') => {
    setSelectedCategory(category);
    setExpandedId(null); // Reset expanded accordion on tab switch for smooth layout flow
  };

  // Filter strategy based on both category and search query
  const filteredFAQs = faqData.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { value: 'all', label: 'All Queries', icon: HelpCircle },
    { value: 'pricing', label: 'Pricing & Cost', icon: DollarSign },
    { value: 'timeline', label: 'Timeline & SLA', icon: Clock },
    { value: 'workflow', label: 'Our Workflow', icon: Settings },
  ] as const;

  return (
    <section id="faq" className="py-24 sm:py-32 bg-neutral-50 dark:bg-neutral-950 px-6 sm:px-12 relative transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        
        {/* Typographic Header */}
        <div className="flex flex-col space-y-4 mb-16 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
              Resolve Your Doubts
            </span>
          </div>
          <h2 id="faq-title" className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight">
            Frequently Asked <span className="font-semibold italic font-display">Perspectives</span>
          </h2>
          <p className="max-w-md mx-auto text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
            Transparent answers regarding planning budgets, milestones, sprint release times, and elite agency operations.
          </p>
        </div>

        {/* Dynamic Controls Grid */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-10 w-full">
          {/* Custom Filter Bar */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  id={`faq-cat-filter-${cat.value}`}
                  key={cat.value}
                  onClick={() => handleCategorySelect(cat.value)}
                  className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 shadow-sm'
                      : 'bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-450 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/85 dark:hover:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search bar input container */}
          <div className="relative w-full md:w-80">
            <input
              id="faq-search-input"
              type="text"
              placeholder="Search perspectives or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-neutral-900 p-3 pl-10 pr-10 text-xs border border-neutral-200 dark:border-neutral-800 rounded-2xl focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 font-light shadow-sm"
            />
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchTerm && (
              <button
                id="faq-search-clear-btn"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-450 dark:text-neutral-500 transition-colors cursor-pointer"
                aria-label="Clear Search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Accordion list */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.length > 0 ? (
              <motion.div 
                layout 
                className="space-y-4"
              >
                {filteredFAQs.map((faq, idx) => {
                  const isExpanded = expandedId === faq.id;
                  return (
                    <motion.div
                      id={`faq-accordion-container-${faq.id}`}
                      key={faq.id}
                      layout="position"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className={`rounded-2xl border transition-all duration-300 bg-white dark:bg-neutral-900/60 overflow-hidden ${
                        isExpanded
                          ? 'border-neutral-400 dark:border-neutral-600 shadow-sm ring-1 ring-neutral-400/10 dark:ring-neutral-600/10'
                          : 'border-neutral-200/60 dark:border-neutral-800/80 hover:border-neutral-350 dark:hover:border-neutral-700'
                      }`}
                    >
                      {/* Accordion header button */}
                      <button
                        id={`faq-accordion-header-btn-${faq.id}`}
                        onClick={() => toggleAccordion(faq.id)}
                        className="w-full text-left p-6 sm:p-7 flex justify-between items-start gap-4 cursor-pointer focus:outline-none group select-none"
                        aria-expanded={isExpanded}
                      >
                        <div className="flex flex-col space-y-2.5">
                          {/* Tag & Category */}
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-850 px-2.5 py-0.5 rounded-md">
                              {faq.category}
                            </span>
                            <span className="text-[9px] font-mono text-neutral-350 dark:text-neutral-550">
                              0{idx + 1} //
                            </span>
                          </div>
                          {/* Question item */}
                          <h3 className="text-sm sm:text-base font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors leading-snug">
                            {faq.question}
                          </h3>
                        </div>

                        {/* Expand Icon */}
                        <div className={`mt-5 w-8 h-8 rounded-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800/85 flex items-center justify-center transition-all duration-300 text-neutral-500 dark:text-neutral-400 ${
                          isExpanded ? 'rotate-180 bg-neutral-900 border-neutral-900 text-white dark:bg-white dark:border-white dark:text-neutral-950' : ''
                        }`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {/* Smooth accordion panel section */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            id={`faq-accordion-body-${faq.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <div className="px-6 sm:px-7 pb-6 font-sans text-xs sm:text-sm text-neutral-500 dark:text-neutral-410 leading-relaxed font-light border-t border-neutral-100 dark:border-neutral-850 pt-5 space-y-4">
                              <p>{faq.answer}</p>
                              
                              {/* Inline Tags list */}
                              <div className="flex flex-wrap gap-1.5 pt-2">
                                {faq.tags.map(tag => (
                                  <span
                                    key={tag}
                                    className="text-[10px] font-mono text-neutral-450 dark:text-neutral-500 bg-neutral-50 dark:bg-neutral-950 px-2 py-0.5 rounded border border-neutral-200/30 dark:border-neutral-850"
                                  >
                                    #{tag.toLowerCase().replace(/\s+/g, '-')}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center border border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl flex flex-col items-center justify-center space-y-3 bg-white/40 dark:bg-neutral-900/10"
              >
                <div className="w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center text-neutral-450">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">No matching perspectives found</h4>
                  <p className="text-[11px] text-neutral-400 dark:text-neutral-500 font-light max-w-sm px-6">
                    We couldn't locate any answers corresponding to "{searchTerm}". Try refining your keywords or checking different categories above.
                  </p>
                </div>
                <button
                  id="faq-reset-filters-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 cursor-pointer transition-colors"
                >
                  Reset Filtering
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic CTA box at bottom */}
        <div id="faq-quick-action" className="mt-16 p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-250/40 dark:border-neutral-850 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-300">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-base font-semibold text-neutral-900 dark:text-white">Still have questions unaddressed?</h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-455 font-light leading-relaxed max-w-md">
              Calculate a comprehensive scope using our Planner, or submit detailed logs to our founders directly via the Contact Portal.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              id="faq-cta-estimator"
              href="#estimator"
              className="px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-semibold text-white dark:text-neutral-950 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors text-center cursor-pointer shadow-sm"
            >
              Interactive Planner
            </a>
            <a
              id="faq-cta-contact"
              href="#contact"
              className="px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-semibold text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-850 hover:text-neutral-900 dark:hover:text-white transition-all text-center cursor-pointer flex items-center justify-center gap-1.5"
            >
              Contact Founders
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
