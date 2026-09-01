# OCIA — Sitio web

Sitio de la **Olimpiada Chilena de Inteligencia Artificial (OCIA)**, organizada por la
Sociedad Chilena de Programación Competitiva.

Construido con [Astro](https://astro.build). Sitio estático, sin base de datos.

- Contenido (fases, categorías, calendario) inspirado en la
  [ONIA de Brasil](https://www.oniabrasil.com.br), adaptado a Chile.
- Diseño inspirado en la [Olimpiada Chilena de Informática](https://www.olimpiada-informatica.cl),
  con un tema visual propio en torno a la inteligencia artificial.

## Requisitos

- Node.js **22+** (el proyecto declara `engines.node >= 22.12`).

## Comandos

| Comando            | Acción                                                   |
| ------------------ | -------------------------------------------------------- |
| `npm install`      | Instala dependencias                                     |
| `npm run dev`      | Servidor de desarrollo en `localhost:4321`               |
| `npm run build`    | Compila el sitio a `./dist/`                             |
| `npm run preview`  | Previsualiza el build de producción                      |
| `npm run astro check` | Chequeo de tipos y diagnósticos                       |

> **Nota sobre WSL + OneDrive:** este repо está en una ruta de OneDrive montada en
> `/mnt/c/...`. El servidor de desarrollo de Astro puede arrancar muy lento o fallar
> ahí por la lentitud de E/S y la sincronización de OneDrive. Para desarrollar cómodo,
> clona el repositorio en una ruta nativa de Linux (p. ej. `~/proyectos/OCIA-website`).
> `npm run build` funciona sin problema en cualquier ruta.

## Estructura

```
src/
├── components/     Header, Footer, Logo, PhaseCard, Timeline, NeuralField, ...
├── content/
│   └── noticias/   Noticias en Markdown (colección de contenido)
├── content.config.ts
├── data/           Datos del sitio: site, phases, categories, timeline, content
├── layouts/
│   └── BaseLayout.astro
├── pages/          Una ruta por archivo (index, acerca, fases, prensa/, ...)
└── styles/
    └── global.css  Sistema de diseño (design tokens + utilidades)
```

## Contenido por completar

Los valores pendientes están marcados con `TODO` en el código, principalmente en
`src/data/site.ts` y `src/data/content.ts`:

- PDF del reglamento oficial.
- Auspiciadores y colaboradores.
- Rangos de curso exactos por categoría.
- Fechas de las Fases 3 y 4 (primer semestre de 2027).

Las fechas de 2026 siguen el calendario de la 3ª ONIA de Brasil.

## Despliegue

Se publica en **GitHub Pages** con GitHub Actions: cada push a `main` dispara
`.github/workflows/deploy.yml`, que compila el sitio y lo publica.

- Dominio: `olimpiada-inteligencia-artificial.cl` (definido en `astro.config.mjs`,
  `src/data/site.ts` y `public/CNAME`).
- Requisitos en el repositorio: visibilidad pública y **Settings → Pages → Source:
  GitHub Actions**.
- DNS del dominio raíz apuntando a los registros A/AAAA de GitHub Pages, más un
  CNAME `www → progcompcl.github.io`. Activar *Enforce HTTPS* una vez validado.
