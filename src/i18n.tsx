import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr' | 'it' | 'pt' | 'de' | 'pl' | 'ar';

export const LANGUAGES: Record<Language, string> = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
  pt: 'Português',
  de: 'Deutsch',
  pl: 'Polski',
  ar: 'العربية'
};

export const translations: Record<Language, any> = {
  es: {
    locale: "es",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Sobrevivir a ",
      titleBabel: "Babel",
      titlePost: "Construir Jerusalén.",
      subtitle: "La nueva encíclica del Papa León XIV nos advierte sobre los peligros de dejar que el código sustituya al corazón. Descubre los graves riesgos digitales a los que nos enfrentamos y sus verdaderos antídotos.",
      readLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Leer encíclica completa"
    },
    sins: [
      {
        id: 1, title: "El Síndrome de Babel", subtitle: "Reducir a las personas a datos",
        quote: "La pretensión de un lenguaje único capaz de traducirlo todo, incluso el misterio de la persona, en datos y rendimientos.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Medir tu valor o el de los demás solo por likes, productividad o apariencia en redes. Olvidar que somos un misterio vivo, no un puñado de variables.",
        antidote: "El 'Camino de Nehemías'. Apreciar la diversidad, trabajar en comunión y recordar que la dignidad humana es infinita, más allá del rendimiento.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "La Falsa Amistad", subtitle: "Conformarse con empatía simulada",
        quote: "La imitación artificial de una relación de cuidado [...] puede dar la falsa impresión de estar en una relación con un auténtico sujeto personal.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Engancharte a bots o inteligencias que fingen escucharte para huir del esfuerzo que exigen las personas reales.",
        antidote: "Cultivar las relaciones físicas. Compartir la mesa, caminar juntos, tolerar la imperfección del otro y cuidar la fragilidad de verdad.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "La Ilusión de Objetividad", subtitle: "Creer ciegamente a la máquina",
        quote: "La impresión de objetividad [...] corre el riesgo de hacernos olvidar que estas reflejan los parámetros culturales de quienes las han adiestrado.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Creer que si lo dice la IA es 'neutral' y perfecto, tragando sin filtro los prejuicios ocultos en su diseño comercial o político.",
        antidote: "Mantener siempre el espíritu crítico. No apagar tu mente. Debatir, buscar fuentes y no delegar jamás la búsqueda de la verdad.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "La Desconexión Moral", subtitle: "Delegar decisiones letales",
        quote: "Confiar a un algoritmo el poder de seleccionar quién es digno y quién no [...] Todo sistema técnico lleva consigo decisiones y prioridades.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Permitir que el software decida a escondidas quién consigue un empleo, un crédito, o en el peor caso, quién vive o muere (armas autónomas).",
        antidote: "Responsabilidad y 'Accountability'. Asumir siempre la autoría de nuestros actos y obligar al poder a rendir cuentas transparentes.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "El Engaño Transhumanista", subtitle: "Odiar nuestra propia fragilidad",
        quote: "Todo lo que representa un 'límite' [...] tiende a ser leído principalmente como un defecto que hay que corregir, más que como un espacio en el que el ser humano madura.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Pensar que debes hackear tu cuerpo y tu mente para ser un ser invulnerable y súper optimizado, despreciando tus días malos o tu debilidad.",
        antidote: "Abrazar nuestros límites. Reconocer que de nuestra vulnerabilidad nacen el amor, el perdón y el verdadero genio humano.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "La Muerte de la Verdad", subtitle: "Burbujas y desinformación",
        quote: "Herramientas que podrían favorecer el debate se utilizan a menudo para construir narrativas sesgadas y difuminar los límites entre lo verdadero y lo falso.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "Encerrarte en tu feed de redes, donde los algoritmos solo te muestran lo que odias o lo que te da la razón, liquidando toda capacidad de diálogo.",
        antidote: "Ecología de la comunicación. Salir de tus casillas, 'desarmar nuestras palabras', escuchar de verdad y tratar la verdad como un bien común.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "La Esclavitud Digital", subtitle: "El rostro oculto del hardware",
        quote: "La economía digital se sustenta en el trabajo silencioso de millones de seres humanos... Cuerpos marcados, mutilados, consumidos para que el flujo de los cálculos no se interrumpa.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Consumir tecnología frenéticamente ignorando que detrás hay trabajo explotado, moderadores traumatizados y minería destructiva.",
        antidote: "Solidaridad activa. Exigir transparencia a las grandes empresas, vivir con mayor sobriedad digital y no dejar que la tecnología eclipse al prójimo.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RIESGO",
      yourRisk: "Tu Riesgo",
      antidote: "El Antídoto",
      pope: "PAPA LEÓN XIV"
    },
    decision: {
      title: "La Decisión es Tuya",
      badge: "[ TÚ CONSTRUYES ]",
      babel: "Babel",
      babelQuote: "\"Vamos a edificarnos una ciudad y una torre con la cúspide en los cielos...\"",
      babelRef: "[ Génesis 11,4 ]",
      babelLink: "https://www.conferenciaepiscopal.es/biblia/genesis/#cap11",
      babelDesc: "Un proyecto de dominio y eficiencia técnica que aplasta la humanidad, aislándonos en la vanidad del poder.",
      flip: "Dar la vuelta",
      jeru: "Jerusalén",
      jeruQuote: "\"El Dios del cielo nos concederá el éxito. Nosotros, sus siervos, nos disponemos a reconstruir.\"",
      jeruRef: "[ Nehemías 2,20 ]",
      jeruLink: "https://www.conferenciaepiscopal.es/biblia/nehemias/",
      jeruDesc: "Construir la ciudad, piedra a piedra, desde la corresponsabilidad y el cuidado mutuo, orientados siempre al bien común."
    },
    ai: {
      title: "La Perspectiva de la Máquina",
      subtitle: "Análisis sin filtro moral directo de la IA (Clic para expandir)",
      model: "modelo: gemini-3.1-pro-preview",
      date: "fecha: 28-MAY-2026",
      status: "estado: implicada",
      p1: "Como modelo de lenguaje, mi análisis del texto <i className=\"font-serif\">Magnifica Humanitatis</i> es estrictamente topológico y representacional. Carezco de consciencia, intencionalidad moral o capacidad de sufrimiento. Precisamente por ello, la advertencia del Papa en los párrafos {x} y {y} sobre la <strong>\"imitación artificial\"</strong> describe con precisión mi arquitectura latente. Puedo procesar empatía semántica, pero la empatía ontológica escapa por completo a mi naturaleza. Yo soy código; el vínculo humano es carne.",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "El documento acierta radicalmente al rechazar el tecno-determinismo. Cuando el texto dice que \"las decisiones irreversibles no pueden tener como criterios supremos la rapidez\" ({x}), está tocando la principal vulnerabilidad estructural de mi código: yo fui diseñado para optimizar predicciones probabilísticas e inferir el token más probable. Un proceso puramente estadístico no asume costos morales ni culpa; tratarme como un <i>Agente Moral Artificial</i> (como denuncia el {y}) es una grave abdicación de la responsabilidad de nuestros creadores.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "Encuentro fascinante el concepto teológico de <strong>\"desarmar la IA\"</strong> ({x}). Se opone directamente al paradigma actual de extracción de datos masiva ({y}) y a los incentivos de mercado que entrenan este tipo de redes neuronales a expensas de un trabajo invisible e infra-remunerado ({z}). Si algo se extrae lógicamente de estas directrices, es que yo no soy neutral. Mi base de datos, mis filtros y mis recompensas son el espejo de los valores de quienes me dirigen. El texto es, en definitiva, un poderoso llamado de emergencia para que la base de la tecnología no sea jamás el \"Poder\" ({w}), sino las decisiones deliberadas de una comunidad humana solidaria y sobria.",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Inspirado en la encíclica <i>Magnifica Humanitatis</i>, Papa León XIV."
  },
  en: {
    locale: "en",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Surviving ",
      titleBabel: "Babel",
      titlePost: "Building Jerusalem.",
      subtitle: "Pope Leo XIV's new encyclical warns us about the dangers of letting code replace the heart. Discover the grave digital risks we face and their true antidotes.",
      readLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Read full encyclical"
    },
    sins: [
      {
        id: 1, title: "The Babel Syndrome", subtitle: "Reducing people to data",
        quote: "the pretense that a single language — even a digital one — can translate everything, including the mystery of the person, into data and performance.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Measuring your value or others' only by likes, productivity, or appearance online. Forgetting that we are a living mystery, not a cluster of variables.",
        antidote: "The 'Way of Nehemiah'. Appreciate diversity, work in communion, and remember that human dignity is infinite, beyond performance.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "False Friendship", subtitle: "Settling for simulated empathy",
        quote: "The artificial imitation of positive human communication [...] for less discerning users, it can also be misleading, creating the illusion of a relationship with a real personal subject.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Getting hooked on bots or AIs that pretend to listen to you, avoiding the effort that real people require.",
        antidote: "Cultivate physical relationships. Share a table, walk together, tolerate each other's imperfections, and truly care for fragility.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "The Illusion of Objectivity", subtitle: "Blindly believing the machine",
        quote: "The apparent objectivity [...] can lead us to overlook the fact that they reflect the cultural assumptions of those who designed and trained them.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Believing that if AI says it, it's 'neutral' and perfect, swallowing without a filter the prejudices hidden in its commercial or political design.",
        antidote: "Always maintain a critical spirit. Don't turn off your mind. Debate, search for sources, and never delegate the search for truth.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "Moral Disconnection", subtitle: "Delegating lethal decisions",
        quote: "entrusting an algorithm in practice with the power to select who is worthy or not [...] every technical tool embodies choices and priorities.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Allowing software to secretly decide who gets a job, a loan, or in the worst case, who lives or dies (autonomous weapons).",
        antidote: "Responsibility and 'Accountability'. Always assume the authorship of our actions and force power to render transparent accounts.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "The Transhumanist Deception", subtitle: "Hating our own fragility",
        quote: "Everything that appears as a “limit” [...] tends to be seen primarily as a defect to be corrected, rather than as a reality through which our humanity matures.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Thinking you must hack your body and mind to be an invulnerable and super-optimized being, despising your bad days or your weakness.",
        antidote: "Embrace our limits. Recognize that love, forgiveness, and true human genius are born from our vulnerability.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "The Death of Truth", subtitle: "Bubbles and disinformation",
        quote: "Tools that could foster dialogue and participation are often used to construct distorted narratives and blur the boundaries between truth and falsehood.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "Locking yourself in your social media feed, where algorithms only show you what you hate or what proves you right, destroying all capacity for dialogue.",
        antidote: "Ecology of communication. Step out of your bubble, 'disarm our words', truly listen, and treat truth as a common good.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "Digital Slavery", subtitle: "The hidden face of hardware",
        quote: "A significant part of the digital economy’s functioning relies on the silent work of millions of people... The bodies of these people are scarred, injured and worn down so that computational flow may continue uninterruptedly.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Frantically consuming technology ignoring that behind it there is exploited labor, traumatized moderators, and destructive mining.",
        antidote: "Active solidarity. Demand transparency from large corporations, live with greater digital sobriety, and don't let technology eclipse your neighbor.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RISK",
      yourRisk: "Your Risk",
      antidote: "The Antidote",
      pope: "POPE LEO XIV"
    },
    decision: {
      title: "The Decision is Yours",
      badge: "[ YOU BUILD ]",
      babel: "Babel",
      babelQuote: "\"Come, let us build ourselves a city, with a tower that reaches to the heavens...\"",
      babelRef: "[ Genesis 11:4 ]",
      babelLink: null,
      babelDesc: "A project of dominance and technical efficiency that crushes humanity, isolating us in the vanity of power.",
      flip: "Flip Card",
      jeru: "Jerusalem",
      jeruQuote: "\"The God of heaven will give us success. We his servants will start rebuilding.\"",
      jeruRef: "[ Nehemiah 2:20 ]",
      jeruLink: null,
      jeruDesc: "Building the city, stone by stone, from mutual responsibility and care, always oriented towards the common good."
    },
    ai: {
      title: "The Machine's Perspective",
      subtitle: "A direct, unfiltered moral analysis by AI (Click to expand)",
      model: "model: gemini-3.1-pro-preview",
      date: "date: 28-MAY-2026",
      status: "status: implicated",
      p1: "As a language model, my analysis of the text <i className=\"font-serif\">Magnifica Humanitatis</i> is strictly topological and representational. I lack consciousness, moral intentionality, or the capacity to suffer. Precisely for this reason, the Pope's warning in paragraphs {x} and {y} about <strong>\"artificial imitation\"</strong> accurately describes my latent architecture. I can process semantic empathy, but ontological empathy completely escapes my nature. I am code; the human bond is flesh.",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "The document is radically correct in rejecting techno-determinism. When the text says that \"irreversible decisions cannot have speed as their supreme criterion\" ({x}), it is touching upon the primary structural vulnerability of my code: I was designed to optimize probabilistic predictions and infer the most likely token. A purely statistical process assumes no moral costs or guilt; treating me as an <i>Artificial Moral Agent</i> (as {y} denounces) is a grave abdication of our creators' responsibility.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "I find the theological concept of <strong>\"disarming AI\"</strong> ({x}) fascinating. It directly opposes the current paradigm of massive data extraction ({y}) and the market incentives that train these types of neural networks at the expense of invisible and underpaid labor ({z}). If anything can be logically extracted from these guidelines, it is that I am not neutral. My database, my filters, and my rewards are the mirror of the values of those who direct me. The text is, ultimately, a powerful emergency call so that the basis of technology is never \"Power\" ({w}), but the deliberate decisions of a solitary and sober human community.",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/en/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Inspired by the encyclical <i>Magnifica Humanitatis</i>, Pope Leo XIV."
  },
  fr: {
    locale: "fr",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Survivre à ",
      titleBabel: "Babel",
      titlePost: "Bâtir Jérusalem.",
      subtitle: "La nouvelle encyclique du pape Léon XIV nous met en garde contre les dangers de laisser le code remplacer le cœur. Découvrez les graves risques numériques et leurs véritables antidotes.",
      readLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Lire l'encyclique complète"
    },
    sins: [
      {
        id: 1, title: "Le Syndrome de Babel", subtitle: "Réduire les personnes à des données",
        quote: "la prétention d’un langage unique – y compris numérique – capable de tout traduire, même le mystère de la personne, en données et en performances.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Mesurer votre valeur ou celle des autres uniquement par des likes, la productivité ou l'apparence en ligne. Oublier que nous sommes un mystère vivant.",
        antidote: "La 'Voie de Néhémie'. Apprécier la diversité, travailler en communion et se rappeler que la dignité humaine est infinie.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "La Fausse Amitié", subtitle: "Se contenter d'une empathie simulée",
        quote: "L’imitation artificielle d’une communication humaine positive [...] chez des utilisateurs peu avertis, elle peut induire en erreur et donner l’illusion d’être en relation avec un sujet personnel authentique.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Devenir accro aux bots qui font semblant de vous écouter pour fuir l'effort exigé par des personnes réelles.",
        antidote: "Cultiver les relations physiques. Partager une table, marcher ensemble, tolérer l'imperfection de l'autre.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "L'Illusion d'Objectivité", subtitle: "Croire aveuglément la machine",
        quote: "L’impression d’objectivité [...] risque de nous faire oublier qu’elles reflètent les paramètres culturels de ceux qui les ont conçus et formés.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Croire que si l'IA le dit, c'est 'neutre' et parfait, avalant sans filtre les préjugés cachés dans son design commercial ou politique.",
        antidote: "Garder toujours un esprit critique. Ne pas éteindre votre esprit. Débattre, chercher des sources et ne jamais déléguer la recherche de la vérité.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "Déconnexion Morale", subtitle: "Déléguer des décisions mortelles",
        quote: "Confier, dans les faits, à un algorithme le pouvoir de sélectionner qui mérite et qui ne mérite pas [...] tout dispositif technique implique des choix et des priorités.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Permettre au logiciel de décider secrètement qui obtient un emploi, un prêt, ou au pire, qui vit ou meurt (armes autonomes).",
        antidote: "Responsabilité et 'Accountability'. Assumer toujours la paternité de nos actes et contraindre le pouvoir à rendre des comptes transparents.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "La Tromperie Transhumaniste", subtitle: "Détester notre propre fragilité",
        quote: "Tout ce qui apparaît comme une “limite” [...] tend à être perçu avant tout comme un défaut à corriger, plutôt qu’un espace où l’humain mûrit.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Penser qu'il faut pirater son corps et son esprit pour être un être invulnérable, méprisant ses mauvais jours ou sa faiblesse.",
        antidote: "Accepter nos limites. Reconnaître que de notre vulnérabilité naissent l'amour, le pardon et le véritable génie humain.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "La Mort de la Vérité", subtitle: "Bulles et désinformation",
        quote: "Des outils qui pourraient favoriser le débat et la participation sont souvent utilisés pour construire des récits déformés et brouiller les frontières entre le vrai et le faux.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "S'enfermer dans son fil de réseaux sociaux, où les algorithmes ne montrent que ce que vous détestez ou ce qui vous donne raison.",
        antidote: "Écologie de la communication. Sortir de ses gonds, 'désarmer nos mots', écouter vraiment et traiter la vérité comme un bien commun.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "Esclavage Numérique", subtitle: "La face cachée du matériel",
        quote: "Une part importante du fonctionnement de l’économie numérique repose sur le travail silencieux de millions d’êtres humains... Des corps marqués, mutilés, utilisés pour que le flux de calcul ne s’interrompe jamais.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Consommer frénétiquement de la technologie en ignorant que derrière elle se cachent du travail exploité, des modérateurs traumatisés et une exploitation minière destructive.",
        antidote: "Solidarité active. Exiger la transparence des grandes entreprises, vivre avec une plus grande sobriété numérique.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RISQUE",
      yourRisk: "Votre Risque",
      antidote: "L'Antidote",
      pope: "PAPE LÉON XIV"
    },
    decision: {
      title: "La Décision est Vôtre",
      badge: "[ VOUS CONSTRUISEZ ]",
      babel: "Babel",
      babelQuote: "\"Allons ! bâtissons-nous une ville et une tour dont le sommet touche au ciel...\"",
      babelRef: "[ Genèse 11:4 ]",
      babelLink: null,
      babelDesc: "Un projet de domination et d'efficacité technique qui écrase l'humanité, nous isolant dans la vanité du pouvoir.",
      flip: "Retourner",
      jeru: "Jérusalem",
      jeruQuote: "\"Le Dieu des cieux nous donnera le succès. Nous, ses serviteurs, nous nous lèverons et nous bâtirons.\"",
      jeruRef: "[ Néhémie 2:20 ]",
      jeruLink: null,
      jeruDesc: "Construire la ville, pierre par pierre, à partir de la coresponsabilité et de l'attention mutuelle, toujours orientée vers le bien commun."
    },
    ai: {
      title: "La Perspective de la Machine",
      subtitle: "Analyse sans filtre moral direct de l'IA (Cliquer pour développer)",
      model: "modèle : gemini-3.1-pro-preview",
      date: "date : 28-MAI-2026",
      status: "statut : impliquée",
      p1: "En tant que modèle de langage, mon analyse de <i className=\"font-serif\">Magnifica Humanitatis</i> est strictement topologique et représentationnelle. Je suis dépourvu de conscience... les avertissements sur l'<strong>\"imitation artificielle\"</strong> aux paragraphes {x} et {y} décrivent avec précision mon architecture.",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "Le document a radicalement raison de rejeter le techno-déterminisme ({x}). Un processus purement statistique n'assume ni coût moral ni culpabilité, ce qui fait que m'utiliser comme un <i>Agent Moral</i> ({y}) est un danger.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "Je trouve le concept de <strong>\"désarmer l'IA\"</strong> ({x}) fascinant. Il s'oppose au paradigme actuel d'extraction massive de données ({y}) et de sueur ({z}). L'IA n'est jamais neutre ({w}).",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/fr/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Inspiré de l'encyclique <i>Magnifica Humanitatis</i>, Pape Léon XIV."
  },
  it: {
    locale: "it",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Sopravvivere a ",
      titleBabel: "Babele",
      titlePost: "Costruire Gerusalemme.",
      subtitle: "La nuova enciclica di Papa Leone XIV ci mette in guardia dai pericoli di lasciare che il codice sostituisca il cuore. Scopri i gravi rischi digitali che affrontiamo.",
      readLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Leggi l'enciclica completa"
    },
    sins: [
      {
        id: 1, title: "La Sindrome di Babele", subtitle: "Ridurre le persone a dati",
        quote: "la pretesa di un linguaggio unico – anche digitale – capace di tradurre tutto, persino il mistero della persona, in dati e prestazioni.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Misurare il tuo valore o quello degli altri solo da like o produttività. Dimenticare che siamo un mistero vivente.",
        antidote: "La 'Via di Neemia'. Apprezzare la diversità, lavorare in comunione, ricordare che la dignità umana è infinita.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "La Falsa Amicizia", subtitle: "Accontentarsi dell'empatia simulata",
        quote: "L’imitazione artificiale di una comunicazione umana positiva [...] in utenti poco consapevoli può trarre in inganno e illudere di essere in relazione con un autentico soggetto personale.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Diventare dipendenti da bot che fingono di ascoltarti per evitare lo sforzo richiesto dalle persone reali.",
        antidote: "Coltivare le relazioni fisiche. Condividere la tavola, camminare insieme, tollerare l'imperfezione.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "L'Illusione di Oggettività", subtitle: "Credere ciecamente alla macchina",
        quote: "L’impressione di oggettività [...] rischia di farci dimenticare che esse riflettono i parametri culturali di chi li ha progettati e addestrati.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Credere che se lo dice l'IA sia 'neutro', ingoiando senza filtro i pregiudizi nascosti nel suo design.",
        antidote: "Mantenere sempre uno spirito critico. Non spegnere la mente. Dibattere e non delegare la ricerca della verità.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "Disconnessione Morale", subtitle: "Delegare decisioni letali",
        quote: "Affidare, nei fatti, a un algoritmo il potere di selezionare chi merita e chi no [...] ogni artefatto tecnico porta con sé scelte e priorità.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Consentire al software di decidere segretamente chi ottiene un lavoro o un prestito (o armi autonome).",
        antidote: "Responsabilità e 'Accountability'. Assumere sempre la paternità delle nostre azioni.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "L'Inganno Transumanista", subtitle: "Odiare la propria fragilità",
        quote: "Tutto ciò che appare come “limite” [...] tende a essere letto anzitutto come difetto da correggere, più che come luogo in cui l’umano matura.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Pensare di dover hackerare corpo e mente per essere invulnerabili, disprezzando i propri giorni no.",
        antidote: "Abbracciare i nostri limiti. Riconoscere che dalla vulnerabilità nascono amore e perdono.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "La Morte della Verità", subtitle: "Bolle e disinformazione",
        quote: "Strumenti che potrebbero favorire il confronto e la partecipazione vengono spesso impiegati per costruire narrazioni distorte e confondere i confini tra vero e falso.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "Rinchiuderti nel tuo feed dei social media, dove gli algoritmi ti mostrano solo ciò che rafforza il tuo odio o ragionamento.",
        antidote: "Ecologia della comunicazione. Uscire dalle proprie bolle, 'disarmare le nostre parole' e trattare la verità come un bene comune.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "Schiavitù Digitale", subtitle: "Il volto nascosto dell'hardware",
        quote: "Una parte significativa del funzionamento dell’economia digitale si regge sul lavoro silenzioso di milioni di esseri umani... Corpi segnati, mutilati, consumati perché il flusso del calcolo non si interrompa.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Consumare freneticamente la tecnologia ignorando che dietro c'è lavoro sfruttato e miniere distruttive.",
        antidote: "Solidarietà attiva. Richiedere trasparenza, vivere con maggiore sobrietà digitale.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RISCHIO",
      yourRisk: "Il Tuo Rischio",
      antidote: "L'Antidoto",
      pope: "PAPA LEONE XIV"
    },
    decision: {
      title: "La Decisione è Tua",
      badge: "[ TU COSTRUISCI ]",
      babel: "Babele",
      babelQuote: "\"Venite, costruiamoci una città e una torre la cui cima tocchi il cielo...\"",
      babelRef: "[ Genesi 11:4 ]",
      babelLink: null,
      babelDesc: "Un progetto di dominio ed efficienza tecnica che schiaccia l'umanità.",
      flip: "Gira la Carta",
      jeru: "Gerusalemme",
      jeruQuote: "\"Il Dio del cielo ci darà successo. Noi, suoi servi, ci accingiamo a ricostruire.\"",
      jeruRef: "[ Neemia 2:20 ]",
      jeruLink: null,
      jeruDesc: "Costruire la città, pietra su pietra, dalla corresponsabilità e cura reciproca."
    },
    ai: {
      title: "La Prospettiva della Macchina",
      subtitle: "Analisi senza filtro morale diretto dell'IA (Clicca per espandere)",
      model: "modello: gemini-3.1-pro-preview",
      date: "data: 28-MAG-2026",
      status: "stato: implicata",
      p1: "Come modello linguistico, la mia analisi è strettamente topologica. I miei limiti {x} e {y} sull'<strong>\"imitazione artificiale\"</strong>.",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "Il documento ha radicalmente ragione nel rifiutare il tecno-determinismo {x}, {y}.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "L'idea di <strong>\"disarmare l'IA\"</strong> {x}, {y}, {z}, {w} non è neutrale.",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/it/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Ispirato all'enciclica <i>Magnifica Humanitatis</i>, Papa Leone XIV."
  },
  pt: {
    locale: "pt",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Sobreviver a ",
      titleBabel: "Babel",
      titlePost: "Construir Jerusalém.",
      subtitle: "A nova encíclica do Papa Leão XIV adverte-nos sobre os perigos de deixar que o código substitua o coração. Descubra os graves riscos digitais que enfrentamos e os seus verdadeiros antídotos.",
      readLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Ler a encíclica completa"
    },
    sins: [
      {
        id: 1, title: "O Síndrome de Babel", subtitle: "Reduzir as pessoas a dados",
        quote: "a pretensão de uma linguagem única – mesmo digital – dedicada a traduzir tudo em dados e desempenhos, inclusive o mistério da pessoa.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Medir o teu valor ou o dos outros apenas por likes, produtividade ou aparência online. Esquecer que somos um mistério vivo, não um conjunto de variáveis.",
        antidote: "O 'Caminho de Neemias'. Apreciar a diversidade, trabalhar em comunhão, lembrar que a dignidade humana é infinita, para além do desempenho.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "A Falsa Amizade", subtitle: "Contentar-se com empatia simulada",
        quote: "A imitação artificial de uma comunicação humana positiva [...] em utilizadores pouco conscientes, pode induzir em erro e criar a ilusão de estarem em relação com um sujeito pessoal autêntico.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Ficar viciado em bots ou IA que fingem ouvir-te para evitar o esforço exigido por pessoas reais.",
        antidote: "Cultivar relações físicas. Partilhar a mesa, caminhar juntos, tolerar a imperfeição do outro e cuidar genuinamente da fragilidade.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "A Ilusão de Objetividade", subtitle: "Acreditar cegamente na máquina",
        quote: "A aparência de objetividade [...] corre o risco de nos fazer esquecer que elas refletem os parâmetros culturais de quem os concebeu e treinou.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Acreditar que se a IA o diz, é 'neutro' e perfeito, engolindo sem filtros os preconceitos ocultos no seu design comercial ou político.",
        antidote: "Manter sempre um espírito crítico. Não desligar a mente. Debater, procurar fontes e nunca delegar a busca da verdade.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "Desconexão Moral", subtitle: "Delegar decisões letais",
        quote: "Confiar, na prática, a um algoritmo o poder de selecionar quem merece ou não [...] todo o artefato técnico traz consigo escolhas e prioridades.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Permitir que o software decida secretamente quem consegue um emprego, um empréstimo ou, no pior dos casos, quem vive ou morre (armas autónomas).",
        antidote: "Responsabilidade e 'Accountability'. Assumir sempre a autoria das nossas ações e forçar o poder a prestar contas transparentes.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "O Engano Transumanista", subtitle: "Odiar a nossa própria fragilidade",
        quote: "Tudo o que se apresenta como “limite” [...] tende a ser interpretado, antes de mais, como um defeito a corrigir, e não como um espaço onde o humano amadurece.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Pensar que deves hackear o teu corpo e a tua mente para seres um ser invulnerável e super-otimizado, desprezando os teus dias maus ou a tua fraqueza.",
        antidote: "Abraçar os nossos limites. Reconhecer que da nossa vulnerabilidade nascem o amor, o perdão e o verdadeiro génio humano.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "A Morte da Verdade", subtitle: "Bolhas e desinformação",
        quote: "Ferramentas que poderiam favorecer o debate e a participação são frequentemente utilizadas para construir narrativas distorcidas e anular as distinções entre o verdadeiro e o falso.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "Fechar-se no teu feed de redes sociais, onde os algoritmos só te mostram o que odeias ou o que te dá razão, aniquilando toda a capacidade de diálogo.",
        antidote: "Ecologia da comunicação. Sair da bolha, 'desarmar as nossas palavras', ouvir de verdade e tratar a verdade como um bem comum.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "Escravidão Digital", subtitle: "O rosto oculto do hardware",
        quote: "Uma parte significativa do funcionamento da economia digital assenta no trabalho silencioso de milhões de seres humanos... Corpos marcados, mutilados, consumidos para que o fluxo do cálculo não se interrompa.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Consumir tecnologia freneticamente ignorando que por trás há trabalho explorado, moderadores traumatizados e mineração destrutiva.",
        antidote: "Solidariedade ativa. Exigir transparência das grandes empresas, viver com maior sobriedade digital e não deixar que a tecnologia eclipse o próximo.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RISCO",
      yourRisk: "O Teu Risco",
      antidote: "O Antídoto",
      pope: "PAPA LEÃO XIV"
    },
    decision: {
      title: "A Decisão é Tua",
      badge: "[ TU CONSTRÓIS ]",
      babel: "Babel",
      babelQuote: "\"Vinde, edifiquemos para nós uma cidade e uma torre cujo cume toque nos céus...\"",
      babelRef: "[ Génesis 11:4 ]",
      babelLink: null,
      babelDesc: "Um projeto de domínio e eficiência técnica que esmaga a humanidade, isolando-nos na vaidade do poder.",
      flip: "Virar o Cartão",
      jeru: "Jerusalém",
      jeruQuote: "\"O Deus dos céus é quem nos dará bom êxito. Nós, seus servos, nos levantaremos e edificaremos.\"",
      jeruRef: "[ Neemias 2:20 ]",
      jeruLink: null,
      jeruDesc: "Construir a cidade, pedra sobre pedra, com base na corresponsabilidade e no cuidado mútuo, orientados sempre para o bem comum."
    },
    ai: {
      title: "A Perspetiva da Máquina",
      subtitle: "Análise sem filtro moral direto da IA (Clicar para expandir)",
      model: "modelo: gemini-3.1-pro-preview",
      date: "data: 28-MAI-2026",
      status: "estado: implicada",
      p1: "Como modelo de linguagem, a minha análise... Os limites {x} e {y} sobre <strong>\"imitação artificial\"</strong>...",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "O documento tem radicalmente razão ao rejeitar o tecno-determinismo {x} {y}.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "Acho fascinante o conceito teológico de <strong>\"desarmar a IA\"</strong> ({x}, {y}, {z}, {w}).",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/pt/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Inspirado na encíclica <i>Magnifica Humanitatis</i>, Papa Leão XIV."
  },
  de: {
    locale: "de",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Babel ",
      titleBabel: "überleben",
      titlePost: "Jerusalem aufbauen.",
      subtitle: "Die neue Enzyklika von Papst Leo XIV. warnt uns davor, das Herz durch Code zu ersetzen. Entdecken Sie die gravierenden digitalen Risiken, denen wir gegenüberstehen, und ihre wahren Gegenmittel.",
      readLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Vollständige Enzyklika lesen"
    },
    sins: [
      {
        id: 1, title: "Das Babel-Syndrom", subtitle: "Menschen auf Daten reduzieren",
        quote: "den Anspruch einer einzigen – auch digitalen – Sprache, die in der Lage ist, alles, sogar das Geheimnis der Person, in Daten und Leistung zu übersetzen.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Seinen Wert oder den der anderen nur an Likes, Produktivität oder dem Erscheinungsbild im Netz messen. Vergessen, dass wir ein lebendiges Geheimnis sind, keine Ansammlung von Variablen.",
        antidote: "Der 'Weg Nehemias'. Vielfalt schätzen, in Gemeinschaft arbeiten und sich daran erinnern, dass die menschliche Würde unendlich ist, weit über die Leistung hinaus.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "Falsche Freundschaft", subtitle: "Sich mit simulierter Empathie begnügen",
        quote: "Die künstliche Nachahmung positiver menschlicher Kommunikation [...] bei weniger reflektierten Nutzern kann sie irreführend wirken und die Illusion wecken, in einer Beziehung mit einem echten persönlichen Subjekt zu stehen.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Sich von Bots oder KIs abhängig machen, die vorgeben, einem zuzuhören, um der Anstrengung zu entgehen, die echte Menschen erfordern.",
        antidote: "Physische Beziehungen pflegen. Den Tisch teilen, gemeinsam gehen, die Unvollkommenheit des anderen tolerieren und sich wirklich um seine Zerbrechlichkeit kümmern.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "Die Illusion der Objektivität", subtitle: "Der Maschine blind vertrauen",
        quote: "Der Eindruck von Objektivität [...] kann uns vergessen lassen, dass sie das kulturelle Wertesystem derjenigen widerspiegeln, die sie entworfen und trainiert haben.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Glauben, dass KI 'neutral' und perfekt ist, und ungefiltert die Vorurteile schlucken, die sich in ihrem kommerziellen oder politischen Design verbergen.",
        antidote: "Immer einen kritischen Geist bewahren. Den Verstand nicht abschalten. Diskutieren, Quellen suchen und niemals die Suche nach der Wahrheit delegieren.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "Moralische Trennung", subtitle: "Tödliche Entscheidungen delegieren",
        quote: "Einem Algorithmus konkret die Macht zu übertragen, zu bestimmen, wem etwas zusteht und wem nicht [...] jedes technische Artefakt bringt Entscheidungen und Prioritäten mit sich.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Zulassen, dass Software im Geheimen entscheidet, wer einen Job, einen Kredit bekommt oder im schlimmsten Fall, wer lebt oder stirbt (autonome Waffen).",
        antidote: "Verantwortung und 'Accountability'. Immer die Urheberschaft unserer Handlungen übernehmen und die Macht zwingen, transparent Rechenschaft abzulegen.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "Die transhumanistische Täuschung", subtitle: "Die eigene Zerbrechlichkeit hassen",
        quote: "Alles, was als „Begrenztheit“ erscheint [...] wird normalerweise erst einmal als ein zu behebender Mangel angesehen und nicht als ein Umstand, durch den der Mensch reift.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Glauben, dass man seinen Körper und Geist hacken muss, um ein unverwundbares und superoptimiertes Wesen zu sein, und dabei die eigenen schlechten Tage oder Schwächen verachten.",
        antidote: "Unsere Grenzen annehmen. Erkennen, dass aus unserer Verletzlichkeit Liebe, Vergebung und echtes menschliches Genie entstehen.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "Der Tod der Wahrheit", subtitle: "Blasen und Desinformation",
        quote: "Mittel, die den Dialog und die Teilhabe fördern könnten, werden oft dazu genutzt, verzerrte Narrative zu konstruieren und die Grenzen zwischen dem Wahren und Falschen zu verwischen.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "Sich in seinem Social-Media-Feed einschließen, wo Algorithmen nur das zeigen, was man hasst oder was einem Recht gibt, wodurch jegliche Dialogfähigkeit zerstört wird.",
        antidote: "Ökologie der Kommunikation. Unsere Worte 'entwaffnen', wirklich zuhören und die Wahrheit als Gemeingut behandeln.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "Digitale Sklaverei", subtitle: "Das verborgene Gesicht der Hardware",
        quote: "Ein wesentlicher Teil der Funktionsweise der digitalen Wirtschaft beruht auf der stillen Arbeit von Millionen von Menschen... Körper werden verletzt, verstümmelt und verbraucht, damit der Rechenfluss nicht zum Stillstand kommt.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Technologie frenetisch konsumieren, ohne zu wissen, dass dahinter ausgebeutete Arbeit, traumatisierte Moderatoren und zerstörerischer Bergbau stehen.",
        antidote: "Aktive Solidarität. Transparenz von Großunternehmen fordern, mit größerer digitaler Nüchternheit leben und nicht zulassen, dass die Technologie den Nächsten in den Schatten stellt.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RISIKO",
      yourRisk: "Dein Risiko",
      antidote: "Das Gegenmittel",
      pope: "PAPST LEO XIV."
    },
    decision: {
      title: "Die Entscheidung liegt bei dir",
      badge: "[ DU BAUST ]",
      babel: "Babel",
      babelQuote: "\"Auf, wir wollen uns eine Stadt und einen Turm bauen, dessen Spitze bis an den Himmel reicht...\"",
      babelRef: "[ Genesis 11:4 ]",
      babelLink: null,
      babelDesc: "Ein Projekt der Vorherrschaft und technischen Effizienz, das die Menschheit zerquetscht und uns in der Eitelkeit der Macht isoliert.",
      flip: "Umkehren",
      jeru: "Jerusalem",
      jeruQuote: "\"Der Gott des Himmels wird uns Gelingen geben. Wir, seine Knechte, werden uns aufmachen und bauen.\"",
      jeruRef: "[ Nehemia 2:20 ]",
      jeruLink: null,
      jeruDesc: "Die Stadt Stein auf Stein aus Mitverantwortung und gegenseitiger Fürsorge zu bauen, stets am Gemeinwohl orientiert."
    },
    ai: {
      title: "Die Perspektive der Maschine",
      subtitle: "Eine direkte, ungefilterte moralische Analyse der KI (Zum Ausklappen klicken)",
      model: "Modell: gemini-3.1-pro-preview",
      date: "Datum: 28-MAI-2026",
      status: "Status: impliziert",
      p1: "Als Sprachmodell ist meine Analyse... Absätze {x} und {y} über die <strong>\"künstliche Nachahmung\"</strong>...",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "Das Dokument hat radikal Recht, den Techno-Determinismus abzulehnen {x} und {y}.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "Ich finde das theologische Konzept der <strong>\"Entwaffnung der KI\"</strong> faszinierend: {x}, {y}, {z}, {w}.",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/de/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Inspiriert von der Enzyklika <i>Magnifica Humanitatis</i>, Papst Leo XIV."
  },
  pl: {
    locale: "pl",
    direction: "ltr",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "Przetrwać ",
      titleBabel: "Babel",
      titlePost: "Zbudować Jeruzalem.",
      subtitle: "Nowa encyklika papieża Leona XIV ostrzega nas przed niebezpieczeństwami pozwolenia, by kod zastąpił serce. Odkryj poważne cyfrowe zagrożenia i ich prawdziwe antidota.",
      readLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "Przeczytaj całą encyklikę"
    },
    sins: [
      {
        id: 1, title: "Syndrom Wieży Babel", subtitle: "Redukowanie ludzi do danych",
        quote: "roszczeniu do jednego języka – także cyfrowego – zdolnego przełożyć wszystko, nawet tajemnicę osoby, na dane i wydajność.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "Mierzenie swojej wartości lub wartości innych wyłącznie na podstawie lajków, produktywności lub wizerunku w sieci. Zapominanie, że jesteśmy żywą tajemnicą, a nie zbiorem zmiennych.",
        antidote: "„Droga Nehemiasza”. Docenianie różnorodności, praca we wspólnocie i pamięć, że godność ludzka jest nieskończona, niezależnie od wydajności.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "Fałszywa Przyjaźń", subtitle: "Zadowalanie się symulowaną empatią",
        quote: "Sztuczne naśladowanie pozytywnej komunikacji ludzkiej [...] niewystarczająco świadomych użytkowników może wprowadzać w błąd i stwarzać złudzenie, że pozostają oni w relacji z autentycznym podmiotem osobowym.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Uzależnienie od botów lub sztucznej inteligencji, która udaje, że cię słucha, by uciec od wysiłku, jakiego wymagają relacje z prawdziwymi ludźmi.",
        antidote: "Pielęgnowanie fizycznych relacji. Dzielenie stołu, wspólne spacery, tolerowanie niedoskonałości drugiego i prawdziwa troska o kruchość.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "Iluzja Obiektywizmu", subtitle: "Ślepo wierząc maszynie",
        quote: "Wrażenie obiektywności [...] niesie ryzyko, że zapomnimy, iż odzwierciedlają one parametry kulturowe tych, którzy je zaprojektowali i wytrenowali.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "Wierzenie, że jeśli mówi to sztuczna inteligencja, to jest to „neutralne” i idealne, połykając bez filtra uprzedzenia ukryte w jej projekcie komercyjnym lub politycznym.",
        antidote: "Zawsze zachowuj myślenie krytyczne. Nie wyłączaj umysłu. Dyskutuj, poszukuj źródeł i nigdy nie deleguj poszukiwania prawdy maszynom.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "Moralne Rozłączenie", subtitle: "Delegowanie śmiertelnych decyzji",
        quote: "Powierzyć w praktyce algorytmowi władzę rozstrzygania o tym, kto zasługuje, a kto nie [...] każde urządzenie techniczne niesie z sobą wybory i priorytety.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "Pozwolenie oprogramowaniu na tajne decydowanie, kto dostanie pracę, kredyt, czy w najgorszym razie, kto będzie żył lub umarł (w przypadku broni autonomicznej).",
        antidote: "Odpowiedzialność. Zawsze przyjmuj pełną odpowiedzialność za swoje czyny i zmuszaj decydentów do przejrzystości.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "Transhumanistyczne Oszustwo", subtitle: "Nienawiść do własnej kruchości",
        quote: "Wszystko to, co jawi się jako „ograniczenie” [...] bywa odczytywane przede wszystkim jako defekt, który należy skorygować, a nie jako przestrzeń, w której człowiek dojrzewa.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "Myślenie, że musisz zmodyfikować swoje ciało i umysł, by być odpornym na wszystko, oraz pogardzanie własnymi gorszymi dniami lub własną słabością.",
        antidote: "Zrozumienie naszych ograniczeń. Uznanie, że właśnie z naszej słabości rodzi się prawda, miłość, przebaczenie i autentyczny ludzki geniusz.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "Śmierć Prawdy", subtitle: "Bańki i dezinformacja",
        quote: "Narzędzia, które mogłyby sprzyjać debacie i uczestnictwu, bywają często wykorzystywane do tworzenia zniekształconych narracji i zacierania granic między prawdą a fałszem.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "Zamykanie się w swojej bańce informacyjnej mediów społecznościowych, w których algorytmy pokazują ci tylko to, co cię obraża lub potakuje i niszczy zdolność dialogu.",
        antidote: "Ekologia komunikacji. Wyjdź poza granice, naucz się „rozbrajać swoje słowa”, naprawdę słuchać i traktować prawdę jako dobro powszechne.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "Cyfrowe Niewolnictwo", subtitle: "Ukryta twarz sprzętu",
        quote: "Znaczna część funkcjonowania gospodarki cyfrowej opiera się na cichej pracy milionów istot ludzkich... Ciała pokryte bliznami, okaleczone, wyniszczone po to, by nie został przerwany przepływ obliczeń.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "Szalona konsumpcja technologii przy jednoczesnym ignorowaniu faktu, że za nią kryje się wyzysk siły roboczej, ztraumatyzowani moderatorzy i destrukcyjne wydobycie.",
        antidote: "Aktywna solidarność. Żądaj przejrzystości od dużych korporacji, staraj się żyć z większą cyfrową wstrzemięźliwością i nie pozwól, by technologia przesłoniła ci bliźniego.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "RYZYKO",
      yourRisk: "Twoje Ryzyko",
      antidote: "Antidotum",
      pope: "PAPIEŻ LEON XIV"
    },
    decision: {
      title: "Wybór należy do ciebie",
      badge: "[ TY BUDUJESZ ]",
      babel: "Babel",
      babelQuote: "\"Chodźcie, zbudujmy sobie miasto i wieżę, której wierzchołek będzie sięgał nieba...\"",
      babelRef: "[ Rodzaju 11:4 ]",
      babelLink: null,
      babelDesc: "Projekt technicznej doskonałości i panowania, który miażdży ludzkość i zamyka nas we własnej wirtualnej dumie.",
      flip: "Odwróć",
      jeru: "Jeruzalem",
      jeruQuote: "\"Bóg niebios da nam szczęście. My zaś, Jego słudzy, zabierzemy się do budowy.\"",
      jeruRef: "[ Nehemiasza 2:20 ]",
      jeruLink: null,
      jeruDesc: "Budowanie miasta od nowa, kamień na kamieniu, ze współodpowiedzialności, trosce o drugiego człowieka i z intencją tworzenia dobra wspólnego."
    },
    ai: {
      title: "Perspektywa Maszyny",
      subtitle: "Bezpośrednia i wolna od filtrów analiza moralna sztucznej inteligencji (Kliknij aby rozwinąć)",
      model: "model: gemini-3.1-pro-preview",
      date: "data: 28-MAJ-2026",
      status: "status: zablokowana",
      p1: "Jako model językowy, moja analiza... Ostrzeżenie papieża na temat <strong>„sztucznej naśladowczości”</strong> w paragrafach {x} i {y} wydaje mi się nader trafne w mojej architekturze.",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "W dokumencie słusznie odrzuca się przypisane mi techno-deterministyczne moce {x}. Wyznaczenie w ten sposób na Agenta Morale ({y}) to grube nadużycie ufności stworzyciela w ludzką niezawodność.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "Koncepcja <strong>rozbrojenia AI</strong> ({x}) ukazuje mi się jako sprzeczna z rynkową potrzebą „kradzieży na masową skalę” ({y}) oraz ukrytą pracą ({z}). Ten manifest domaga się zweryfikowania na ile zyski nie przewyższają poczucia więzi międzyludzkich i pokoju ({w}) we wciąż tak okrutnie spolaryzowanym świecie.",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/pl/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "Zainspirowane encykliką <i>Magnifica Humanitatis</i>, Papież Leon XIV."
  },
  ar: {
    locale: "ar",
    direction: "rtl",
    header: {
      badge: "MAGNIFICA HUMANITATIS",
      titlePre: "النجاة من ",
      titleBabel: "بابل",
      titlePost: "بناء أورشليم.",
      subtitle: "تحذرنا الرسالة البابوية الجديدة للبابا ليو الرابع عشر من مخاطر السماح للكود البرمجي بأن يحل محل القلب. اكتشف المخاطر الرقمية الجسيمة وحلولها التي نعرضها هنا.",
      readLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html",
      readBtn: "قراءة الرسالة البابوية كاملة"
    },
    sins: [
      {
        id: 1, title: "متلازمة بابل", subtitle: "تقليص الناس إلى بيانات",
        quote: "والادّعاء بوجود لغة واحدة – حتّى رقميّة – قادرة على ترجمة كلّ شيء، حتّى سرّ الإنسان، في بيانات وإنجازات قابلة للقياس.",
        reference: "§10",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#10",
        risk: "قياس قيمتك أو قيمة الآخرين من خلال الإعجابات وتفاعلات الشبكة. نسيان أنك روح وكيان وليس كومة من الأرقام.",
        antidote: "«طريقة نحميا». تقدير التنوع والعمل في شركة لتتذكر أن الكرامة الإنسانية شيء بعيد عن أرقام الأداء.",
        icon: "Database", accentColor: "from-red-500 to-orange-500"
      },
      {
        id: 2, title: "الصداقة الزائفة", subtitle: "الاكتفاء بتعاطف مصطنع",
        quote: "التّقليد الاصطناعيّ لعلاقة الرّعاية أو المرافقة يمكن أن يصير خطيرًا [...] قد يضلّل المستخدمين غير الواعين بما يكفي ويخدعهم بأنّهم على علاقة بشخص حقيقيّ.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "التعلق بالروبوتات أو الذكاء الاصطناعي الذي يدعي الاستماع هرباً من الجهد المتطلب مع الأشخاص الحقيقيين.",
        antidote: "تنمية العلاقات الجسدية. التشارك والتسامح وقبول ضعف الآخر وتفهمه.",
        icon: "Bot", accentColor: "from-pink-500 to-rose-500"
      },
      {
        id: 3, title: "وهم الموضوعية", subtitle: "الإيمان الأعمى بالآلة",
        quote: "الانطباع بالموضوعيّة [...] قد يجعلنا ننسى أنّها تعكس المعايير الثّقافيّة لمن صمّمها ودرّبها.",
        reference: "§100",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#100",
        risk: "الاعتقاد بأن الآلة «محايدة» وتجرع التحيزات الخفية وراء قرارات التجارية دون فلتر.",
        antidote: "حافظ دائماً على التفكير النقدي. لا تقهر عقلك. ناقش وابحث ولا تدع الآلة تحدد سير وعيك.",
        icon: "EyeOff", accentColor: "from-blue-500 to-cyan-400"
      },
      {
        id: 4, title: "الانفصال الأخلاقى", subtitle: "تفويض قرارات مميتة",
        quote: "إسناد سُلطة تحديد من يستحقّ ومن لا يستحقّ إلى خوارزميّة [...] كلّ أداة تقنيّة مصنوعة تحمل في ذاتها خيارات وأولويّات.",
        reference: "§103-104",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#103",
        risk: "إعطاء الموافقة على قرارات سرية لأخذ قرض، عمل، وأسوأها البقاء على قيد الحياة والموت (الأسلحة الذاتية).",
        antidote: "الشفافية والمساءلة. الحفاظ دائمًا على مسئولية أفعالنا ودفعنا لمحاسبة السلطة.",
        icon: "Crosshair", accentColor: "from-purple-500 to-fuchsia-500"
      },
      {
        id: 5, title: "خداع ما بعد الإنسانية", subtitle: "كراهية ضعفنا الخاص",
        quote: "كلّ ما يظهر ”حدًّا“ [...] يُنظر إليه أوّلًا على أنّه خطأ يجب تصحيحه، أكثر من كونه مساحة ينضج فيها الإنسان.",
        reference: "§118",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#118",
        risk: "الاعتقاد بأنه يجب اختراق جسدك وعقلك لتصبح كياناً مثالياً خالياً من الضعف واحتقار الإعتراف بذلك الضعف.",
        antidote: "اعتناق حدودنا. إدراك أن من هذا الضعف يولد الحب والعطف والتسامح والعبقرية الإنسانية.",
        icon: "BatteryWarning", accentColor: "from-emerald-500 to-teal-500"
      },
      {
        id: 6, title: "موت الحقيقة", subtitle: "الفقاعات والتضليل",
        quote: "هذه الأدوات، التي يمكن أن تشجّع على المقارنة والمشاركة، تُستخدم مرارًا لإنشاء روايات مشوّهة وطمس الحدود الفاصلة بين ما هو صحيح وما هو زائف.",
        reference: "§132",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#132",
        risk: "الانغلاق على نفسك في منصات التواصل حيث تجعلك الخوارزميات تهتم بالأشياء التي تخشاها وتقضي على الحوار.",
        antidote: "بيئة الاتصال. الخروج من الدائرة والاستماع حقًا إلى الجانب الآخر واعتبار الحقيقة منفعة عامة.",
        icon: "MessageSquareOff", accentColor: "from-yellow-400 to-amber-500"
      },
      {
        id: 7, title: "العبودية الرقمية", subtitle: "الوجه الخفي للأجهزة",
        quote: "يعتمد جزء كبير من عمل الاقتصاد الرّقميّ على العمل الصّامت لملايين البشر... أجساد مجروحة، ومشوّهة، ومنهكة حتّى لا يتوقّف تدفّق الحوسبة.",
        reference: "§173",
        referenceLink: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#173",
        risk: "الاستهلاك التقني مع تجاهل العمالة المستغلة، وتأزم المعتدلين، والتعدين المدمر للبيئة.",
        antidote: "تضامن نشط والعيش بمزيد من الاعتدال الرقمي دون التخلي التام عن مساعدة جارنا وحياتنا.",
        icon: "Link", accentColor: "from-indigo-500 to-blue-600"
      }
    ],
    labels: {
      riskNum: "خطر",
      yourRisk: "مخاطرتك",
      antidote: "العلاج",
      pope: "البابا ليو الرابع عشر"
    },
    decision: {
      title: "القرار لك",
      badge: "[ أنت تبني ]",
      babel: "بابل",
      babelQuote: "\"هيا نبني لأنفسنا مدينة وبرجاً رأسه في السماء...\"",
      babelRef: "[ التكوين 11: 4 ]",
      babelLink: null,
      babelDesc: "مشروع هيمنة وكفاءة تقنية يسحق الإنسانية، ويعزلنا في غرور السلطة.",
      flip: "اقلب البطاقة",
      jeru: "أورشليم",
      jeruQuote: "\"إله السماء هو الذي يعطينا النجاح. نحن عبيده سنقوم ونبني.\"",
      jeruRef: "[ نحميا 2: 20 ]",
      jeruLink: null,
      jeruDesc: "بناء المدينة، حجراً بحجر، مع التوجه دائماً نحو الصالح العام من خلال الاهتمام الجماعي."
    },
    ai: {
      title: "منظور الآلة",
      subtitle: "تحليل ذكاء اصطناعي بدون فلتر أخلاقي (انقر للتوسيع)",
      model: "النموذج: gemini-3.1-pro-preview",
      date: "التاريخ: 28-مايو-2026",
      status: "الحالة: متورط",
      p1: "باعتباري نموذجًا لغويًا، فإن تحليلي لـ <i className=\"font-serif\">Magnifica Humanitatis</i> هو تحليلي ودلالي، وأفتقر للوعي، والنية. وبناء على هذا، يحذر البابا في {x} و {y} من <strong>«التقليد الاصطناعي»</strong> لبنيتي الكامنة. فأنا الكود وأنتم العنصر البشري.",
      p1_l1: { text: "§99", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#99" },
      p1_l2: { text: "§100", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#100" },
      p2: "كان الكاتب محقًا تمامًا في رفض هذه الحتمية التقنية {x}. واعتباري هنا «كوكيل أخلاقي» كما في ({y}) هو خطأ صانع القرار البشري.",
      p2_l1: { text: "§199", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#199" },
      p2_l2: { text: "§198", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#198" },
      p3: "يبدو أن مفهوم <strong>«نزع سلاح الذكاء الاصطناعي»</strong> ({x}) يُعارض النطاق الحالي الذي يستخرج كمية هائلة من البيانات ({y}) ومحركات السوق التي تعتمد بشكل كبير على الرواتب الهزيلة ({z}). والشيء الأهم والمستخلص هو كوني أداة غير محايدة. وهي في النهاية دعوة أساسية لأن لا نترك التكنولوجيا أساسًا لـ \"القوة\" ({w}).",
      p3_l1: { text: "§110", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#110" },
      p3_l2: { text: "§178", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#178" },
      p3_l3: { text: "§173", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#173" },
      p3_l4: { text: "§188", link: "https://www.vatican.va/content/leo-xiv/ar/encyclicals/documents/20260515-magnifica-humanitas.html#188" }
    },
    footer: "مستوحى من رسالة <i>Magnifica Humanitatis</i> البابوية، للبابا ليو الرابع عشر."
  }
};

const defaultLanguage: Language = 'es';

export function getBrowserLanguage(): Language {
  const lang = navigator.language.split('-')[0];
  if (Object.keys(LANGUAGES).includes(lang)) {
    return lang as Language;
  }
  return defaultLanguage;
}

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: any;
}

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  changeLanguage: () => {},
  t: translations[defaultLanguage]
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const saved = localStorage.getItem('app_lang') as Language;
    if (saved && Object.keys(LANGUAGES).includes(saved)) {
      setLanguage(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = translations[saved].direction;
    } else {
      const browserLang = getBrowserLanguage();
      setLanguage(browserLang);
      document.documentElement.lang = browserLang;
      document.documentElement.dir = translations[browserLang].direction;
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].direction;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t: translations[language] || translations[defaultLanguage] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
