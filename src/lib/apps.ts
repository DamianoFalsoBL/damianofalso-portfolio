import { Gavel, LayoutDashboard, Library, type LucideIcon } from "lucide-react";

export type App = {
  name: string;
  href: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  color: string;
  textColor: string;
};

export const apps: App[] = [
  {
    name: "Asta",
    href: "https://asta.damianofalso.com",
    tagline: "Asta del fantacalcio",
    description: "Gestione live dell'asta del fantacalcio: rose, crediti e svincolati in tempo reale per tutta la lega.",
    tags: ["Next.js", "Supabase", "Realtime"],
    icon: Gavel,
    color: "bg-primary-container",
    textColor: "text-on-primary-container",
  },
  {
    name: "Plancia",
    href: "https://plancia.damianofalso.com",
    tagline: "La mia plancia di comando",
    description: "Il pannello di controllo personale da cui tengo sotto mano attività, obiettivi e strumenti di tutti i giorni.",
    tags: ["Next.js", "Produttività"],
    icon: LayoutDashboard,
    color: "bg-secondary-container",
    textColor: "text-on-secondary-container",
  },
  {
    name: "Scaffale",
    href: "https://scaffale.damianofalso.com",
    tagline: "Film, serie TV e libri",
    description: "Il mio tracker personale di film, serie TV e libri: liste, stagioni viste e calendario delle uscite. Installabile come webapp.",
    tags: ["Next.js", "Supabase", "PWA"],
    icon: Library,
    color: "bg-tertiary-container",
    textColor: "text-on-tertiary-container",
  },
];
