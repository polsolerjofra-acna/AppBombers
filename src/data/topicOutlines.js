import { OUTLINES_PART1 } from './outlines_part1.js';
import { OUTLINES_PART2 } from './outlines_part2.js';
import { OUTLINES_PART3 } from './outlines_part3.js';

/**
 * Esquemes complets per pàgina per als 34 temes oficials (SGO 2026).
 * Els temes amb subtemes ben diferenciats (com Tema 1: Constitució, Estatut i Llei 13/1989)
 * disposen d'una pàgina sencera d'esquema per cada bloc.
 */
export const TOPIC_OUTLINES = {
  ...OUTLINES_PART1,
  ...OUTLINES_PART2,
  ...OUTLINES_PART3
};
