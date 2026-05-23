import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Navigation, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { destinations, getDestinationById } from "@/lib/data";

export async function generateStaticParams() {
  return destinations.map((destination) => ({ id: destination.id }));
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const destination = getDestinationById(id);

  if (!destination) {
    notFound();
  }

  const related = destinations.filter((item) => item.id !== destination.id).slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <AnimatedSection>
        <Link
          href="/destinations"
          className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white"
        >
          <ArrowLeft size={18} /> Back to Destinations
        </Link>
      </AnimatedSection>

      <AnimatedSection delay={0.06} className="mt-6 overflow-hidden rounded-[1.75rem]">
        <img src={destination.image} alt={destination.title} className="h-72 w-full object-cover md:h-96" />
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-6">
        <span className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-950">
          {destination.region}
        </span>
        <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">{destination.title}</h1>
        <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">{destination.description}</p>
      </AnimatedSection>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <AnimatedSection delay={0.15} className="glass-panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-2 text-emerald-200 font-semibold">
            <Clock size={18} /> Best Time to Visit
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-200">{destination.bestTime}</p>
        </AnimatedSection>
        <AnimatedSection delay={0.18} className="glass-panel rounded-[1.5rem] p-5">
          <div className="flex items-center gap-2 text-emerald-200 font-semibold">
            <Navigation size={18} /> How to Reach
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-200">{destination.howToReach}</p>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.2} className="mt-10">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
          <Star size={20} className="text-emerald-300" /> Top Highlights
        </h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {destination.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-[1.25rem] border border-white/10 bg-slate-950/70 px-5 py-3 text-sm text-slate-200"
            >
              <span className="mr-2 text-emerald-300">✦</span> {highlight}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection delay={0.24} className="mt-12">
        <h2 className="text-2xl font-bold text-white">Other destinations</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.id}
              href={`/destinations/${item.id}`}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 transition hover:border-emerald-300/60"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="text-white font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-emerald-200">{item.region}</div>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
