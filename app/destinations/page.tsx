import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { destinations } from "@/lib/data";

const quickFilters = ["Mountain escapes", "City journeys", "Coastal getaways", "Culture & heritage"];

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <AnimatedSection className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">All destinations</p>
        <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Explore Pakistan&apos;s most inspiring places</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          From dramatic peaks to vibrant streets, discover a curated set of destinations built for a modern, responsive travel showcase.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap justify-center gap-3">
        {quickFilters.map((filter) => (
          <span
            key={filter}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
          >
            {filter}
          </span>
        ))}
      </AnimatedSection>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {destinations.map((dest, index) => (
          <AnimatedSection key={dest.id} delay={0.05 * index} className="h-full">
            <Link
              href={`/destinations/${dest.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/65 backdrop-blur transition duration-300 hover:border-emerald-300/60"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950">
                  {dest.region}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-emerald-200">
                  <Compass size={16} />
                  <span className="text-xs uppercase tracking-[0.2em]">Destination</span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-white">{dest.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">{dest.shortDescription}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200">
                  Explore <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
