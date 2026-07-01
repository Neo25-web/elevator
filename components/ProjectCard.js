import Image from "next/image";
import Reveal from "./Reveal";

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="group overflow-hidden rounded-xl border border-gold/10 bg-navy-mid transition-all hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-semibold text-navy">
          {project.type}
        </span>
      </div>
      <div className="p-6">
        <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
        <p className="text-[0.9rem] text-slate-400">{project.product}</p>
      </div>
    </Reveal>
  );
}
