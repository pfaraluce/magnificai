/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from "./components/Header";
import { SinCard } from "./components/SinCard";
import { AiAddendum } from "./components/AiAddendum";
import { DecisionCard } from "./components/DecisionCard";
import { useLanguage } from "./i18n";
import { motion } from "motion/react";
import { Github } from "lucide-react";

export default function App() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-zinc-950 font-sans pb-16">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {t.sins.map((sin: any, index: number) => (
            <SinCard key={sin.id} sin={sin} index={index} />
          ))}
          
          {/* Custom flip card for the final piece of the grid */}
          <DecisionCard />
        </motion.div>

        <section className="mt-20">
          <AiAddendum />
        </section>
      </main>
      
      <footer className="mt-12 px-4 md:px-8 text-center text-zinc-600 font-mono text-xs flex flex-col items-center gap-4">
        <p dangerouslySetInnerHTML={{ __html: t.footer }}></p>
        <a 
          href="https://github.com/pfaraluce/magnificai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Ver código en GitHub"
        >
          <span className="sr-only">GitHub Repository</span>
          <Github className="w-4 h-4" />
        </a>
      </footer>
    </div>
  );
}
