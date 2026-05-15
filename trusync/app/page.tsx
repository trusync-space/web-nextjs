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
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#001f3f] text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#001f3f]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <span className="text-sm font-bold">T</span>
            </div>
            <span className="font-semibold text-2xl tracking-tighter">trusync</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#problem" className="hover:text-[#ff4d94] transition-colors">Problem</a>
            <a href="#solution" className="hover:text-[#ff4d94] transition-colors">Solution</a>
            <a href="#how" className="hover:text-[#ff4d94] transition-colors">How it Works</a>
            <a href="#developers" className="hover:text-[#ff4d94] transition-colors">Developers</a>
            <a href="#vision" className="hover:text-[#ff4d94] transition-colors">Vision</a>
          </div>

          <a 
            href="#waitlist" 
            className="px-8 py-3 bg-[#ff4d94] hover:bg-[#ff4d94]/90 text-white font-medium rounded-full transition-all flex items-center gap-2"
          >
            Request Early Access
            <ArrowRight size={18} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8 text-[#ff4d94]">
            Trust infrastructure<br />for autonomous AI agents
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Trusync helps AI agents transact, negotiate, and operate securely with transparency and human oversight.
          </p>

          <a 
            href="#waitlist" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#ff4d94] hover:bg-[#ff4d94]/90 text-white font-medium text-lg rounded-2xl transition-all"
          >
            Request Early Access
            <ArrowRight />
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="py-24 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold tracking-tighter mb-10">AI Agents Need Trust</h2>
          <p className="text-2xl text-gray-400">
            As AI systems become more autonomous, they will make important decisions independently.<br /><br />
            But there is currently <span className="text-[#ff4d94] font-semibold">no trusted infrastructure</span> to help them transact safely.
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
              <div key={i} className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-[#ff4d94]/50 transition-all">
                <feature.icon size={36} className="text-[#ff4d94] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
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
            <div className="bg-[#111111] border border-[#ff4d94] rounded-3xl p-12">
              <Check className="mx-auto mb-4 text-[#ff4d94]" size={48} />
              <p className="text-2xl">Thank you! You're on the list.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder="Your name" required className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-2xl focus:border-[#ff4d94] outline-none" onChange={(e) => setFormData({...formData, name: e.target.value})} />
              <input type="email" placeholder="Work email" required className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-2xl focus:border-[#ff4d94] outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
              <input type="text" placeholder="Company / Project" className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-2xl focus:border-[#ff4d94] outline-none" onChange={(e) => setFormData({...formData, company: e.target.value})} />

              <button type="submit" className="w-full py-4 bg-[#ff4d94] hover:bg-[#ff4d94]/90 text-white font-semibold rounded-2xl transition-all">
                Request Early Access
              </button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 text-center text-sm text-gray-500">
        © 2026 Trusync • Building trust for the agent economy
      </footer>
    </div>
  );
}