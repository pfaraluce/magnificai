import { ArrowRight, Flame, Globe } from "lucide-react";
import { useLanguage, LANGUAGES, Language } from "../i18n";

export function Header() {
  const { language, changeLanguage, t } = useLanguage();

  return (
    <header className="relative w-full py-24 sm:py-32 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-4 right-4 md:right-8 lg:right-12 z-50 flex items-center gap-2">
        <Globe className="h-4 w-4 text-zinc-500" />
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value as Language)}
          className="bg-transparent text-sm text-zinc-400 font-medium focus:outline-none cursor-pointer hover:text-zinc-200 transition-colors"
          dir="ltr"
        >
          {Object.entries(LANGUAGES).map(([code, name]) => (
            <option key={code} value={code} className="bg-zinc-900 text-sm">
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="absolute inset-0 top-0 z-0">
        <div className="absolute top-0 left-1/2 min-w-[1000px] -translate-x-1/2 scale-150 transform opacity-10">
          <div className="aspect-[2/1] bg-gradient-to-b from-white to-transparent blur-3xl" />
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 backdrop-blur-sm">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="font-mono text-xs font-semibold tracking-widest text-zinc-400">
              {t.header.badge}
            </span>
          </div>
        </div>
        
        <h1 className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {t.header.titlePre}<span className="text-zinc-500 line-through decoration-zinc-700 decoration-4">{t.header.titleBabel}</span>
        </h1>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-zinc-300 sm:text-4xl">
          {t.header.titlePost}
        </h2>
        
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
          {t.header.subtitle}
        </p>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={t.header.readLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-6 py-2.5 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800"
          >
            {t.header.readBtn}
            <ArrowRight className={`h-4 w-4 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>
        </div>
      </div>
    </header>
  );
}
