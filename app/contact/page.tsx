"use client";

import { useMemo, useState } from "react";
import { CheckCircle, Compass, Mail, MessageCircle, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923001234567";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const whatsappText = useMemo(() => {
    return [
      "Hi Explore Pakistan team,",
      `Name: ${form.name || "Not provided"}`,
      `Email: ${form.email || "Not provided"}`,
      "Message:",
      form.message || "I would like to plan a trip.",
    ].join("\n");
  }, [form]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/${+923493485645}?text=${encodeURIComponent(whatsappText)}`;
  }, [whatsappText]);

  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    openWhatsApp();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <AnimatedSection className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Contact</p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Plan your next Pakistan journey</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Have a question about travel routes, destinations, or the design behind this experience? Send a message and we&apos;ll respond on WhatsApp.
        </p>
      </AnimatedSection>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <AnimatedSection delay={0.1} className="glass-panel rounded-[1.75rem] p-6">
          <h2 className="text-xl font-bold text-white">What you&apos;ll get</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-200">
            <div className="flex gap-3">
              <Compass size={18} className="mt-1 text-emerald-300" />
              <div>
                <div className="font-semibold text-white">Destination guidance</div>
                <p className="mt-1 leading-6 text-slate-300">Helpful recommendations for mountain, city, and cultural itineraries.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail size={18} className="mt-1 text-emerald-300" />
              <div>
                <div className="font-semibold text-white">Fast responses</div>
                <p className="mt-1 leading-6 text-slate-300">Questions about your trip can be answered quickly and clearly, including WhatsApp follow-up.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle size={18} className="mt-1 text-emerald-300" />
              <div>
                <div className="font-semibold text-white">WhatsApp support</div>
                <p className="mt-1 leading-6 text-slate-300">Tap the button below to start a WhatsApp conversation with your trip details prefilled.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          {submitted ? (
            <div className="glass-panel rounded-[1.75rem] p-10 text-center">
              <CheckCircle size={48} className="mx-auto text-emerald-300" />
              <h2 className="mt-4 text-2xl font-bold text-white">Message sent</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Your message is ready for WhatsApp follow-up. Open the chat to continue the conversation and get a fast response.
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                <MessageCircle size={18} /> Open WhatsApp
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-panel rounded-[1.75rem] p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-100">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-100">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-slate-100">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    placeholder="Tell us where you'd like to go..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-slate-950 transition hover:bg-emerald-400"
                >
                  <Send size={18} /> Send message
                </button>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-300/40 px-4 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-500/10"
                >
                  <MessageCircle size={18} /> Reply on WhatsApp
                </button>
              </div>
            </form>
          )}
        </AnimatedSection>
      </div>
    </div>
  );
}
