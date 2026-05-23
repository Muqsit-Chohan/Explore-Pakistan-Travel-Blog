"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, MountainSnow, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { destinations } from "@/lib/data";

const stats = [
  { icon: MountainSnow, value: "5", label: "of the world's 14 eight-thousanders" },
  { icon: Star, value: "6+", label: "UNESCO World Heritage sites" },
  { icon: Users, value: "220M+", label: "people call it home" },
];

const highlights = [
  {
    title: "Mountain escapes",
    description: "Explore alpine villages, lakes, and dramatic ridgelines from Hunza to Skardu.",
    icon: MountainSnow,
  },
  {
    title: "Cultural gems",
    description: "Discover vibrant cities, Mughal heritage, and the warmth of local hospitality.",
    icon: Compass,
  },
  {
    title: "Seamless planning",
    description: "Browse curated destinations and let the chat guide help you plan your next route.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.2),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_20%)]" />
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:pb-20 lg:pt-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-100">
                <Sparkles size={14} /> Discover Pakistan&apos;s Timeless Charm
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Journey beyond the map into
                <span className="block text-emerald-300">Pakistan’s soul</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
                From the Karakoram peaks to the Mughal streets of Lahore, this travel experience blends stunning visuals,
                responsive design, and playful motion to help every destination feel unforgettable.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/destinations"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Explore Destinations <ArrowRight size={18} />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50"
                >
                  Why this project
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="glass-panel rounded-[1.25rem] px-4 py-4 text-center">
                    <Icon size={22} className="mx-auto text-emerald-300" />
                    <div className="mt-3 text-2xl font-bold text-white">{value}</div>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="glass-panel rounded-[2rem] p-3"
            >
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src="https://images.unsplash.com/photo-1612128952123-88ed13410495?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Pakistan landscape"
                  className="h-[420px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-sm text-emerald-200">Most loved journey</p>
                  <h2 className="mt-2 text-2xl font-bold text-white">Hunza Valley</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-100/90">
                    Alpine serenity, apricot orchards, and unforgettable mountain views await.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map(({ title, description, icon: Icon }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-[1.5rem] p-5"
              >
                <Icon size={24} className="text-emerald-300" />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Featured destinations</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let the landscape lead the way</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Handpicked spots that showcase Pakistan&apos;s mountains, culture, and scenic diversity.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {destinations.slice(0, 6).map((dest, index) => (
              <Link key={dest.id} href={`/destinations/${dest.id}`} className="block">
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8 }}
                  className="glass-panel h-full overflow-hidden rounded-[1.5rem]"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={dest.image} alt={dest.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950">
                      {dest.region}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{dest.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{dest.shortDescription}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-200">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.article>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 px-6 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-500 hover:text-slate-950"
            >
              View all destinations <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-[1.75rem] p-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Why visit Pakistan?</p>
            <h2 className="mt-3 text-3xl font-bold text-white">A destination that balances adventure, culture, and calm</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Pakistan brings together 7,000m summits, UNESCO heritage sites, desert coastlines, and centuries of stories in one remarkable landscape.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Explore it with a layout that feels clean on every screen, subtle motion on every interaction, and a guide that helps you discover what matters most.
            </p>
            <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-emerald-200 font-semibold">
              Read about the project <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-[1.75rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1633100291356-19e4e0dcb98f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Pakistan scenic view"
              className="h-full min-h-[300px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to explore?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            Browse all destinations, save your favorite routes, and start planning your next adventure today.
          </p>
          <Link
            href="/destinations"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 font-bold text-slate-950 transition hover:bg-emerald-400"
          >
            Start exploring <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
