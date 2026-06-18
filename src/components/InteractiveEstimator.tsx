import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Mail, Handshake, ChevronRight, FileText, Calendar, DollarSign, ArrowUpRight, Send, HelpCircle } from 'lucide-react';

export default function InteractiveEstimator() {
  // Configured states for project planning
  const [selectedServices, setSelectedServices] = useState<string[]>(['Web Design']);
  const [timeframe, setTimeframe] = useState<string>('4 Weeks');
  const [budgetTier, setBudgetTier] = useState<string>('Bespoke Web Design ($5K - $10K)');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientAbout, setClientAbout] = useState<string>('');
  const [proposal, setProposal] = useState<any | null>(null);

  const availableServices = [
    { name: 'Web Design', baseCost: 4000 },
    { name: 'UI/UX Systems', baseCost: 5000 },
    { name: 'Website Development', baseCost: 4500 },
    { name: 'Branding & Direction', baseCost: 3500 },
  ];

  const budgets = [
    { tier: 'Emerging Startup ($4K - $8K)', value: 'startup' },
    { tier: 'Bespoke Web Design ($8K - $15K)', value: 'standard' },
    { tier: 'High-End Enterprise ($15K+)', value: 'enterprise' },
  ];

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== name));
      }
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const calculateEstimate = () => {
    let totalCost = 0;
    selectedServices.forEach((s) => {
      const srv = availableServices.find((item) => item.name === s);
      if (srv) totalCost += srv.baseCost;
    });

    // Adjust based on budget tier factor
    let factor = 1.0;
    if (budgetTier.includes('Enterprise')) factor = 1.35;
    if (budgetTier.includes('Startup')) factor = 0.85;

    totalCost = Math.round(totalCost * factor);

    const deliverablesList = [...selectedServices];
    if (selectedServices.includes('Web Design') && !selectedServices.includes('Branding & Direction')) {
      deliverablesList.push('Component Layout Sheets');
    }

    return {
      cost: totalCost.toLocaleString(),
      duration: timeframe,
      deliverables: deliverablesList,
      blueprintId: `ZY-${Math.floor(1000 + Math.random() * 9000)}`,
    };
  };

  const handleCreateProposal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert('Please fill in your name and email directory to compile your blueprint proposal.');
      return;
    }
    const calc = calculateEstimate();
    setProposal({
      ...calc,
      name: clientName,
      email: clientEmail,
      message: clientAbout || 'Excited to begin work together on building high-performance creative assets.',
    });
  };

  return (
    <section id="estimator" className="py-24 sm:py-32 bg-white dark:bg-neutral-900 px-6 sm:px-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          {/* Left Block: The Interactive Form Selector */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white" />
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium">
                  Start Your Project
                </span>
              </div>

              <h2 id="estimator-title" className="text-3xl sm:text-5xl font-display font-light text-neutral-900 dark:text-white tracking-tight leading-tight">
                Project Blueprint <br />
                <span className="font-semibold italic font-display">Planner</span>
              </h2>

              <p className="text-neutral-500 dark:text-neutral-450 text-sm font-light leading-relaxed max-w-md mt-4 mb-10">
                Outline your project expectations below. Our instant compiler dynamically projects a customized Zyvora Scope Blueprint matching your specifications.
              </p>

              {/* Form Input fields */}
              <form onSubmit={handleCreateProposal} className="space-y-6">
                {/* 1. Services Pill Selectors */}
                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 block">
                    1. Select Core Services You Need
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {availableServices.map((srv) => {
                      const selected = selectedServices.includes(srv.name);
                      return (
                        <button
                          key={srv.name}
                          type="button"
                          id={`srv-pill-${srv.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          onClick={() => toggleService(srv.name)}
                          className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border select-none ${
                            selected
                              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-sm'
                              : 'bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-450 border-neutral-200 dark:border-neutral-800 hover:border-neutral-450 dark:hover:border-neutral-600'
                          }`}
                        >
                          {selected ? <Check className="w-3.5 h-3.5 text-white dark:text-neutral-950" /> : null}
                          {srv.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Tier Grid Selectors */}
                <div className="space-y-3 pt-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 block">
                    2. Select Estimated Budget Target
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {budgets.map((b) => {
                      const selected = budgetTier === b.tier;
                      return (
                        <button
                          key={b.tier}
                          type="button"
                          id={`budget-btn-${b.value}`}
                          onClick={() => setBudgetTier(b.tier)}
                          className={`p-4 rounded-xl text-left border cursor-pointer select-none transition-all ${
                            selected
                              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border-neutral-950 dark:border-white shadow-sm'
                              : 'bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 border-neutral-200 dark:border-neutral-800 hover:border-neutral-450 dark:hover:border-neutral-600'
                          }`}
                        >
                          <span className="text-xs font-semibold leading-snug tracking-normal block">
                            {b.tier.split(' ($')[0]}
                          </span>
                          <span className={`text-[10px] font-mono block mt-1.5 ${selected ? 'text-neutral-350 dark:text-neutral-650' : 'text-neutral-450 dark:text-neutral-500'}`}>
                            (${b.tier.split(' ($')[1]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Duration Selector Toggles */}
                <div className="space-y-3 pt-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 block">
                    3. Target Delivery Window
                  </label>
                  <div className="flex gap-4">
                    {['3 Weeks (Expedited)', '4-6 Weeks (Bespoke)', '8+ Weeks (Immersive)'].map((t) => {
                      const selected = timeframe === t;
                      return (
                        <label
                          key={t}
                          className={`flex-1 p-3 border rounded-xl text-center cursor-pointer select-none text-xs font-semibold tracking-wider uppercase transition-all ${
                            selected
                              ? 'bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 border-neutral-950 dark:border-white shadow-sm'
                              : 'bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-850 hover:border-neutral-350 dark:hover:border-neutral-650'
                          }`}
                        >
                          <input
                            type="radio"
                            name="timeframe-grp"
                            checked={selected}
                            onChange={() => setTimeframe(t)}
                            className="sr-only"
                          />
                          {t.split(' (')[0]}
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Client Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-850">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 block">
                      Name
                    </label>
                    <input
                      id="input-client-name"
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Rachel Foster"
                      className="w-full bg-neutral-50 dark:bg-neutral-950 p-3 text-xs border border-neutral-200 dark:border-neutral-850 rounded-xl focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 block">
                      Email address
                    </label>
                    <input
                      id="input-client-email"
                      type="email"
                      required
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="rachel@example.com"
                      className="w-full bg-neutral-50 dark:bg-neutral-950 p-3 text-xs border border-neutral-200 dark:border-neutral-850 rounded-xl focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 dark:text-neutral-500 block">
                    Project details (Optional)
                  </label>
                  <textarea
                    id="input-client-desc"
                    value={clientAbout}
                    onChange={(e) => setClientAbout(e.target.value)}
                    placeholder="Briefly tell us about your brand, target audience, and high-level requirements..."
                    rows={3}
                    className="w-full bg-neutral-50 dark:bg-neutral-950 p-3 text-xs border border-neutral-200 dark:border-neutral-850 rounded-xl focus:border-neutral-900 dark:focus:border-neutral-100 focus:outline-none transition-all text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600"
                  />
                </div>

                <button
                  id="compile-proposal-btn"
                  type="submit"
                  className="w-full py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  Compile Custom Blueprint Proposal
                  <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Block: Interactive Proposal Projection Screen */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              {!proposal ? (
                <motion.div
                  key="empty-proposal"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/50 dark:border-neutral-850 rounded-3xl p-8 sm:p-12 text-center h-full flex flex-col justify-center items-center space-y-6 min-h-[500px]"
                >
                  <div className="w-16 h-16 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-400 dark:text-neutral-500 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-neutral-900 dark:text-white mb-2">
                      Inquiry Projection Screen
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-450 text-xs font-light max-w-xs mx-auto leading-relaxed">
                      Select options and fill in your details on the left, then click <strong>"Compile Custom Blueprint Proposal"</strong> to projection map your scope specifications instantly.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  id="proposal-receipt-blueprint"
                  key="compiled-proposal"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-neutral-900 text-neutral-100 rounded-3xl p-8 sm:p-10 shadow-xl border border-neutral-800 flex flex-col justify-between h-full min-h-[500px] relative overflow-hidden"
                >
                  {/* Watermark mark */}
                  <div className="absolute right-0 top-0 text-[10rem] font-black tracking-tighter text-white/[0.02] leading-none select-none pointer-events-none translate-x-12 -translate-y-12">
                    Z Y V
                  </div>

                  {/* Blueprint visual card layout */}
                  <div className="space-y-6 relative z-10">
                    <div className="flex justify-between items-center border-b border-neutral-800 pb-5">
                      <div className="flex flex-col">
                        <span className="text-[9px] uppercase font-mono text-neutral-400 tracking-[0.25em]">Zyvora Studio Blueprint</span>
                        <span className="text-sm font-semibold text-neutral-200 font-display mt-0.5">{proposal.blueprintId}</span>
                      </div>
                      <span className="text-[9px] font-mono bg-white/10 px-2.5 py-1 rounded text-white tracking-widest uppercase">
                        PROPOSAL STAGE
                      </span>
                    </div>

                    {/* Meta rows */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider text-neutral-400 block">Proffered Client</span>
                        <span className="text-xs font-semibold text-neutral-200 block mt-0.5">{proposal.name}</span>
                        <span className="text-[10px] text-neutral-400 block font-light mt-0.5">{proposal.email}</span>
                      </div>
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-wider text-neutral-400 block">Design Engine</span>
                        <span className="text-xs font-semibold text-neutral-200 block mt-0.5">Bespoke React Vite</span>
                        <span className="text-[10px] text-neutral-400 block font-light mt-0.5">Hyderabad / Telangana</span>
                      </div>
                    </div>

                    {/* Budget & timeline blocks */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-800/60">
                      <div className="bg-neutral-850 p-4 border border-neutral-800 rounded-xl flex items-center gap-3">
                        <div className="w-7 h-7 rounded bg-neutral-800 text-neutral-305 flex items-center justify-center text-xs font-semibold font-mono">
                          <DollarSign className="w-3.5 h-3.5 text-neutral-300" />
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-neutral-400 block">Estimated Cost</span>
                          <span className="text-sm font-bold text-white font-display mt-0.5">${proposal.cost}</span>
                        </div>
                      </div>

                      <div className="bg-neutral-850 p-4 border border-neutral-800 rounded-xl flex items-center gap-3">
                        <div className="w-7 h-7 rounded bg-neutral-800 text-neutral-305 flex items-center justify-center text-xs font-bold font-mono">
                          <Calendar className="w-3.5 h-3.5 text-neutral-300" />
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider font-mono text-neutral-400 block">Target Frame</span>
                          <span className="text-sm font-bold text-white font-display mt-0.5">{proposal.duration.split(' (')[0]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Deliverables Provided */}
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-neutral-400 mt-2 block">Scope & Deliverables Pipeline</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                        {proposal.deliverables.map((d: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300 p-2 bg-neutral-850 rounded border border-neutral-800/40 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Brief notes summary */}
                    <div>
                      <span className="text-[8px] uppercase font-mono tracking-wider text-neutral-400 block">Strategic Description Notes</span>
                      <p className="text-[11px] leading-relaxed text-neutral-450 font-light italic mt-1 bg-neutral-850 p-3 rounded-xl border border-neutral-850/60 text-neutral-350">
                        "{proposal.message}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                    <span className="text-[9px] uppercase tracking-widest font-mono text-neutral-500">
                      ZYVORA DIGITAL — BLUEPRINT COMPILED
                    </span>
                    <button
                      id="save-proposal-action"
                      onClick={() => {
                        alert(`Proposal Blueprint ${proposal.blueprintId} has been securely saved to our digital workspace! We will reach out to ${proposal.email} in 24 hours.`);
                        setProposal(null);
                        setClientName('');
                        setClientEmail('');
                        setClientAbout('');
                      }}
                      className="px-5 py-2 rounded-full text-[10px] font-semibold bg-white text-neutral-900 hover:bg-neutral-100 hover:shadow shadow-zinc-950/20 uppercase tracking-widest flex items-center gap-1.5 cursor-pointer transition-all w-full sm:w-auto justify-center"
                    >
                      Lock In & Submit
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
