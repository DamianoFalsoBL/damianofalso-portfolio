import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Damiano Falso - Portfolio",
  description: "Portfolio di Damiano Falso, sviluppatore web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-primary selection:text-on-primary overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
