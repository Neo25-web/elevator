import Reveal from "./Reveal";

export default function SectionHeader({ label, title, subtitle }) {
  return (
    <Reveal className="mb-14 text-center">
      <span className="mb-3 block text-xs font-bold uppercase tracking-[0.12em] text-gold">
        {label}
      </span>
      <h2 className="mb-4 font-serif text-[clamp(1.8rem,4vw,2.6rem)]">{title}</h2>
      {subtitle && (
        <p className="mx-auto max-w-[560px] text-slate-400">{subtitle}</p>
      )}
    </Reveal>
  );
}
