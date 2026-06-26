import { stats } from "@/lib/site";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal>
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.12em] text-gold">
              About Us
            </span>
            <h2 className="mb-5 font-serif text-[clamp(1.8rem,3.5vw,2.4rem)]">
              Trusted Elevator Experts in Lahore
            </h2>
            <p className="mb-4 text-slate-400">
              Classic Elevators Pakistan has been delivering world-class vertical
              transportation solutions since our founding. We combine
              international engineering standards with local expertise to serve
              clients across Lahore and beyond.
            </p>
            <p className="mb-4 text-slate-400">
              From design and installation to ongoing maintenance, our certified
              technicians ensure every project meets the highest safety and
              quality standards.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gold/10 bg-navy-light p-6 text-center"
                >
                  <Counter target={s.target} />
                  <div className="text-xs uppercase tracking-wider text-slate-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="aspect-[4/3] overflow-hidden rounded-xl border border-gold/20 bg-cover bg-center"
            as="div"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, rgba(201,162,39,0.1), transparent), url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800')",
              }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
