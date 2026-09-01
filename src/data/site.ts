/**
 * Configuración global del sitio de la OCIA.
 * Los valores marcados con "TODO" deben confirmarse con la organización.
 */

export const site = {
  name: 'OCIA',
  longName: 'Olimpiada Chilena de Inteligencia Artificial',
  tagline: 'La olimpiada nacional que forma y selecciona a los estudiantes que representarán a Chile en la IOAI.',
  edition: 'Edición 2026',
  url: 'https://olimpiada-inteligencia-artificial.cl',
  locale: 'es-CL',
  organizer: 'Sociedad Chilena de Programación Competitiva',
  organizerUrl: 'https://www.olimpiada-informatica.cl',
  email: 'contacto@progcomp.cl',
  // Página de inscripción del sitio (embebe el Google Form).
  registerUrl: '/inscripcion/',
  // Google Form de inscripción. `registerFormUrl` se abre en una pestaña nueva;
  // `registerFormEmbedUrl` es la misma URL con ?embedded=true para el iframe.
  registerFormUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSc5ZPWJ9DF8rs4ArrVcDv1EszF6yO7GGJ_bFmILgYD626urcg/viewform',
  registerFormEmbedUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSc5ZPWJ9DF8rs4ArrVcDv1EszF6yO7GGJ_bFmILgYD626urcg/viewform?embedded=true',
  // TODO: PDF del reglamento
  rulesPdf: '#',
  social: {
    instagram: 'https://www.instagram.com/progcompcl/',
    github: 'https://github.com/progcompcl',
  },
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: 'Acerca', href: '/acerca/' },
  { label: 'Objetivos', href: '/objetivos/' },
  { label: 'Categorías', href: '/categorias/' },
  { label: 'Fases', href: '/fases/' },
  { label: 'Calendario', href: '/calendario/' },
  { label: 'Reglamento', href: '/reglamento/' },
  { label: 'IOAI', href: '/ioai/' },
  { label: 'Inscripción', href: '/inscripcion/' },
  { label: 'Prensa', href: '/prensa/' },
];
