import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/utils/cn";

type Props = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  download?: boolean;
  external?: boolean;
};

export function MagneticButton({ children, href, onClick, className, download, external }: Props) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic();

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-tight transition-colors",
    className,
  );

  const inner = (
    <motion.span style={{ x, y }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="inline-flex">
        <a
          href={href}
          className={classes}
          onClick={onClick}
          download={download}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className="inline-flex">
      <button type="button" className={classes} onClick={onClick}>
        {inner}
      </button>
    </div>
  );
}
