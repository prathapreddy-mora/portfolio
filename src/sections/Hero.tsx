import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, FolderGit2, Github, Linkedin } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { heroIntro, heroStats, profile, typingRoles } from "@/data/content";

export function Hero() {
  return (
    <section id="hero" className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 pt-28 pb-24 md:grid-cols-[1.05fr_0.95fr] md:pt-24">
      <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-slate-500 dark:text-slate-400"
        >
          Hello 👋
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="mt-6 text-lg text-slate-500 dark:text-slate-400"
        >
          I'm
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.12, duration: 0.7 }}
          className="font-display mt-1 max-w-[11ch] text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl dark:text-white"
        >
          {profile.name}
        </motion.h1>
        <p className="mt-8 min-h-[2rem] text-lg font-medium text-sky-700 md:text-xl dark:text-sky-300">
          <Typewriter words={typingRoles} />
        </p>
        <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-600 dark:text-slate-300">{heroIntro}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href={profile.resume} download className="bg-ink text-white dark:bg-white dark:text-ink">
            <Download className="h-4 w-4" /> Resume
          </MagneticButton>
          <MagneticButton href="#projects" className="bg-sky-500 text-white hover:bg-sky-400">
            <FolderGit2 className="h-4 w-4" /> Projects
          </MagneticButton>
          <MagneticButton href={profile.github} external className="glass">
            <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
          </MagneticButton>
          <MagneticButton href={profile.linkedin} external className="glass">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </MagneticButton>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[420px]">
        <div className="absolute inset-[-8%] rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/10" />
        <div className="relative mx-auto aspect-square w-[78%]">
          <div className="absolute inset-[-10px] animate-[spin_22s_linear_infinite] rounded-full bg-[conic-gradient(from_120deg,#7dd3fc,transparent_30%,#38bdf8,transparent_62%,#93c5fd)] opacity-80" />
          <div className="absolute inset-0 overflow-hidden rounded-full border border-white/70 bg-white/40 shadow-[0_30px_80px_rgba(56,189,248,0.18)] dark:border-white/10">
            <img
              src={profile.photo}
              alt={`${profile.name} profile portrait`}
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {heroStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 + i * 0.08 }}
            className={`glass absolute rounded-2xl px-4 py-3 ${
              i === 0 ? "top-8 -left-2" : i === 1 ? "top-1/2 -right-2" : "bottom-10 left-4"
            }`}
          >
            <p className="text-lg font-semibold tracking-tight">{stat.value}</p>
            <p className="text-[11px] tracking-[0.16em] text-slate-500 uppercase">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const tick = window.setTimeout(
      () => {
        const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
        setText(next);
        if (!deleting && next === word) {
          window.setTimeout(() => setDeleting(true), 1400);
        } else if (deleting && next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      },
      deleting ? 32 : 70,
    );
    return () => window.clearTimeout(tick);
  }, [deleting, index, text, words]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[1.5px] translate-y-[2px] animate-pulse bg-sky-500" />
    </span>
  );
}
