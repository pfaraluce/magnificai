import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SinCardProps {
  key?: React.Key;
  sin: {
    id: number;
    title: string;
    subtitle: string;
    quote: string;
    reference: string;
    risk: string;
    antidote: string;
    icon: string;
    accentColor: string;
  };
  index: number;
}

export function SinCard({ sin, index }: SinCardProps) {
  // @ts-ignore - Dynamic icon rendering
  const IconComponent = Icons[sin.icon] || Icons.Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 p-8 transition-all hover:border-zinc-700"
    >
      <div
        className={cn(
          "absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-5 blur-3xl transition-opacity group-hover:opacity-20",
          sin.accentColor
        )}
      />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br shadow-inner",
              sin.accentColor
            )}
          >
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <span className="font-mono text-xs text-zinc-500">RIESGO 0{sin.id}</span>
        </div>

        <h3 className="mb-2 font-display text-2xl font-bold tracking-tight text-zinc-100">
          {sin.title}
        </h3>
        <p className="mb-6 font-medium text-zinc-400">{sin.subtitle}</p>

        <div className="mb-8 rounded-2xl bg-zinc-950/50 p-5 border border-zinc-800/50">
          <p className="font-serif italic text-zinc-300 leading-relaxed">
            "{sin.quote}"
          </p>
          <div className="mt-3 flex justify-end font-mono text-xs font-semibold text-zinc-500">
            [LEÓN XIV, {" "}
            <a 
              href={`https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#${sin.reference.match(/\d+/)?.[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 hover:underline transition-colors"
            >
              {sin.reference}
            </a>]
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-red-400">
            Tu Riesgo
          </h4>
          <p className="text-sm leading-relaxed text-zinc-300">{sin.risk}</p>
        </div>
        <div>
          <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
            El Antídoto
          </h4>
          <p className="text-sm leading-relaxed text-zinc-300">
            {sin.antidote}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
