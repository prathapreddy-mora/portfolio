import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Internship } from "@/sections/Internship";
import { Achievements } from "@/sections/Achievements";
import { Certifications } from "@/sections/Certifications";
import { Blog } from "@/sections/Blog";
import { Contact } from "@/sections/Contact";

export function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Internship />
      <Achievements />
      <Certifications />
      <Blog />
      <Contact />
    </main>
  );
}
