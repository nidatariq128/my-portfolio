import { motion } from "framer-motion";
import { Code2, Database, Figma, Layers, Server, Sparkles, Wrench } from "lucide-react";
import { SectionTitle } from "./About";

const groups = [
  { Icon: Code2, title: "Frontend", level: 95, items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "Bootstrap"] },
  { Icon: Sparkles, title: "AI / Agents", level: 85, items: ["Python", "OpenAI Agents SDK", "Chainlit", "Prompt Engineering", "LLM Apps"] },
  { Icon: Server, title: "Backend", level: 75, items: ["Node.js", "Express.js", "REST APIs", "Auth", "JWT"] },
  { Icon: Database, title: "Database", level: 72, items: ["MongoDB", "Firebase", "Sanity", "MySQL"] },
  { Icon: Figma, title: "UI / UX", level: 88, items: ["Figma", "Canva", "Wireframing", "Responsive Design"] },
  { Icon: Wrench, title: "Tools", level: 90, items: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify"] },
  { Icon: Layers, title: "Core Dev", level: 92, items: ["API Integration", "State Mgmt", "Component Arch", "Performance", "SEO"] },
];

function Ring({ value }: { value: number }) {
  const r = 28;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg className="h-full w-full -rotate-90">
        <circle cx="40" cy="40" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="6" fill="none" />
        <motion.circle
          cx="40" cy="40" r={r}
          stroke="#A855F7" strokeWidth="6" strokeLinecap="round" fill="none"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (c * value) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          style={{ filter: "drop-shadow(0 0 6px #A855F7)" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-display text-sm font-bold text-lime">{value}%</div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionTitle eyebrow="03 — Skills" title="A versatile toolkit, polished daily" />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.05 }}
            className="bento-card group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime">
                  <g.Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <Ring value={g.level} />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-lime/20 group-hover:text-foreground">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
