import { motion } from "framer-motion";
import { Heart, Sparkles, Target, User } from "lucide-react";
import avatar from "@/assets/avatar.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-32">
      <SectionTitle eyebrow="01 — About" title="Crafting digital experiences with care" />

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[200px]">
        <motion.div {...fadeUp} className="bento-card md:col-span-3 md:row-span-2 flex flex-col justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime"><User className="h-5 w-5" /></span>
            <span className="text-sm uppercase tracking-widest text-muted-foreground">About Me</span>
          </div>
          <div className="my-6 flex items-end gap-5">
            <img src={avatar} alt="Nida Tariq" width={120} height={120} loading="lazy" className="h-28 w-28 rounded-3xl object-cover ring-1 ring-lime/30" />
            <div>
              <h3 className="font-display text-3xl font-bold">Nida Tariq</h3>
              <p className="text-sm text-muted-foreground">Frontend Developer</p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Passionate Frontend Developer focused on creating modern web applications with excellent user experiences, performance and pixel-perfect detail.
          </p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.05 }} className="bento-card md:col-span-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime"><Target className="h-5 w-5" /></span>
            <h3 className="font-display text-lg font-semibold">Career Objective</h3>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Build innovative digital products and continuously sharpen my craft — pairing engineering rigor with bold visual ideas.
          </p>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="bento-card md:col-span-3">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime"><Heart className="h-5 w-5" /></span>
            <h3 className="font-display text-lg font-semibold">What I Love</h3>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {["UI Development", "Problem Solving", "New Tech", "Interactive UX"].map((t) => (
              <span key={t} className="rounded-full border border-lime/20 bg-lime/5 px-3 py-1 text-xs text-lime">{t}</span>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="bento-card md:col-span-6">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime/15 text-lime"><Sparkles className="h-5 w-5" /></span>
            <h3 className="font-display text-lg font-semibold">Personal Highlights</h3>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { k: "Creative", v: "Thinker" },
              { k: "Fast", v: "Learner" },
              { k: "Team", v: "Player" },
              { k: "Detail", v: "Oriented" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
                <div className="font-display text-2xl font-bold text-lime">{s.k}</div>
                <div className="text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div {...fadeUp} className="max-w-3xl">
      <div className="text-xs uppercase tracking-[0.3em] text-lime">{eyebrow}</div>
      <h2 className="mt-3 font-display text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl">{title}</h2>
    </motion.div>
  );
}
