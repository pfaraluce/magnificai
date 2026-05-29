import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RotateCw, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { useLanguage } from "../i18n";

export function DecisionCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="group relative flex flex-col h-full min-h-[450px]"
    >
      <div className="mb-4 text-center">
        <h3 className="font-display text-xl font-bold text-zinc-200">
          {t.decision.title}
        </h3>
        <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest mt-1">
          {t.decision.badge}
        </p>
      </div>

      <div
        className="relative flex-grow w-full rounded-3xl [perspective:1000px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={clsx(
            "relative h-full w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d]",
            isFlipped ? "[transform:rotateY(180deg)]" : ""
          )}
        >
          {/* Front - Babel */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col">
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/1280px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg"
                alt="Tower of Babel"
                className="h-full w-full object-cover saturate-50 contrast-125"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
              <h3 className="mb-2 font-display text-3xl font-bold tracking-tight text-white">
                {t.decision.babel}
              </h3>
              <p className="font-serif italic text-zinc-300 mb-2 leading-relaxed">
                {t.decision.babelQuote}
              </p>
              <div className="flex justify-center mb-4" dir="ltr">
                {t.decision.babelLink ? (
                  <a href={t.decision.babelLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest" onClick={(e) => e.stopPropagation()}>
                    {t.decision.babelRef}
                  </a>
                ) : (
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    {t.decision.babelRef}
                  </span>
                )}
              </div>
              <p className="font-medium text-sm text-zinc-400 mb-8 leading-relaxed">
                {t.decision.babelDesc}
              </p>
              
              <div className="mx-auto relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-75 group-hover:opacity-100 transition-opacity" />
                <span className="inline-flex h-full w-full items-center gap-2 rounded-full bg-zinc-900/90 px-4 py-2 font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest backdrop-blur-3xl group-hover:bg-zinc-800 transition-colors">
                  <RotateCw className="w-3.5 h-3.5" /> {t.decision.flip}
                </span>
              </div>
            </div>
          </div>

          {/* Back - Jerusalem */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl flex flex-col">
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://m.media-amazon.com/images/I/81RcWh3r7TL._AC_UF894,1000_QL80_.jpg"
                alt="Rebuilding Jerusalem"
                className="h-full w-full object-cover saturate-50 contrast-125"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
              <h3 className="mb-2 font-display text-3xl font-bold tracking-tight text-white">
                {t.decision.jeru}
              </h3>
              <p className="font-serif italic text-zinc-300 mb-2 leading-relaxed">
                {t.decision.jeruQuote}
              </p>
              <div className="flex justify-center mb-4" dir="ltr">
                {t.decision.jeruLink ? (
                  <a href={t.decision.jeruLink} target="_blank" rel="noopener noreferrer" className="font-mono text-[10px] text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest" onClick={(e) => e.stopPropagation()}>
                    {t.decision.jeruRef}
                  </a>
                ) : (
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    {t.decision.jeruRef}
                  </span>
                )}
              </div>
              <p className="font-medium text-sm text-zinc-400 mb-8 leading-relaxed">
                {t.decision.jeruDesc}
              </p>
              
              <div className="mx-auto flex items-center gap-2 font-mono text-xs font-semibold text-zinc-400 uppercase tracking-widest bg-zinc-950/80 px-4 py-2 rounded-full backdrop-blur-md border border-zinc-700 group-hover:bg-zinc-800 transition-colors">
                <RotateCw className="w-3.5 h-3.5" /> {t.decision.flip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
