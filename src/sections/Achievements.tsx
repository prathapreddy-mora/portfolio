import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { achievements } from "@/data/content";

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Highlights" title="Achievements" />
      <div className="grid gap-4 md:grid-cols-3">
        {achievements.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-3xl p-8"
            data-cursor="hover"
          >
            <div className="text-2xl">{item.emoji}</div>
            <h3 className="font-display mt-5 text-2xl">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
