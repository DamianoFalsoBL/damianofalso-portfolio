"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background isolate">
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

      <div className="relative z-10 text-center px-4 backdrop-blur-md bg-background/50 p-12 rounded-[3rem] border border-surface-variant shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-4"
        >
          Damiano <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary inline-block pr-2">Falso</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-3xl text-foreground/80 font-medium mb-8"
        >
          AI Automation Specialist & Web Developer
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="px-8 py-4 bg-primary text-on-primary rounded-full text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Scopri di più
        </motion.button>
      </div>
    </section>
  );
}
