import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { education } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Academics" title="Education" />
      <div className="relative max-w-xl pl-8">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-sky-400 via-sky-200 to-transparent" />
        {education.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="relative pb-4"
          >
            <span className="absolute top-6 -left-8 h-3.5 w-3.5 rounded-full border-2 border-white bg-sky-500 shadow-[0_0_0_6px_rgba(56,189,248,0.18)]" />
            <div className="glass rounded-3xl p-8">
              <p className="text-[11px] tracking-[0.22em] text-sky-600 uppercase">{item.period}</p>
              <h3 className="font-display mt-3 text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.institution}</p>
              <p className="mt-4 text-sm font-semibold">{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
