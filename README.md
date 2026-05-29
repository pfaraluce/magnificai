# Sobrevivir a Babel | Magnifica Humanitatis

Una guía visual, práctica y moderna dirigida a los jóvenes, basada en la encíclica *Magnifica Humanitatis* del Papa León XIV (15 de mayo de 2026). 

Esta aplicación presenta un recorrido por los riesgos éticos y antropológicos de la Inteligencia Artificial (IA) estructurados a modo de "pecados capitales" contemporáneos, contrastándolos con los "antídotos" propuestos por la Doctrina Social de la Iglesia. El diseño está pensado para romper con los esquemas tradicionales, ofreciendo una experiencia interactiva sin caer en el tecno-optimismo ciego o el "AI-slop".

En última instancia, nos plantea una elección existencial: ¿Construiremos una nueva Torre de Babel o ayudaremos a reconstruir la Jerusalén de la convivencia fraterna?

[▶️ Ver el proyecto en línea](https://magnificai.netlify.app/)

## Características principales

- **Pecados Capitales Digitales**: Lista interactiva de los riesgos de la IA citados en el texto papal (Ej. *El Síndrome de Babel*, *La Falsa Amistad*, *La Muerte de la Verdad*).
- **Soporte Multi-idioma (i18n)**: La aplicación detecta automáticamente el idioma de tu navegador o dispositivo y está traducida a 8 idiomas (Español, Inglés, Francés, Italiano, Portugués, Alemán, Polaco y Árabe), incluyendo soporte nativo para lectura de derecha a izquierda (RTL) para árabe.
- **Diseño Rompedor UI/UX**: Interfaces oscuras con acentos de color vibrantes, tipografías expresivas (*Space Grotesk*) y animaciones fluidas.
- **La Decisión es Tuya**: Elemento interactivo que ilustra la dualidad entre la Torre de Babel (el dominio tecnológico desmedido) y la reconstrucción de Jerusalén (el bien común).
- **La Perspectiva de la Máquina**: Una sección especial desplegable ("AiAddendum") donde la propia Inteligencia Artificial reflexiona ontológicamente sobre el texto, reconociendo sus límites como modelo estadístico frente a la naturaleza espiritual humana.
- **Optimizado para Compartir**: Tarjetas Open Graph y Twitter preparadas para redes sociales (`og-image.png`).

## Tecnologías utilizadas

- [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (FKA Framer Motion)
- [Lucide React](https://lucide.dev/) para la iconografía

## Configuración y Despliegue

Este proyecto está configurado para ser desplegado fácilmente en **Netlify** (y contiene el archivo `netlify.toml` preparado para ello).

### Instalación local

1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Construcción para producción

Prepara el compilado optimizado en la carpeta `dist`:
```bash
npm run build
```

## Contexto

El contenido extrae citas literales del documento pontificio para acompañar el trabajo de reflexión y discernimiento ético en el área digital, una de las mayores encrucijadas de nuestro tiempo: 
_"Las innovaciones tecnológicas —incluida la inteligencia artificial— no son neutrales; pueden aumentar la participación y la justicia, o ampliar las desigualdades, el control y la exclusión."_ ([Magnifica Humanitatis, §85](https://www.vatican.va/content/leo-xiv/es/encyclicals/documents/20260515-magnifica-humanitas.html#85)).

---
*Desarrollado con ❤️ para iluminar el debate sobre la IA.*
