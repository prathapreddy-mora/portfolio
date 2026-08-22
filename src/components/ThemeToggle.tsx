import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/50 dark:hover:bg-white/10"
    >
      <span className="relative h-4 w-4">
        <Sun className={`absolute inset-0 h-4 w-4 text-amber-500 transition-all ${theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100"}`} />
        <Moon className={`absolute inset-0 h-4 w-4 text-sky-200 transition-all ${theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
      </span>
    </button>
  );
}
