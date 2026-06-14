import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { CustomCursor } from "@/components/portfolio/CustomCursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nida Tariq — Creative Developer Portfolio" },
      { name: "description", content: "Creative frontend & full-stack developer building modern, responsive and interactive web experiences." },
      { property: "og:title", content: "Nida Tariq — Creative Developer" },
      { property: "og:description", content: "Modern, responsive and interactive web experiences crafted with care." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-white/5 px-6 py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Nida Tariq. Designed & built with care.
      </footer>
    </main>
  );
}
