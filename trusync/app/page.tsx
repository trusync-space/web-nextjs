'use client';

import React, { useState } from 'react';
import { Shield, Scale, Users, Eye, ArrowRight, Check } from 'lucide-react';

export default function TrusyncLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: '', email: '', company: '' });
    }, 5000);
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

          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all flex items-center gap-2"
          >
            Request Early Access
          </button>
        </div>
      </nav>

      {/* HERO - Centered Image */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter leading-none mb-8">
            Trust infrastructure<br />for autonomous AI agents
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Trusync helps AI agents transact, negotiate, and operate securely with transparency and human oversight.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="px-10 py-4 bg-[#3B82F6] hover:bg-[#2563EB] rounded-2xl font-medium text-lg transition-all inline-flex items-center justify-center gap-3 mb-16"
          >
            Request Early Access
            <ArrowRight />
          </button>

          {/* Centered Picture Placeholder */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto max-w-4xl">
            <img 
              src="/trusync-hero-placeholder.png" 
              alt="Trusync Platform Concept" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-black/70 px-6 py-3 rounded-2xl text-sm flex items-center gap-3">
              <span>Trusync in Action — Secure AI Commerce</span>
            </div>
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
              <div key={i} className="bg-[#111111] border border-white/10 rounded-3xl p-10 hover:border-[#3B82F6]/50 transition-all">
                <feature.icon size={36} className="text-[#3B82F6] mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-center text-sm text-gray-500">
        © 2026 Trusync • Building trust for the agent economy
      </footer>
    </div>
  );
}