import { useEffect, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function ParticleBg() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);
  if (!ready) return null;

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#A855F7" },
            links: { enable: true, color: "#A855F7", distance: 140, opacity: 0.25, width: 1 },
            move: { enable: true, speed: 1.2, outModes: { default: "bounce" } },
            number: { value: 60, density: { enable: true } },
            opacity: { value: 0.6 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 180, links: { opacity: 0.8 } } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 h-full w-full"
      />
    </ParticlesProvider>
  );
}
