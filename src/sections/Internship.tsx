import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { internships } from "@/data/content";

export function Internship() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Internship" />
      <div className="relative max-w-2xl pl-8">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-sky-200 dark:bg-sky-500/20" />
        {internships.map((item) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute top-7 -left-8 h-3.5 w-3.5 rounded-full bg-ink dark:bg-white" />
            <div className="glass rounded-3xl p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                  {item.duration}
                </span>
                <span className="text-xs text-slate-500">{item.period}</span>
              </div>
              <h3 className="font-display mt-4 text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.org}</p>
              <p className="text-sm font-medium">{item.company}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
