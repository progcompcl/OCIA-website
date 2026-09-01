/**
 * Calendario de la OCIA 2026-2027.
 * Fechas alineadas con la 3ª ONIA (Brasil).
 */

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
  status: 'hito' | 'prueba' | 'por confirmar';
};

export const timeline: TimelineItem[] = [
  {
    date: '8 de agosto de 2026',
    title: 'Apertura de inscripciones',
    description: 'Se abre el registro de estudiantes y docentes. La inscripción es gratuita.',
    status: 'hito',
  },
  {
    date: '8 – 20 de septiembre de 2026',
    title: 'Fase 1 · Alfabetización Digital',
    description: 'Prueba en línea, sin conocimientos previos, con dos semanas de ventana.',
    status: 'prueba',
  },
  {
    date: '19 – 31 de octubre de 2026',
    title: 'Fase 2 · Etapa 1',
    description: 'Primera etapa de la Profundización Técnica, en línea.',
    status: 'prueba',
  },
  {
    date: '7 – 13 de diciembre de 2026',
    title: 'Fase 2 · Etapa 2',
    description: 'Segunda etapa de la Profundización Técnica, en línea.',
    status: 'prueba',
  },
  {
    date: 'Diciembre de 2026',
    title: 'Ceremonia de premiación',
    description: 'Entrega de medallas del Ciclo Básico. Fecha exacta por confirmar.',
    status: 'por confirmar',
  },
  {
    date: 'Primer semestre de 2027',
    title: 'Fase 3 · Desarrollo de Competencias Básicas',
    description: 'Evaluaciones prácticas con herramientas de IA. Fechas por confirmar.',
    status: 'por confirmar',
  },
  {
    date: 'Primer semestre de 2027',
    title: 'Fase 4 · Entrenamiento IOAI',
    description: 'Entrenamiento con especialistas y selección del Equipo Chile. Fechas por confirmar.',
    status: 'por confirmar',
  },
  {
    date: '2027',
    title: 'IOAI 2027 · Singapur',
    description: 'El Equipo Chile representa al país en la Olimpiada Internacional de IA.',
    status: 'hito',
  },
];
