import { Code, Globe, Users, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <AnimatedSection className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">About this project</p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">A modern travel story for Pakistan</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          Built as part of an AI-focused web development journey, this site brings together polished visuals, responsive layouts,
          and a conversational travel guide to showcase Pakistan in a fresh light.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="glass-panel mt-10 rounded-[1.75rem] p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white">Our mission</h2>
        <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
          To inspire travelers by highlighting Pakistan&apos;s mountains, cities, heritage, and hidden gems through a fast,
          immersive experience that feels as bold as the destinations themselves.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15} className="mt-10">
        <h2 className="text-2xl font-bold text-white">Technologies used</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { icon: Code, name: "Next.js 16", desc: "React framework" },
            { icon: Code, name: "TypeScript", desc: "Typed UI" },
            { icon: Zap, name: "Tailwind CSS", desc: "Modern styling" },
            { icon: Globe, name: "Framer Motion", desc: "Subtle animations" },
          ].map(({ icon: Icon, name, desc }) => (
            <div key={name} className="glass-panel rounded-[1.5rem] p-5 text-center">
              <Icon size={28} className="mx-auto text-emerald-300" />
              <div className="mt-3 text-white font-semibold">{name}</div>
              <div className="mt-1 text-sm text-slate-300">{desc}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="mt-10">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Users size={22} className="text-emerald-300" /> Team
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            { name: "Abdul Muqsit Chohan", role: "Frontend Developer", contribution: "Landing page, navigation, visual system and chatbot experience" },
            { name: "Syed Aun Ali", role: "Content & Integration", contribution: "Destination data, detail pages" },
          ].map((member) => (
            <div key={member.name} className="glass-panel rounded-[1.5rem] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-slate-950">
                {member.name[0]}
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-emerald-200">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{member.contribution}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
