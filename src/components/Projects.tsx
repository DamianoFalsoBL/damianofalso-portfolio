"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { apps } from "@/lib/apps";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8 bg-surface text-on-surface">
      <div className="max-w-6xl mx-auto">
        
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
