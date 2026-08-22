import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/data/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="About" title={about.title} />
      <div className="grid items-start gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-xl space-y-6 text-[17px] leading-8 text-slate-600 dark:text-slate-300">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={p}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {about.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="glass flex items-center gap-4 rounded-2xl px-5 py-4"
              data-cursor="hover"
            >
              <span className="text-xl">{card.emoji}</span>
              <span>
                <span className="block font-semibold">{card.title}</span>
                <span className="text-xs text-slate-500">{card.detail}</span>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
