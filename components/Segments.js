import Link from "next/link";
import Reveal from "./Reveal";

const segments = [
  {
    icon: "🏥",
    title: "Hospitals",
    desc: "Stretcher-ready passenger lifts for healthcare facilities.",
    href: "/products",
  },
  {
    icon: "🏢",
    title: "Commercial",
    desc: "Passenger and panoramic lifts for malls, hotels and offices.",
    href: "/products",
  },
  {
    icon: "🏭",
    title: "Industrial",
    desc: "Heavy-duty freight and loader lifts for factories and warehouses.",
    href: "/products",
  },
];

export default function Segments() {
  return (
    <section className="border-y border-gold/10 bg-navy-light py-16">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <div className="grid gap-6 md:grid-cols-3">
          {segments.map((seg, i) => (
            <Reveal key={seg.title} delay={i * 100}>
              <Link
                href={seg.href}
                className="group flex items-start gap-4 rounded-xl border border-white/[0.06] p-6 transition-all hover:-translate-y-1 hover:border-gold/25 hover:bg-navy-mid"
              >
                <span className="text-3xl">{seg.icon}</span>
                <div>
                  <h3 className="mb-1 font-bold transition-colors group-hover:text-gold">
                    {seg.title}
                  </h3>
                  <p className="text-[0.9rem] text-slate-400">{seg.desc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
