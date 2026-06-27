import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { SectionTitle } from "./About";
import image1 from "@/assets/image1.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import image2 from "@/assets/image2.png";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import { MouseEvent } from "react";

type Project = {
  img: string;
  title: string;
  desc: string;
  tags: string[];
  category: string;
  live?: string;
  repo?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    img: image1,
    title: "Financial Dashboard",
    desc: "Interactive finance dashboard with KPI cards, projected revenue, EBITDA and EPS charts — built for fast insight.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Charts"],
    category: "Full Stack",
    live: "https://fianacial-dashboard.vercel.app/",
    repo: "https://github.com/nidatariq128/hackathon-0",
    featured: true,
  },
  {
    img: image5,
    title: "TaskFlow — AI Task Manager",
    desc: "Welcome + auth screen for an AI-powered task manager with a clean orange brand and feature highlights.",
    tags: ["Next.js", "AI", "Tailwind"],
    category: "AI / Apps",
    live: "https://frontend-theta-five-67.vercel.app/",
  },
  {
    img: image2,
    title: "Nike Air Max — E-commerce Store",
    desc: "Pixel-clean Nike-style product showcase with hero, product detail and complete shop flow.",
    tags: ["Next.js", "Tailwind", "Sanity"],
    category: "Full Stack",
    live: "https://hackthon-project-five.vercel.app/",
    repo: "https://github.com/nidatariq128/Hackathon-3",
    featured: true,
  },
  {
    img: image3,
    title: "Next Watch — Smart Watch Store",
    desc: "Modern landing page for a smart watch brand with a bold hero, product highlights and clean navigation.",
    tags: ["Next.js", "Tailwind"],
    category: "Frontend",
    live: "https://next-watch-azure.vercel.app/",
  },
  {
    img: image6,
    title: "Task Manager — Authentication & Dashboard",
    desc: "Complete task management application with secure sign-in flow and polished gradient brand interface.",
    tags: ["Next.js", "Tailwind", "Auth"],
    category: "Full Stack",
    live: "https://hackathon2-phase-2-plum.vercel.app/",
    repo: "https://github.com/nidatariq128/hackathon2_phase_2",
    featured: true,
  },
  {
    img: image4,
    title: "Explore Northern Pakistan — Blog",
    desc: "A travel blog showcasing Hunza, Skardu, Nanga Parbat and more — with rich cards, detail pages and a warm theme.",
    tags: ["Next.js", "Tailwind", "Blog"],
    category: "Full Stack",
    live: "https://blog-app-zeta-snowy.vercel.app/",
  },
  {
    img: image7,
    title: "Portfolio — Custom CSS",
    desc: "An earlier personal portfolio crafted entirely with hand-written CSS — gold accents on a clean dark canvas.",
    tags: ["HTML", "CSS", "JS"],
    category: "Frontend",
    live: "https://portfolio-customcss-178w.vercel.app/",
    featured: true,
  },
  {
    img: image8,
    title: "Static Resume Builder",
    desc: "A printable resume site with sidebar profile, skills toggle and a clean editorial layout.",
    tags: ["HTML", "CSS", "TypeScript"],
    category: "Frontend",
    live: "https://hackathon-milestones4-one.vercel.app/",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      key={p.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: i * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-[28px] border border-white/8 bg-card transition-all hover:border-lime/40 hover:shadow-[0_30px_80px_-20px_rgba(251,146,60,0.35)] ${
        p.featured ? "md:col-span-4 md:row-span-2" : "md:col-span-2 md:row-span-2"
      }`}
    >
      <img
        src={p.img}
        alt={p.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
        style={{ transform: "translateZ(20px)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
      <div className="relative flex h-full flex-col justify-between p-6" style={{ transform: "translateZ(50px)" }}>
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs text-lime">
            {p.category}
          </span>
          <div className="flex items-center gap-2">
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} code`}
                className="grid h-9 w-9 place-items-center rounded-full glass text-foreground/80 hover:text-lime hover:border-lime/40 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${p.title} live`}
                className="grid h-9 w-9 place-items-center rounded-full bg-lime text-black hover:scale-110 transition-transform"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold sm:text-3xl">{p.title}</h3>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          {(p.live || p.repo) && (
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-muted-foreground">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-lime">
                  <ExternalLink className="h-3 w-3" /> Live demo
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-lime">
                  <Github className="h-3 w-3" /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionTitle eyebrow="04 — Projects" title="Selected work that I'm proud of" />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-6 md:auto-rows-[280px]" style={{ perspective: "1000px" }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/nidatariq128"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold hover:border-lime/40 hover:text-lime transition-colors"
        >
          <Github className="h-4 w-4" /> See more on GitHub
        </a>
      </div>
    </section>
  );
}
