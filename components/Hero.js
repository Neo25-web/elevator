import Link from "next/link";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.65) 50%, rgba(10,22,40,0.85) 100%), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920')",
      }}
    >
      <div className="animate-fade-up relative z-[2] mx-auto w-[92%] max-w-[1140px]">
        <div className="max-w-[700px]">
          <span className="mb-6 inline-block rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-light">
            {site.location}
          </span>
          <h1 className="mb-5 font-serif text-[clamp(2.5rem,6vw,4.2rem)] leading-[1.15]">
            Rising Above with <span className="text-gold">Classic Elevators</span>
          </h1>
          <p className="mb-10 max-w-[540px] text-lg text-slate-300">
            Premium passenger and cargo elevator solutions — installation,
            maintenance, and modernization for residential and commercial
            buildings across Pakistan.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 font-semibold text-white transition-all hover:border-gold hover:text-gold"
            >
              Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
