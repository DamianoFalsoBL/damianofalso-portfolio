"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { apps } from "@/lib/apps";

const blogItems = [
  {
    title: "Setup Docker per Automazioni",
    description: "Guida rapida su come ho configurato i miei container Docker per eseguire n8n e Ollama in locale in totale sicurezza.",
    tags: ["Appunti", "DevOps"],
  },
  {
    title: "Ottimizzare un Prompt",
    description: "Tecniche e riflessioni pratiche sul Prompt Engineering per ottenere risultati deterministici dai modelli generativi.",
    tags: ["Riflessioni", "AI"],
  },
  {
    title: "Tracking degli Obiettivi su Notion",
    description: "Come uso Notion e i sistemi GTD per monitorare la mia sfida con l'inglese e la mia preparazione atletica.",
    tags: ["Produttività", "Notion"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-surface text-on-surface">
      <div className="max-w-6xl mx-auto">
        
        {/* Sezione Portfolio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">I Miei Progetti</h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            Web app che ho progettato e sviluppato per risolvere problemi concreti, online e pronte all&apos;uso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {apps.map((app, index) => (
            <motion.a
              key={app.name}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${app.color} ${app.textColor} group rounded-[2.5rem] p-8 flex flex-col h-full shadow-lg transition-shadow hover:shadow-xl`}
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10">
                <app.icon size={28} aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{app.name}</h3>
              <p className="text-sm font-medium opacity-70 mb-4">{app.tagline}</p>
              <p className="opacity-90 mb-6 flex-grow">{app.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {app.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="flex items-center justify-between mt-auto font-bold">
                {app.href.replace("https://", "")}
                <span className="p-3 bg-black/5 dark:bg-white/5 group-hover:bg-black/10 dark:group-hover:bg-white/10 rounded-full transition-colors">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Sezione Digital Notes & Blog */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital Notes & Blog</h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            Uno spazio in cui condivido appunti, guide rapide e riflessioni sul mio percorso di apprendimento continuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogItems.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface-variant text-on-surface-variant p-6 rounded-3xl border border-outline/10 flex flex-col h-full shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-3 text-primary">
                <BookOpen size={20} />
                <span className="text-sm font-bold uppercase tracking-wider">{post.tags[0]}</span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-3">{post.title}</h3>
              <p className="mb-6 flex-grow">{post.description}</p>
              <button className="text-primary font-bold hover:underline self-start mt-auto">
                Leggi di più →
              </button>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
