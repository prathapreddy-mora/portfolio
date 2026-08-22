import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Coffee,
  Database,
  FileCode2,
  GitBranch,
  Github,
  Globe,
  Layout,
  Leaf,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/data/content";

const icons: Record<string, LucideIcon> = {
  Java: Coffee,
  Python: Terminal,
  JavaScript: Braces,
  HTML: Globe,
  CSS: Layout,
  React: Code2,
  MySQL: Database,
  MongoDB: Leaf,
  Git: GitBranch,
  GitHub: Github,
  "VS Code": FileCode2,
};

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Stack" title="Skills" description="A focused toolkit for software engineering and full stack work." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, i) => {
          const Icon = icons[skill.name] ?? Code2;
          return (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-5"
              data-cursor="hover"
            >
              <Icon className="mb-4 h-5 w-5 text-sky-600 dark:text-sky-300" />
              <p className="text-sm font-semibold">{skill.name}</p>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-sky-100 dark:bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-sky-500"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
