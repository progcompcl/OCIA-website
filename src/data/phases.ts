/**
 * Ciclos y fases de la OCIA.
 * Fechas alineadas con la 3ª ONIA (Brasil) — https://www.oniabrasil.com.br
 * Las fases 3 y 4 aún no tienen fechas definitivas.
 */

export type Phase = {
  id: string;
  cycle: 'Ciclo Básico' | 'Ciclo Preparatorio';
  number: number;
  name: string;
  dates: string;
  format: string;
  summary: string;
  details: string[];
  status: 'confirmada' | 'por confirmar';
};

export const cycles = [
  {
    id: 'basico',
    name: 'Ciclo Básico',
    blurb:
      'Abierto a todas y todos. Dos fases en línea para acercarse a la inteligencia artificial sin necesidad de conocimientos previos.',
  },
  {
    id: 'preparatorio',
    name: 'Ciclo Preparatorio',
    blurb:
      'Para quienes avanzan desde el Ciclo Básico. Trabajo práctico con herramientas de IA y entrenamiento rumbo a la IOAI.',
  },
] as const;

export const phases: Phase[] = [
  {
    id: 'fase-1',
    cycle: 'Ciclo Básico',
    number: 1,
    name: 'Alfabetización Digital',
    dates: '8 al 20 de septiembre de 2026',
    format: 'En línea · preguntas objetivas · sin límite de tiempo por intento',
    summary:
      'Una primera prueba pensada para desmitificar la IA. No se requieren conocimientos previos y se permite investigar durante las dos semanas de la ventana.',
    details: [
      'Fundamentos e historia de la inteligencia artificial.',
      'Ciberseguridad, ética y uso responsable.',
      'Aplicaciones cotidianas de la IA.',
      'Se responde en línea, en cualquier momento dentro de la ventana.',
    ],
    status: 'confirmada',
  },
  {
    id: 'fase-2',
    cycle: 'Ciclo Básico',
    number: 2,
    name: 'Profundización Técnica',
    dates: 'Etapa 1: 19 al 31 de octubre de 2026 · Etapa 2: 7 al 13 de diciembre de 2026',
    format: 'En línea · dos etapas · una semana por etapa',
    summary:
      'Más exigente que la Fase 1. Se abordan conceptos avanzados, aplicaciones reales y las implicancias sociales, políticas y de seguridad de la IA. Se permite investigar.',
    details: [
      'Conceptos avanzados de aprendizaje automático.',
      'Casos de uso reales y sus límites.',
      'Impacto social, político y de seguridad de la IA.',
      'Cada etapa dura una semana; ambas cuentan para el puntaje.',
    ],
    status: 'confirmada',
  },
  {
    id: 'fase-3',
    cycle: 'Ciclo Preparatorio',
    number: 3,
    name: 'Desarrollo de Competencias Básicas',
    dates: 'Primer semestre de 2027 · fechas por confirmar',
    format: 'Evaluaciones teóricas y prácticas con herramientas de IA',
    summary:
      'Trabajo individual, con consulta permitida, sobre problemas prácticos: análisis de conjuntos de datos, construcción de soluciones y documentación de la metodología. Identifica a las candidatas y candidatos con proyección a la IOAI.',
    details: [
      'Análisis de datasets entregados por la organización.',
      'Construcción de soluciones según especificaciones.',
      'Documentación del razonamiento y la metodología.',
      'Trabajo individual con consulta de material permitida.',
    ],
    status: 'por confirmar',
  },
  {
    id: 'fase-4',
    cycle: 'Ciclo Preparatorio',
    number: 4,
    name: 'Entrenamiento y Preparación para la IOAI',
    dates: 'Primer semestre de 2027 · fechas por confirmar',
    format: 'Entrenamiento obligatorio con instrucción de especialistas',
    summary:
      'Programa intensivo con tareas y problemas de nivel IOAI. Al finalizar, las y los 4 mejores integran el Equipo Chile para la IOAI 2027.',
    details: [
      'Clases y tutorías con especialistas en IA.',
      'Problemas de nivel de la olimpiada internacional.',
      'Asistencia obligatoria a las actividades de entrenamiento.',
      'Selección final del equipo de 4 estudiantes.',
    ],
    status: 'por confirmar',
  },
];
