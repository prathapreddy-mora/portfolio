import { useRef, type MouseEvent } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Selected work" title="Projects" />
      <div className="grid gap-6 md:grid-cols-3 [perspective:1200px]">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const card = useRef<HTMLElement>(null);

  const tilt = (e: MouseEvent<HTMLElement>) => {
    const el = card.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.transform = `rotateX(${(0.5 - y) * 10}deg) rotateY(${(x - 0.5) * 12}deg)`;
  };

  return (
    <article
      ref={card}
      onMouseMove={tilt}
      onMouseLeave={() => {
        if (card.current) card.current.style.transform = "rotateX(0) rotateY(0)";
      }}
      className="group relative spin-border overflow-hidden rounded-3xl border border-white/40 bg-white/30 p-[1px] shadow-[0_0_0_1px_rgba(59,130,246,0.08)] transition duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.28)] dark:border-white/10 dark:bg-white/5"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[conic-gradient(from_var(--angle),#38bdf8,#6366f1,#38bdf8)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-[22px] bg-white/80 dark:bg-[#081224]/90">
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-sky-500/10 px-2.5 py-1 text-[11px] font-semibold text-sky-700 dark:text-sky-300">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white dark:bg-white dark:text-ink"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-300 px-3 py-1.5 text-xs font-semibold"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
