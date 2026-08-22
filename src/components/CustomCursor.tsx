import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const glowX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });
  const glowY = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 400, damping: 28 });
  const dotY = useSpring(y, { stiffness: 400, damping: 28 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("a, button, input, textarea, [data-cursor='hover']")));
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none fixed top-0 left-0 z-[80] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <div
          className={`rounded-full bg-sky-400/25 blur-2xl transition-all duration-300 dark:bg-sky-300/20 ${
            hovering ? "h-28 w-28" : "h-16 w-16"
          }`}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed top-0 left-0 z-[81] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      >
        <div
          className={`rounded-full border border-sky-500/80 bg-white/80 shadow-[0_0_20px_rgba(56,189,248,0.55)] transition-all duration-200 dark:bg-sky-200/80 ${
            hovering ? "h-10 w-10 bg-transparent" : "h-2.5 w-2.5"
          }`}
        />
      </motion.div>
    </>
  );
}
