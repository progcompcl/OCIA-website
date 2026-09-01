/**
 * Categorías de participación de la OCIA.
 * Adaptadas desde la ONIA (Brasil) al sistema escolar chileno.
 * TODO: confirmar rangos de curso exactos con la organización.
 */

export type Category = {
  id: string;
  name: string;
  who: string;
  detail: string;
  medals: boolean;
  toIOAI: boolean;
};

export const categories: Category[] = [
  {
    id: 'basica',
    name: 'Enseñanza Básica',
    who: 'Estudiantes de 7° y 8° básico',
    detail:
      'Participan en todas las fases, optan a medallas y pueden clasificar al Equipo Chile para la IOAI 2027.',
    medals: true,
    toIOAI: true,
  },
  {
    id: 'media',
    name: 'Enseñanza Media',
    who: 'Estudiantes de 1° a 4° medio',
    detail:
      'Participan en todas las fases, optan a medallas y pueden clasificar al Equipo Chile para la IOAI 2027.',
    medals: true,
    toIOAI: true,
  },
  {
    id: 'libre',
    name: 'Categoría Libre',
    who: 'Docentes y público general',
    detail:
      'Para cualquier persona interesada en aprender sobre IA. Participa en las fases del Ciclo Básico, sin optar a medallas ni a la selección nacional. Especialmente recomendada para docentes.',
    medals: false,
    toIOAI: false,
  },
];
