import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2">
        <a href="#hero" className="flex items-center gap-2 pl-1 text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[11px] text-white dark:bg-white dark:text-ink">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">Prathap</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-slate-600 transition hover:bg-white/50 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>
      {open ? (
        <div className="glass mx-auto mt-2 max-w-5xl rounded-3xl p-3 md:hidden">
          <div className="grid">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-3 py-2.5 text-sm"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
