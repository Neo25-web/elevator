"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/site";

const filters = ["All", "Hospital", "Commercial", "Industrial"];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Our Work"
          title="Recent Projects"
          subtitle="A selection of passenger, panoramic and freight elevator installations across Lahore."
        />
        <section className="py-24">
          <div className="mx-auto w-[92%] max-w-[1140px]">
            <Reveal className="mb-10 flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActive(filter)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    active === filter
                      ? "bg-gold text-navy"
                      : "border border-gold/40 text-gold hover:border-gold"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} delay={i * 100} />
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-slate-400">No projects in this category yet.</p>
            )}
          </div>
        </section>
        <section className="border-t border-gold/10 bg-navy-light py-16">
          <Reveal className="mx-auto w-[92%] max-w-[1140px] text-center">
            <h2 className="mb-4 font-serif text-2xl">Start Your Next Project</h2>
            <p className="mx-auto mb-8 max-w-[520px] text-slate-400">
              From hospitals to factories, we deliver reliable elevator solutions
              tailored to your site.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-gold to-gold-dark px-7 py-3.5 font-semibold text-navy transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)]"
            >
              Get in Touch
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
