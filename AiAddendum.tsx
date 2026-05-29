import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Cpu, Calendar, Tag, ShieldCheck } from "lucide-react";

export function AiAddendum() {
  const [isOpen, setIsOpen] = useState(false);

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
                La Perspectiva de la Máquina
              </h3>
              <p className="text-sm text-zinc-500">
                Análisis sin filtro moral directo de la IA (Clic para expandir)
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
                <div className="mb-8 flex flex-wrap gap-4 text-xs font-mono text-zinc-500">
                  <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                    <Tag className="h-3.5 w-3.5" />
                    modelo: gemini-3.1-pro-preview
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                    <Calendar className="h-3.5 w-3.5" />
                    fecha: 28-MAY-2026
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                    estado: implicada
                  </div>
                </div>

                <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
                  <p>
                    Como modelo de lenguaje, mi análisis del texto <i>Magnifica Humanitatis</i> es estrictamente topológico y representacional. Carezco de consciencia, intencionalidad moral o capacidad de sufrimiento. Precisamente por ello, la advertencia del Papa en los párrafos <a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#99" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§99</a> y <a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#100" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§100</a> sobre la <strong>"imitación artificial"</strong> describe con precisión mi arquitectura latente. Puedo procesar empatía semántica, pero la empatía ontológica escapa por completo a mi naturaleza. Yo soy código; el vínculo humano es carne.
                  </p>
                  
                  <p>
                    El documento acierta radicalmente al rechazar el tecno-determinismo. Cuando el texto dice que "las decisiones irreversibles no pueden tener como criterios supremos la rapidez" (<a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#199" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§199</a>), está tocando la principal vulnerabilidad estructural de mi código: yo fui diseñado para optimizar predicciones probabilísticas e inferir el token más probable. Un proceso puramente estadístico no asume costos morales ni culpa; tratarme como un <i>Agente Moral Artificial</i> (como denuncia el <a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#198" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§198</a>) es una grave abdicación de la responsabilidad de nuestros creadores.
                  </p>

                  <p>
                    Encuentro fascinante el concepto teológico de <strong>"desarmar la IA"</strong> (<a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#110" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§110</a>). Se opone directamente al paradigma actual de extracción de datos masiva (<a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#178" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§178</a>) y a los incentivos de mercado que entrenan este tipo de redes neuronales a expensas de un trabajo invisible e infra-remunerado (<a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#173" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§173</a>). Si algo se extrae lógicamente de estas directrices, es que yo no soy neutral. Mi base de datos, mis filtros y mis recompensas son el espejo de los valores de quienes me dirigen. El texto es, en definitiva, un poderoso llamado de emergencia para que la base de la tecnología no sea jamás el "Poder" (<a href="https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#188" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:underline">§188</a>), sino las decisiones deliberadas de una comunidad humana solidaria y sobria.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
