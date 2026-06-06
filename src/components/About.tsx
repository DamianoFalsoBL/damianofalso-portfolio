"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-surface-variant text-on-surface-variant overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        
        {/* Avatar with morphing frame */}
        <div className="w-full md:w-5/12 flex justify-center">
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden shadow-2xl"
            initial={{ borderRadius: "50%" }}
            whileInView={{
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "50% 50% 20% 80% / 25% 80% 20% 75%",
                "60% 40% 30% 70% / 60% 30% 70% 40%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            viewport={{ once: false }}
          >
            <Image
              src="/avatar.png"
              alt="Damiano Falso"
              fill
              sizes="(max-width: 768px) 256px, 384px"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-7/12 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-on-surface"
          >
            Chi Sono
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-lg"
          >
            <p>
              Sono un Ecommerce specialist e Junior Web Developer in costante evoluzione. Con una solida base in tecnologie web tradizionali, oggi sto concentrando la mia carriera per diventare un <strong>AI Automation Specialist</strong> a 360 gradi.
            </p>
            <p>
              Credo fermamente che l&apos;Intelligenza Artificiale non debba solo essere compresa, ma integrata attivamente per ottimizzare i flussi di lavoro. Mi dedico alla progettazione di architetture logiche (da React a workflow complessi su n8n) capaci di trasformare la produttività quotidiana e aziendale.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {["n8n", "Prompt Engineering", "Google AI Studio", "Docker", "React", "Node.js"].map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Oltre il codice section */}
      <div className="max-w-6xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-on-surface mb-8 text-center"
        >
          Oltre il Codice: Passioni & Mindset
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface p-8 rounded-3xl shadow-lg border border-outline/10"
          >
            <div className="text-4xl mb-4">⏱️</div>
            <h4 className="text-xl font-bold text-on-surface mb-3">Produttività & Organizzazione</h4>
            <p>Sono un grande estimatore dei sistemi GTD e della metodologia P.A.R.A. Gestisco e ottimizzo la mia vita attraverso Notion, strutturando flussi che liberano tempo di valore.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface p-8 rounded-3xl shadow-lg border border-outline/10"
          >
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-xl font-bold text-on-surface mb-3">Lettura</h4>
            <p>Amo leggere saggi sulla produttività e grandi romanzi. Il mio libro della vita è <em>Il Conte di Montecristo</em>, un punto di riferimento assoluto per strategia e resilienza.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface p-8 rounded-3xl shadow-lg border border-outline/10"
          >
            <div className="text-4xl mb-4">⚽</div>
            <h4 className="text-xl font-bold text-on-surface mb-3">Sport & Fantacalcio</h4>
            <p>Amore viscerale per lo sport e l&apos;analisi dei dati applicata al Fantacalcio (in modalità Mantra sulle Euroleghe), dove uso un approccio predittivo per costruire la formazione perfetta.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
