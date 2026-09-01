/**
 * Contenido editorial de la OCIA: objetivos, preguntas frecuentes y apoyos.
 * Adaptado desde la ONIA (Brasil).
 */

export type Objective = { title: string; text: string };

export const objectives: Objective[] = [
  {
    title: 'Alfabetización en IA',
    text: 'Desarrollar la comprensión de la inteligencia artificial e integrarla a la educación escolar, manteniendo el acceso abierto a todas y todos los estudiantes.',
  },
  {
    title: 'Revelar talentos',
    text: 'Identificar y motivar a jóvenes con proyección para que se dediquen a esta área del conocimiento.',
  },
  {
    title: 'Universidad y colegios',
    text: 'Fortalecer los vínculos entre las instituciones de educación superior y la comunidad escolar.',
  },
  {
    title: 'Pensamiento crítico',
    text: 'Cultivar el pensamiento analítico y crítico frente a los alcances y límites de la IA.',
  },
  {
    title: 'Democratizar el conocimiento',
    text: 'Llevar el conocimiento de la IA más allá del ámbito académico, hacia todo el país.',
  },
  {
    title: 'Competencia equitativa',
    text: 'Ofrecer una competencia justa e igualitaria, independiente de la ubicación geográfica de cada participante.',
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: '¿Tiene algún costo participar?',
    a: 'No. La OCIA es gratuita y de participación voluntaria.',
  },
  {
    q: '¿Necesito conocimientos previos de inteligencia artificial?',
    a: 'No para la Fase 1, que está pensada como una introducción para cualquier estudiante. Las fases siguientes suben de dificultad de manera progresiva.',
  },
  {
    q: '¿Quién puede inscribirse?',
    a: 'Estudiantes de 7° básico a 4° medio en las categorías de Enseñanza Básica y Media. Docentes y público general pueden participar en la Categoría Libre.',
  },
  {
    q: '¿Qué necesito para rendir las pruebas?',
    a: 'Un computador con conexión a internet. Las fases iniciales se rinden completamente en línea.',
  },
  {
    q: '¿Cómo me inscribo?',
    a: 'A través del formulario de inscripción en línea, disponible en la sección Inscripción de este sitio. Solo toma unos minutos.',
  },
  {
    q: '¿Cómo se llega a la IOAI?',
    a: 'Quienes avanzan por las cuatro fases llegan a la Fase 4 de entrenamiento. Las y los 4 mejores conforman el Equipo Chile para la Olimpiada Internacional de Inteligencia Artificial 2027.',
  },
];

/** Instituciones y apoyos. TODO: confirmar y completar. */
export const support = {
  organizer: {
    name: 'Sociedad Chilena de Programación Competitiva',
    text: 'Organización sin fines de lucro responsable de la Olimpiada Chilena de Informática, el Campamento de Invierno de Programación Competitiva (CIPC) y otras actividades de formación en computación.',
  },
  accreditation:
    'La OCIA cuenta con el reconocimiento del comité de la IOAI como la instancia oficial encargada de seleccionar al equipo que representa a Chile en la Olimpiada Internacional de Inteligencia Artificial.',
  partners: [] as { name: string; url?: string }[], // TODO: agregar auspiciadores y colaboradores
};
