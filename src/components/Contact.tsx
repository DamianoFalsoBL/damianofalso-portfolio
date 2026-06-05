"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, MessageCircle, Code } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 bg-surface-variant text-on-surface-variant relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface p-12 rounded-[3rem] shadow-2xl border border-outline/10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">Contatti</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Hai un flusso di lavoro manuale che ti porta via troppo tempo? 
            Vuoi integrare l&apos;AI nei tuoi processi digitali o collaborare a un progetto? <strong>Parliamone!</strong>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.a
              href="mailto:ciao@damianofalso.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-on-primary rounded-full font-bold shadow-lg"
            >
              <Mail size={24} />
              Invia un&apos;email
            </motion.a>
            
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-secondary-container text-on-secondary-container rounded-full shadow-md flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Briefcase size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-tertiary-container text-on-tertiary-container rounded-full shadow-md flex items-center justify-center"
                aria-label="GitHub"
              >
                <Code size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <footer className="mt-24 text-center opacity-70">
        <p>© {new Date().getFullYear()} Damiano Falso. Tutti i diritti riservati.</p>
        <p className="text-sm mt-2">Design basato su Material 3 Expressive.</p>
      </footer>
    </section>
  );
}
