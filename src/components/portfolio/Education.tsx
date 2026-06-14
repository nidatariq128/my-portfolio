import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionTitle } from "./About";

const items = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institute: "University of Karachi",
    duration: "2021 — 2025",
    note: "Specialized in accounting, business management and finance. Strong academic performance.",
  },
  {
    degree: "Frontend Engineering Track",
    institute: "Self-taught & Bootcamps",
    duration: "2022 — Present",
    note: "Deep dive into React, TypeScript, design systems and modern web performance.",
  },
  {
    degree: "Intermediate in Commerce (I.Com)",
    institute: "Govt. Degree College",
    duration: "2019 — 2021",
    note: "Top 5% of class. Strong foundation in accounting, business studies and economics.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionTitle eyebrow="02 — Education" title="A path built on curiosity" />

      <div className="relative mt-14">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-lime/60 via-lime/20 to-transparent md:left-1/2" />
        <div className="space-y-6">
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1 }}
              className={`relative grid md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12 [direction:ltr]"}`}>
                <div className="bento-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <span className="text-xs uppercase tracking-widest text-lime">{it.duration}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold">{it.degree}</h3>
                  <p className="text-sm text-muted-foreground">{it.institute}</p>
                  <p className="mt-3 text-sm text-muted-foreground/80">{it.note}</p>
                </div>
              </div>
              <div className="absolute left-4 top-6 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-lime ring-4 ring-lime/20 animate-pulse-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
