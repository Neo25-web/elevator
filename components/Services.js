import { services } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Services() {
  return (
    <section id="services" className="bg-navy-light py-24">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <SectionHeader
          label="What We Offer"
          title="Our Elevator Services"
          subtitle="Reliable vertical transportation tailored to your building's needs."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 100}
              className="group relative overflow-hidden rounded-xl border border-gold/10 bg-navy-mid p-10 transition-all hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 text-3xl">
                {s.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{s.title}</h3>
              <p className="mb-6 text-[0.95rem] text-slate-400">{s.desc}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all hover:gap-3"
              >
                Learn More →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
