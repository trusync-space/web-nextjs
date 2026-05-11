'use client';

import React, { useState } from 'react';
import { Shield, Scale, Users, Eye, ArrowRight, Check } from 'lucide-react';

export default function TrusyncLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <span className="text-sm font-bold">T</span>
            </div>
            <span className="font-semibold text-2xl tracking-tighter">trusync</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#problem" className="hover:text-[#3B82F6] transition-colors">Problem</a>
            <a href="#solution" className="hover:text-[#3B82F6] transition-colors">Solution</a>
            <a href="#how" className="hover:text-[#3B82F6] transition-colors">How it Works</a>
            <a href="#developers" className="hover:text-[#3B82F6] transition-colors">Developers</a>
            <a href="#vision" className="hover:text-[#3B82F6] transition-colors">Vision</a>
          </div>

          <a href="#waitlist" className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2">
            Request Early Access
            <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 mb-8">
            
            <span className="uppercase text-xs tracking-[3px]"></span>
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8">
            Trust infrastructure<br />for autonomous AI agents
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Trusync helps AI agents transact, negotiate, and operate securely with transparency and human oversight.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="px-10 py-4 bg-[#3B82F6] hover:bg-blue-600 rounded-2xl font-medium text-lg transition-all inline-flex items-center justify-center gap-3">
              Request Early Access
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-10">AI Agents Need Trust</h2>
          <p className="text-2xl text-gray-400">
            As AI systems become more autonomous, they will make important decisions independently.<br /><br />
            But there is currently <span className="text-white">no trusted infrastructure</span> to help them transact safely, manage risk, and escalate to humans when needed.
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-semibold tracking-tighter text-center mb-16">What Trusync Enables</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Secure Transactions", desc: "AI agents transact with safety checks and real-time monitoring." },
              { icon: Scale, title: "Intelligent Decision Systems", desc: "Compare pricing, evaluate risk before execution." },
              { icon: Users, title: "Human Oversight", desc: "Escalate difficult situations to humans instantly." },
              { icon: Eye, title: "Transparency & Logging", desc: "Complete audit trails of all agent activity." }
            ].map((feature, i) => (
              <div key={i} className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-[#3B82F6]/50 transition-all glow-blue">
                <feature.icon size={36} className="text-[#3B82F6] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-semibold tracking-tighter text-center mb-16">How It Works</h2>
          <div className="space-y-16">
            {[
              "AI agent initiates action or transaction",
              "Trusync evaluates risk, pricing, trust signals, and compliance",
              "Transaction executes safely with full logging and optional human escalation"
            ].map((step, i) => (
              <div key={i} className="flex gap-8">
                <div className="w-12 h-12 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/30 flex items-center justify-center text-2xl font-mono text-[#3B82F6] flex-shrink-0">
                  {i+1}
                </div>
                <p className="text-2xl text-gray-300 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-28 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-semibold tracking-tighter mb-4">Join the Early Access List</h2>
          <p className="text-gray-400 mb-10">Be among the first to build with trust infrastructure for AI agents.</p>

          {submitted ? (
            <div className="bg-[#111111] border border-[#3B82F6] rounded-3xl p-12">
              <Check className="mx-auto mb-4 text-[#3B82F6]" size={48} />
              <p className="text-2xl">Thank you! You're on the list.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Your name" required
                className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-2xl focus:border-[#3B82F6] outline-none"
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
              
              <input type="email" placeholder="Work email" required
                className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-2xl focus:border-[#3B82F6] outline-none"
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
              
              <input type="text" placeholder="Company / Project" 
                className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-2xl focus:border-[#3B82F6] outline-none"
                onChange={(e) => setFormData({...formData, company: e.target.value})} />

              <button type="submit" className="w-full py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition">
                Request Early Access
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-sm text-gray-500">
        © 2026 Trusync • Building trust for the agent economy
      </footer>
    </div>
  );
}
