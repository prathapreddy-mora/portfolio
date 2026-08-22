import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/content";

export function Loader() {
  const [visible, setVisible] = useState(true);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const done = window.setTimeout(() => setVisible(false), reduce ? 200 : 1600);
    return () => window.clearTimeout(done);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#f7fbff] dark:bg-[#070b14]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.86, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-white/70 text-2xl font-semibold tracking-tight shadow-lg shadow-sky-200/50 dark:bg-white/10"
            >
              {profile.initials}
            </motion.div>
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-sky-100 dark:bg-white/10">
              <motion.div
                className="h-full bg-sky-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: reduce ? 0.1 : 1.25, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <p className="text-xs tracking-[0.28em] text-slate-500 uppercase">Loading</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
