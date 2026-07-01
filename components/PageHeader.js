export default function PageHeader({ label, title, subtitle }) {
  return (
    <section className="bg-navy-deep pt-32 pb-16 text-center">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <span className="mb-3 block text-xs font-bold uppercase tracking-[0.12em] text-gold">
          {label}
        </span>
        <h1 className="mb-4 font-serif text-[clamp(2rem,5vw,3rem)]">{title}</h1>
        {subtitle && (
          <p className="mx-auto max-w-[600px] text-slate-400">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
