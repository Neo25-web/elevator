import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { technology } from "@/lib/site";

export const metadata = {
  title: "Technology & Machines | Classic Elevators Pakistan",
  description:
    "Learn about the geared and gearless machines, VVVF controls, safety systems and components used in Classic Elevators installations.",
};

export default function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Engineering"
          title="Technology & Machines"
          subtitle={technology.intro}
        />
        <section className="py-24">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {technology.items.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 100}
                  className="rounded-xl border border-white/[0.06] p-8 text-center transition-all hover:-translate-y-1 hover:border-gold/25 hover:bg-navy-mid"
                >
                  <div className="mb-4 text-[2.2rem]">{item.icon}</div>
                  <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                  <p className="text-[0.85rem] text-slate-400">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        <section className="border-t border-gold/10 bg-navy-light py-16">
          <Reveal className="mx-auto w-[92%] max-w-[1140px] text-center">
            <h2 className="mb-4 font-serif text-2xl">Ready to Discuss Your Project?</h2>
            <p className="mx-auto mb-8 max-w-[520px] text-slate-400">
              Our engineers will help you choose the right machine and control system
              for your building.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
            >
              Contact Us
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
