import { tema1Constitucio } from './topics/tema1_constitucio';
import { tema2FuncioPublica } from './topics/tema2_funcio_publica';
import { tema3PrlEpi } from './topics/tema3_prl_epi';
import { tema4IgualtatAssetjament } from './topics/tema4_igualtat_assetjament';
import { tema5PoliticaLinguistica } from './topics/tema5_politica_linguistica';
import { tema6LleiBombersPc } from './topics/tema6_llei_bombers_pc';
import { tema7GuardiaOrganigrama } from './topics/tema7_guardia_organigrama';
import { tema1TeoriaFoc } from './topics/tema1_teoria_foc';
import { tema17Fisica } from './topics/tema17_fisica';
import { tema2Quimica } from './topics/tema2_quimica';
import { tema18Electricitat } from './topics/tema18_electricitat';
import { tema19Instalacions } from './topics/tema19_instalacions';
import { tema16Hidraulica } from './topics/tema16_hidraulica';
import { tema20Cartografia } from './topics/tema20_cartografia';
import { tema21Construccio } from './topics/tema21_construccio';
import { tema3AssistenciesTecniques } from './topics/tema3_assistencies_tecniques';
import { tema4Comunicacions } from './topics/tema4_comunicacions';
import { tema5Vehicles } from './topics/tema5_vehicles';
import { tema22ConduccioMecanica } from './topics/tema22_conduccio_mecanica';
import { tema6EpiEra } from './topics/tema6_epi_era';
import { tema7ProteccioCivil } from './topics/tema7_proteccio_civil';
import { tema23Siscom } from './topics/tema23_siscom';
import { tema8PrevencioIncendis } from './topics/tema8_prevencio_incendis';
import { tema9IncendisEstructurals } from './topics/tema9_incendis_estructurals';
import { tema10IncendisForestals } from './topics/tema10_incendis_forestals';
import { tema11IncendisVaris } from './topics/tema11_incendis_varis';
import { tema12RiscosNrbq } from './topics/tema12_riscos_nrbq';
import { tema13AssistenciaSanitaria } from './topics/tema13_assistencia_sanitaria';
import { tema24Imv } from './topics/tema24_imv';
import { tema25Colapses } from './topics/tema25_colapses';
import { tema26MediNatural } from './topics/tema26_medi_natural';
import { tema14AccidentsMobilitat } from './topics/tema14_accidents_mobilitat';
import { tema15RescatUrba } from './topics/tema15_rescat_urba';
import { tema27Inundacions } from './topics/tema27_inundacions';
import { QUESTIONS_81_25_BY_TOPIC } from './questions_81_25';
import { QUESTIONS_SIMULACRE_81_26_BY_TOPIC } from './questions_simulacre_81_26';
import { QUESTIONS_SIM_125 } from './questions_sim_125';
import { QUESTIONS_SIM_126 } from './questions_sim_126';
import { QUESTIONS_SIM_127 } from './questions_sim_127';
import { QUESTIONS_SIM_128 } from './questions_sim_128';
import { QUESTIONS_SIM_129 } from './questions_sim_129';
import { QUESTIONS_SIM_130 } from './questions_sim_130';

const ALL_SIMULACRE_ACAD_QUESTIONS = [
  ...QUESTIONS_SIM_125,
  ...QUESTIONS_SIM_126,
  ...QUESTIONS_SIM_127,
  ...QUESTIONS_SIM_128,
  ...QUESTIONS_SIM_129,
  ...QUESTIONS_SIM_130
].map((q, idx) => ({
  ...q,
  id: q.id || `sim-acad-${idx + 1}`
}));

