import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { ParticleBg } from "./Particles";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <ParticleBg />
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-lime/20 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-lime/10 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
          Hi, I'm Nida Tariq — Available for work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-black leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl"
        >
          Creative
          <br />
          <span className="text-lime text-glow">Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          I build modern, responsive and interactive web experiences using cutting-edge technologies and creative design principles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_0_50px_rgba(168, 85, 247,0.7)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-foreground transition-all hover:border-lime/40 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: "https://github.com/nidatariq128" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/nidatariq0" },
            { Icon: Mail, href: "#contact" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full glass text-muted-foreground hover:text-lime hover:border-lime/40 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
