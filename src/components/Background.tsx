import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Background() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;

    root.current.querySelectorAll(".cloud").forEach((cloud, i) => {
      gsap.to(cloud, {
        x: i % 2 === 0 ? 56 : -64,
        y: i % 2 === 0 ? -16 : 20,
        duration: 18 + i * 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

    root.current.querySelectorAll(".orb").forEach((orb, i) => {
      gsap.to(orb, {
        y: i % 2 === 0 ? -24 : 28,
        x: i % 2 === 0 ? 18 : -14,
        duration: 10 + i * 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={root} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_12%_8%,rgba(186,230,253,0.7),transparent_58%),radial-gradient(900px_circle_at_88%_12%,rgba(255,255,255,0.9),transparent_48%),linear-gradient(180deg,#ffffff_0%,#eaf6ff_42%,#d9ecff_100%)] dark:bg-[radial-gradient(900px_circle_at_18%_8%,rgba(30,64,175,0.28),transparent_52%),radial-gradient(700px_circle_at_82%_0%,rgba(56,189,248,0.1),transparent_46%),linear-gradient(180deg,#070b14,#0a1222_55%,#070b14)]" />
      <div className="light-rays absolute inset-0 opacity-60 dark:opacity-15" />
      <div className="cloud absolute top-10 left-[-12%] h-44 w-[46%] rounded-[100%] bg-white/80 blur-3xl dark:bg-white/5" />
      <div className="cloud absolute top-36 right-[-14%] h-52 w-[42%] rounded-[100%] bg-white/70 blur-3xl dark:bg-sky-200/5" />
      <div className="cloud absolute top-[52%] left-[18%] h-32 w-[34%] rounded-[100%] bg-sky-100/80 blur-3xl dark:bg-indigo-300/5" />
      <div className="orb glass-circle absolute top-[18%] left-[8%] h-24 w-24" />
      <div className="orb glass-circle absolute top-[30%] right-[12%] h-16 w-16" />
      <div className="orb glass-circle absolute bottom-[18%] left-[28%] h-20 w-20" />
      <div className="orb glass-circle absolute right-[22%] bottom-[28%] h-12 w-12" />
      <Stars />
      <Particles />
    </div>
  );
}

function Stars() {
  const dots = Array.from({ length: 42 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 19) % 100}%`,
    size: 1 + (i % 3),
    delay: `${i * 0.12}s`,
  }));

  return (
    <div className="absolute inset-0 hidden dark:block">
      {dots.map((dot, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/80"
          style={{
            left: dot.left,
            top: dot.top,
            width: dot.size,
            height: dot.size,
            animation: `twinkle 3.6s ${dot.delay} infinite`,
          }}
        />
      ))}
      <style>{`@keyframes twinkle { 0%,100%{opacity:.2} 50%{opacity:1} }`}</style>
    </div>
  );
}

function Particles() {
  const items = Array.from({ length: 16 }, (_, i) => i);
  return (
    <div className="absolute inset-0">
      {items.map((i) => (
        <span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-sky-400/40 dark:bg-sky-200/35"
          style={{
            left: `${(i * 53) % 100}%`,
            top: `${(i * 29) % 100}%`,
            animation: `floaty ${10 + (i % 5)}s ${i * 0.4}s infinite alternate ease-in-out`,
          }}
        />
      ))}
      <style>{`
        @keyframes floaty { from { transform: translateY(0) } to { transform: translateY(-24px) } }
        .light-rays {
          background:
            linear-gradient(112deg, transparent 42%, rgba(255,255,255,.45) 50%, transparent 58%),
            linear-gradient(72deg, transparent 34%, rgba(186,230,253,.22) 48%, transparent 62%);
        }
      `}</style>
    </div>
  );
}