/**
 * Registre complet dels 34 temes oficials (Temes 1 al 34 sense cap buit!):
 * - Tema 1  (Bloc General): Constitució Espanyola (1978), Estatut d'Autonomia (LO 6/2006) i Llei 13/1989
 * - Tema 2  (Bloc General): La Funció Pública (DL 1/1997, EBEP RDL 5/2015, Llei 21/1987, D 243/1995)
 * - Tema 3  (Bloc General): Prevenció de Riscos Laborals (Llei 31/1995) i EPI (RD 773/1997, UE 2016/425)
 * - Tema 4  (Bloc General): Igualtat de tracte i no-discriminació (Lleis 19/2020, 17/2015 i Protocol 2023)
 * - Tema 5  (Bloc General): Política Lingüística (Llei 1/1998, arts. 1–17)
 * - Tema 6  (Bloc General): Llei 5/1994 de Bombers (amb DL 14/2025) i Llei 4/1997 de Protecció Civil
 * - Tema 7  (Bloc General): Guàrdia (D 276/2016) i Organigrama d'Interior (D 12/2023 + D 16/2026)
 * - Tema 8  (MAN.GRAL.008): Teoria del foc i agents extintors
 * - Tema 9  (MAN.GRAL.003): Física, Geometria, Mecànica Clàssica i Màquines Simples [Càlcul + Formulari Final]
 * - Tema 10 (MAN.GRAL.004): Química, Lleis dels Gasos, Estequiometria i Termoquímica [Càlcul + Formulari Final]
 * - Tema 11 (MAN.GRAL.005): Electricitat, Lleis de Càlcul, Circuits AC/DC i Riscos Elèctrics [Càlcul + Formulari Final]
 * - Tema 12 (MAN.GRAL.007): Instal·lacions Elèctriques, d'Aigua, Sanejament i Gas
 * - Tema 13 (MAN.GRAL.009): Hidràulica, Bombes i Instal·lacions d'Extinció [Càlcul + Formulari Final]
 * - Tema 14 (MAN.GRAL.002): Cartografia, Coordenades UTM, Orientació i Cartografia Operativa (COE)
 * - Tema 15 (MAN.GRAL.006): Construcció, Esforços Mecànics, Materials i Sistemes Estructurals
 * - Tema 16 (MAN.ATXX.000): Intervenció en assistències tècniques
 * - Tema 17 (MAN.COMU.000): Comunicacions per ràdio
 * - Tema 18 (MAN.EQIP.000): Vehicles d'intervenció en emergències
 * - Tema 19 (MAN.EQIP.002): Conducció d'Emergència, Tracció 4×4, Diferencials i Mecànica Bàsica
 * - Tema 20 (MAN.SEGU.000): Equips de protecció individual d'intervenció en emergències
 * - Tema 21 (MAN.GRAL.001): Introducció a la gestió d'emergències i el sistema de protecció civil
 * - Tema 22 (MAN.COMD.001): Principis i Característiques del Sistema de Comandament (SISCOM)
 * - Tema 23 (MAN.SP.000):   Prevenció bàsica d'incendis
 * - Tema 24 (MAN.INES.000): Intervenció bàsica en incendis estructurals
 * - Tema 25 (MAN.INVE.000): Intervenció bàsica en incendis forestals
 * - Tema 26 (MAN.INXX.000): Intervenció bàsica en incendis varis
 * - Tema 27 (MAN.RRTT.000): Intervenció bàsica en riscos NRBQ
 * - Tema 28 (MAN.SANI.000): Intervenció bàsica en assistència sanitària
 * - Tema 29 (MAN.SANI.001): Intervenció Bàsica en Incidents de Múltiples Víctimes (IMV) i Triatge START
 * - Tema 30 (MAN.SVES.000): Intervenció Bàsica en Estructures Col·lapsades, Apuntalaments i INSARAG
 * - Tema 31 (MAN.SVMN.000): Intervenció Bàsica en Salvaments i Recerques en el Medi Natural Terrestre
 * - Tema 32 (MAN.SVVH.000): Intervenció bàsica en accidents de mobilitat viària
 * - Tema 33 (MAN.SVXX.000): Intervenció bàsica en rescat urbà
 * - Tema 34 (MAN.SVMN.001): Intervenció Bàsica en Inundacions, Hidrologia, Llindars SMC i Rescat Aquàtic
 */
export const TOPICS = [
  tema1Constitucio,
  tema2FuncioPublica,
  tema3PrlEpi,
  tema4IgualtatAssetjament,
  tema5PoliticaLinguistica,
  tema6LleiBombersPc,
  tema7GuardiaOrganigrama,
  tema1TeoriaFoc,
  tema17Fisica,
  tema2Quimica,
  tema18Electricitat,
  tema19Instalacions,
  tema16Hidraulica,
  tema20Cartografia,
  tema21Construccio,
  tema3AssistenciesTecniques,
  tema4Comunicacions,
  tema5Vehicles,
  tema22ConduccioMecanica,
  tema6EpiEra,
  tema7ProteccioCivil,
  tema23Siscom,
  tema8PrevencioIncendis,
  tema9IncendisEstructurals,
  tema10IncendisForestals,
  tema11IncendisVaris,
  tema12RiscosNrbq,
  tema13AssistenciaSanitaria,
  tema24Imv,
  tema25Colapses,
  tema26MediNatural,
  tema14AccidentsMobilitat,
  tema15RescatUrba,
  tema27Inundacions
]
  .sort((a, b) => (a.number || 0) - (b.number || 0))
  .map((topic) => ({
    ...topic,
    pages: (topic.pages || []).slice(0, 10),
    quiz: [
      ...(topic.quiz || []),
      ...(QUESTIONS_81_25_BY_TOPIC[topic.number] || []),
      ...(QUESTIONS_SIMULACRE_81_26_BY_TOPIC[topic.number] || []),
      ...ALL_SIMULACRE_ACAD_QUESTIONS.filter((q) => q.topic === topic.number)
    ]
  }));
