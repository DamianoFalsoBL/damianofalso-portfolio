"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, BookOpen } from "lucide-react";

const portfolioItems = [
  {
    title: "Automazioni AI-Driven",
    description: "Workflow sviluppati su n8n (agenti autonomi, bot di messaggistica, data ingestion) integrando LLM e hosting locale tramite Docker.",
    tags: ["n8n", "LLM", "Docker", "Agenti AI"],
    color: "bg-tertiary-container",
    textColor: "text-on-tertiary-container",
    icon: <Code size={20} />
  },

  {
    title: "Web App",
    description: "Sviluppo di interfacce web dinamiche e performanti, focalizzate su UX fluida ed estetica moderna.",
    tags: ["React", "Node.js", "Tailwind", "Next.js"],
    color: "bg-primary-container",
    textColor: "text-on-primary-container",
    icon: <Code size={20} />
  },
];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio & Case Histories</h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            La mia transizione verso l&apos;AI e lo sviluppo software avanzato attraverso progetti reali. Non solo codice, ma soluzioni a problemi concreti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-4xl mx-auto">
          {portfolioItems.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${project.color} ${project.textColor} rounded-[2.5rem] p-8 flex flex-col h-full shadow-lg transition-shadow hover:shadow-xl`}
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="opacity-90 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-black/10 dark:bg-white/10 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                <button className="flex items-center gap-2 font-bold hover:opacity-80 transition-opacity">
                  {project.icon} Dettagli
                </button>
                <button className="flex items-center gap-2 p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors">
                  <ExternalLink size={20} />
                </button>
              </div>
            </motion.div>
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
