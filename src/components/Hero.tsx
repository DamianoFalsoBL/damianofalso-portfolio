"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { apps } from "@/lib/apps";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background isolate px-4 pt-28 pb-16">
      {/* Background glowing orb */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] rounded-full bg-primary/20 blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x * 50,
          y: mousePosition.y * 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      {/* Morphing Shape - The Wow Factor */}
      <motion.div
        className="absolute w-72 h-72 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-primary to-tertiary opacity-70 pointer-events-none"
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 30% 30% 70% 70%",
            "50% 50% 20% 80% / 25% 80% 20% 75%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          rotate: [0, 90, 180, 360],
          x: mousePosition.x * -40,
          y: mousePosition.y * -40,
        }}
        transition={{
          borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 }
        }}
      />

      <div className="relative z-10 w-full max-w-4xl text-center backdrop-blur-md bg-background/50 px-6 py-10 md:p-12 rounded-[3rem] border border-surface-variant shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-4"
        >
          Damiano <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block pr-2">Falso</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-foreground/80 font-medium mb-10"
        >
          AI Automation Specialist & Web Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8"
        >
          {apps.map((app) => (
            <motion.a
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`${app.color} ${app.textColor} group flex sm:flex-col items-center gap-3 sm:gap-2 px-6 py-4 sm:py-6 rounded-[2rem] shadow-lg text-left sm:text-center`}
            >
              <app.icon size={32} aria-hidden="true" className="shrink-0" />
              <span className="flex-1">
                <span className="flex items-center sm:justify-center gap-1 text-xl font-bold">
                  {app.name}
                  <ArrowUpRight size={18} aria-hidden="true" className="opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="block text-sm opacity-80">{app.tagline}</span>
              </span>
            </motion.a>
          ))}
        </motion.div>
        <button
          className="text-foreground/70 font-medium hover:text-primary transition-colors"
          onClick={() => {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Scopri di più ↓
        </button>
      </div>
    </section>
  );
}
