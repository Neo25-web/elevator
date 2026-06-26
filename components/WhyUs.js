import { features } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy-light py-24">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <SectionHeader
          label="Why Classic Elevators"
          title="Why Choose Us"
          subtitle="We go above and beyond to deliver excellence in every project."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 100}
              className="rounded-xl border border-white/[0.06] p-8 text-center transition-all hover:-translate-y-1 hover:border-gold/25 hover:bg-navy-mid"
            >
              <div className="mb-4 text-[2.2rem]">{f.icon}</div>
              <h3 className="mb-2 text-base font-bold">{f.title}</h3>
              <p className="text-[0.85rem] text-slate-400">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
