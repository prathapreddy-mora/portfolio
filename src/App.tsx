import { lazy, Suspense } from "react";
import { Background } from "@/components/Background";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useLenis } from "@/hooks/useLenis";
import { ThemeProvider } from "@/hooks/useTheme";
import { Home } from "@/pages/Home";

const Chatbot = lazy(() => import("@/components/Chatbot").then((m) => ({ default: m.Chatbot })));

export default function App() {
  useLenis();

  return (
    <ThemeProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Loader />
      <Background />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Home />
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </ThemeProvider>
  );
}
