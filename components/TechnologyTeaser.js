import Link from "next/link";
import { technology } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function TechnologyTeaser() {
  return (
    <section className="py-24">
      <div className="mx-auto w-[92%] max-w-[1140px]">
        <SectionHeader
          label="Engineering"
          title="Technology & Machines"
          subtitle={technology.intro}
        />
        <Reveal className="text-center">
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
          >
            Explore Our Technology →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
