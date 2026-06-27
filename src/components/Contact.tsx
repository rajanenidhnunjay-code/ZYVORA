import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Phone, User, Send, Compass, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const founders = [
    {
      name: "THOTA CHINNA LAXMI NARSHIMHA NAIDU",
      role: 'Founder',
      phone: '79894 38641',
      rawPhone: '+917989438641',
      email: 'thotachinnanaidu@gmail.com',
    },
    {
      name: 'R. DHANUNJAYA RAO',
      role: 'Co Founder',
      phone: '6303565276',
      rawPhone: '+916303565276',
      email: 'rajanenidhnunjay@gmail.com',
    },
  ];

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      alert("Please fill out all fields before starting a project.");
      return;
    }

    try {
      // 1. Web3Forms submission (keeps your email alerts active)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "82b70154-6cd2-4880-97e9-e1b10f2b24a3",
          subject: `🚀 New Project Request from ${name}`,
          name: name,
          email: email,
          message: msg,
          timestamp: new Date().toLocaleString()
        }),
      });

      // 2. Supabase submission (saves data directly to your table database)
      const { error: supabaseError } = await supabase
        .from('leads')
        .insert([
          { client_email: email, client_message: msg }
        ]);

      if (supabaseError) {
        console.error("Supabase storage error:", supabaseError.message);
      }

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        // Clear message fields but keep the name intact so the success message renders properly
        setEmail('');
        setMsg('');
      } else {
        alert("Something went wrong with Web3Forms. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      alert("Failed to send information. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white dark:bg-neutral-900 px-6">
      <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-neutral-200/50 dark:bg-neutral-800/30 blur-3xl rounded-full -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Team & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600"></span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 dark:text-neutral-400">Direct Line to Leadership</span>
              </div>
              <h2 id="contact-heading" className="text-3xl sm:text-5xl font-display font-semibold tracking-tight text-neutral-900 dark:text-white">
                Let's speak <br />
              </h2>
            </div>

            {/* Direct Connect Cards */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                {founders.map((founder, index) => (
                  <div key={index} id={`founder-card-${index}`} className="p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/50 flex flex-col justify-between items-start gap-4">
                    <div className="flex justify-between items-start w-full">
                      <div>
                        <span className="text-xs font-mono uppercase text-neutral-400 dark:text-neutral-500">{founder.role}</span>
                        <h4 className="text-base font-semibold text-neutral-900 dark:text-white mt-1">{founder.name}</h4>
                      </div>
                    </div>
                    <div className="w-full pt-2 border-t border-neutral-100 dark:border-neutral-800 flex justify-between text-sm">
                      <a href={`tel:${founder.rawPhone}`} className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <Phone className="w-3.5 h-3.5" /> {founder.phone}
                      </a>
                      <a href={`mailto:${founder.email}`} className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                        <Mail className="w-3.5 h-3.5" /> Email
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-100 dark:border-neutral-800/80 rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div key="form-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col space-y-6 h-full justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Send an Instant Message</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">We reply directly to your mailbox within 24 hours.</p>
                  </div>
                  
                  <form onSubmit={handleSend} className="space-y-5">
                    <div className="space-y-2">
                      <label htmlFor="contact-form-name" className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Full Name</label>
                      <input id="contact-form-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Rachel Foster" className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-form-email" className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Email address</label>
                      <input id="contact-form-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="rachel@example.com" className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-form-message" className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">Message / Business Inquiry</label>
                      <textarea id="contact-form-message" rows={4} required value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Tell us about your brand..." className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-500 transition-all resize-none"></textarea>
                    </div>
                    <button type="submit" id="submit-contact-message" className="w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium py-3.5 px-4 rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 text-sm mt-2">
                      Send Message <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success-container" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center h-full py-12">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-4">
                    <Send className="w-6 h-6 text-neutral-900 dark:text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-900 dark:text-white">Message Dispatched Successfully</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-xs">Thank you, {name}. Your inquiry has been routed to our leadership team.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}