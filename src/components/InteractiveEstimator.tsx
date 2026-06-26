import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Mail, Handshake, ChevronRight, FileText, Calendar, DollarSign, ArrowUpRight, Send } from 'lucide-react';

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

  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) {
      alert("Please provide your name and email address before submitting.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "82b70154-6cd2-4880-97e9-e1b10f2b24a3", 
          subject: `✨ New Interactive Blueprint Proposal from ${clientName}`,
          name: clientName,
          email: clientEmail,
          message: `--- PROJECT ESTIMATOR BLUEPRINT ---\nChosen Services: ${selectedServices.join(", ")}\nTarget Delivery Window: ${timeframe}\nEstimated Budget Tier: ${budgetTier}\nAdditional Project Details: ${clientAbout || "None provided"}`,
          timestamp: new Date().toLocaleString()
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert(`Thank you ${clientName}! Your proposal choices have been emailed to us.`);
        setClientName('');
        setClientEmail('');
        setClientAbout('');
      } else {
        alert("Submission failed. Please check your Web3Forms key configuration.");
      }
    } catch (error) {
      console.error("Error submitting interactive form:", error);
      alert("Network error occurred while trying to send your project details.");
    }
  };

  return (
    <div className="space-y-8">
      {/* 1. Services Pill Selectors */}
      <div className="space-y-3">
        <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
          1. Select Core Services You Need
        </label>
        <div className="flex flex-wrap gap-2">
          {availableServices.map((service) => (
            <button
              key={service.name}
              type="button"
              onClick={() => toggleService(service.name)}
              className={`px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                selectedServices.includes(service.name)
                  ? 'bg-neutral-900 text-white border-neutral-900'
                  : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {selectedServices.includes(service.name) && '✓ '}
              {service.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Budget Selection */}
      <div className="space-y-3">
        <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
          2. Select Estimated Budget Target
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {budgets.map((b) => (
            <button
              key={b.value}
              type="button"
              onClick={() => setBudgetTier(b.tier)}
              className={`p-4 rounded-xl border text-left transition-all ${
                budgetTier === b.tier
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'bg-neutral-950/40 border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <div className="text-xs font-semibold">{b.tier.split(' (')[0]}</div>
              <div className="text-[10px] font-mono text-neutral-500 mt-1">
                {b.tier.includes('(') ? b.tier.substring(b.tier.indexOf('(')) : ''}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Delivery Timeframe */}
      <div className="space-y-3">
        <label className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
          3. Target Delivery Window
        </label>
        <div className="grid grid-cols-3 gap-2">
          {['3 Weeks', '4-6 Weeks', '8+ Weeks'].map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => setTimeframe(time)}
              className={`py-3 rounded-lg border text-xs font-medium transition-all text-center ${
                timeframe === time
                  ? 'bg-neutral-900 border-neutral-900 text-white'
                  : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* 4. Form Submission Inputs */}
      <form onSubmit={handleSubmitProposal} className="space-y-4 pt-4 border-t border-neutral-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono text-neutral-500">Name</label>
            <input
              type="text"
              required
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-neutral-700"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-mono text-neutral-500">Email Address</label>
            <input
              type="email"
              required
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-neutral-700"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] uppercase font-mono text-neutral-500">Project Details (Optional)</label>
          <textarea
            rows={4}
            value={clientAbout}
            onChange={(e) => setClientAbout(e.target.value)}
            className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-neutral-700 resize-none"
            placeholder="Tell us a bit about what you want to build..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-white text-black text-xs font-semibold uppercase tracking-wider py-4 rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
        >
          Compile Custom Blueprint Proposal <ChevronRight size={14} />
        </button>
      </form>
    </div>
  );
}