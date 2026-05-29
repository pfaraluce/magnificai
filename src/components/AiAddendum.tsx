import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Cpu, Calendar, Tag, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n";

export function AiAddendum() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const renderHtml = (text: string, links: any[]) => {
    let html = text;
    const placeholders = ["{x}", "{y}", "{z}", "{w}"];
    links.forEach((link, idx) => {
      if (link) {
        html = html.replace(
          placeholders[idx],
          `<a href="${link.link}" target="_blank" rel="noopener noreferrer" class="text-zinc-200 hover:underline">${link.text}</a>`
        );
      }
    });
    return html;
  };

  return (
    <div className="mx-auto w-full max-w-4xl pt-24 pb-12">
      <motion.div
        layout
        className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/50 backdrop-blur-md"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-zinc-900/50 sm:p-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-zinc-200">
                {t.ai.title}
              </h3>
              <p className="text-sm text-zinc-500">
                {t.ai.subtitle}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <ChevronDown className="h-6 w-6 text-zinc-500" />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="border-t border-zinc-800 p-6 sm:p-8">
                <div className="mb-8 flex flex-wrap gap-4 text-xs font-mono text-zinc-500" dir="ltr">
                  <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                    <Tag className="h-3.5 w-3.5" />
                    model: gemini-3.1-pro-preview
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                    <Calendar className="h-3.5 w-3.5" />
                    date: 2026-05-28
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    status: implicated
                  </div>
                </div>

                <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
                  <p dangerouslySetInnerHTML={{ __html: renderHtml(t.ai.p1, [t.ai.p1_l1, t.ai.p1_l2]) }}></p>
                  
                  <p dangerouslySetInnerHTML={{ __html: renderHtml(t.ai.p2, [t.ai.p2_l1, t.ai.p2_l2]) }}></p>

                  <p dangerouslySetInnerHTML={{ __html: renderHtml(t.ai.p3, [t.ai.p3_l1, t.ai.p3_l2, t.ai.p3_l3, t.ai.p3_l4]) }}></p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
