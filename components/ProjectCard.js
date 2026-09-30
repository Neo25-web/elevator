import Image from "next/image";
import Reveal from "./Reveal";
import { ytThumb } from "@/lib/site";

export default function ProjectCard({ project, delay = 0 }) {
  const image = project.image ?? ytThumb(project.videoId);

  return (
    <Reveal
      delay={delay}
      className="group overflow-hidden rounded-xl border border-gold/10 bg-navy-mid transition-all hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <a
        href={`https://www.youtube.com/shorts/${project.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep">
          <Image
            src={image}
            alt={`${project.type} lift at ${project.title}, ${project.location}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-full bg-gold px-3 py-1 text-[0.7rem] font-semibold text-navy">
            {project.type}
          </span>
          <span className="absolute inset-0 grid place-items-center bg-navy/20 transition-colors group-hover:bg-navy/40">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-black/60 text-xl text-white transition-transform group-hover:scale-110">
              ▶
            </span>
          </span>
        </div>
        <div className="p-6">
          <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
          <p className="mb-3 text-[0.9rem] text-slate-400">
            📍 {project.location} · {project.product}
          </p>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-3">
            Watch Installation Video →
          </span>
        </div>
      </a>
    </Reveal>
  );
}
