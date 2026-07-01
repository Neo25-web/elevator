import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function ProductCard({ product, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="group relative overflow-hidden rounded-xl border border-gold/10 bg-navy-mid transition-all hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <span className="absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-300 group-hover:scale-x-100" />
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.hero}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-8">
          <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-2xl">
            {product.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
          <p className="mb-4 text-[0.95rem] text-slate-400">{product.short}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {product.segments.map((seg) => (
              <span
                key={seg}
                className="rounded-full border border-gold/40 px-2.5 py-0.5 text-[0.7rem] font-medium text-gold"
              >
                {seg}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-3">
            View Details →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
