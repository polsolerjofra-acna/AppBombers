import React, { useState, useMemo, useEffect } from 'react';
import {
  GraduationCap,
  Clock,
  Users,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Sparkles,
  Mail,
  PlusCircle
} from 'lucide-react';

const PRIVATE_DURATIONS = [
  { id: '15m', label: '15 minuts', price: 10, desc: 'Resolució ràpida de dubtes concrets o fórmules.' },
  { id: '30m', label: '30 minuts', price: 20, desc: 'Repàs enfocat d\'un apartat o supòsit pràctic.' },
  { id: '60m', label: '1 hora', price: 40, desc: 'Classe completa de tema, càlculs o simulacre comentat.' }
];

const DEFAULT_GROUP_CLASSES = [
  {
    id: 'grp-hidraulica-1',
    title: 'Hidràulica d\'Examen: Pèrdues de Càrrega, Venturi i Bombes en Sèrie',
    topicLabel: 'Tema 13 · Hidràulica i Bombes',
    dateLabel: 'Dimecres · 19:00 – 21:00 h',
    durationHours: 2,
    pricePerPerson: 25,
    minPeople: 4,
    participants: ['Pol Soler Jofra', 'Marc V.'],
    notes: 'Sessió 100% pràctica amb problemes tipus 81/25 i 81/26.'
  },
  {
    id: 'grp-gasos-quimica-2',
    title: 'Química, Estequiometria i Lleis dels Gasos Ideals (Kelvin sense errors)',
    topicLabel: 'Tema 10 · Química i Termoquímica',
    dateLabel: 'Divendres · 18:00 – 20:00 h',
    durationHours: 2,
    pricePerPerson: 25,
    minPeople: 4,
    participants: ['Laura G.'],
    notes: 'Inclou reactiu limitant, Boyle, Charles, Gay-Lussac i PV=nRT.'
  },
  {
    id: 'grp-lleis-sgo-3',
    title: 'Bloc Jurídic + Llei 5/1994, Decret 16/2026 i Protecció Civil',
    topicLabel: 'Temes 1–7 · Bloc General / Lleis',
    dateLabel: 'Dissabte · 10:00 – 12:00 h',
    durationHours: 2,
    pricePerPerson: 25,
    minPeople: 4,
    participants: ['Pol Soler Jofra', 'Jaume Baltà', 'Anna R.', 'David M.'],
    notes: 'Repàs comparatiu de terminis, escales i novetats 2026.'
  }
];

const PRIVATE_BOOKINGS_KEY = 'bombers_private_class_bookings_v1';
const GROUP_CLASSES_KEY = 'bombers_group_classes_v1';

export default function ClassesView({ topics = [], user = null }) {
  const [activeTab, setActiveTab] = useState('private'); // 'private' | 'group'

  // Formulari classe particular
  const [selectedDurationId, setSelectedDurationId] = useState('30m');
  const [selectedTopicId, setSelectedTopicId] = useState(() => topics[0]?.id || 'altres');
  const [selectedSubtopic, setSelectedSubtopic] = useState('');
  const [preferredSchedule, setPreferredSchedule] = useState('');
  const [comment, setComment] = useState('');
  const [studentName, setStudentName] = useState(() => user?.displayName || '');
  const [studentEmail, setStudentEmail] = useState(() => user?.email || '');
  const [bookingConfirmed, setBookingConfirmed] = useState(null);

  const [privateBookings, setPrivateBookings] = useState(() => {
    try {
      const raw = localStorage.getItem(PRIVATE_BOOKINGS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [groupClasses, setGroupClasses] = useState(() => {
    try {
      const raw = localStorage.getItem(GROUP_CLASSES_KEY);
      return raw ? JSON.parse(raw) : DEFAULT_GROUP_CLASSES;
    } catch {
      return DEFAULT_GROUP_CLASSES;
    }
  });

  const [groupProposalText, setGroupProposalText] = useState('');
  const [groupProposalSent, setGroupProposalSent] = useState(false);

  useEffect(() => {
    if (user?.displayName && !studentName) setStudentName(user.displayName);
    if (user?.email && !studentEmail) setStudentEmail(user.email);
  }, [user]);

  useEffect(() => {
    try {
      localStorage.setItem(PRIVATE_BOOKINGS_KEY, JSON.stringify(privateBookings));
    } catch {}
  }, [privateBookings]);

  useEffect(() => {
    try {
      localStorage.setItem(GROUP_CLASSES_KEY, JSON.stringify(groupClasses));
    } catch {}
  }, [groupClasses]);

  const selectedTopicObj = useMemo(
    () => topics.find((t) => t.id === selectedTopicId) || null,
    [topics, selectedTopicId]
  );

  const subtopicOptions = useMemo(() => {
    if (!selectedTopicObj || selectedTopicId === 'altres') {
      return ['Altres'];
    }
    const pageLabels = (selectedTopicObj.pages || []).map(
      (p, idx) => p.shortLabel || p.title || `Apartat ${idx + 1}`
    );
    return [...pageLabels, 'Altres'];
  }, [selectedTopicObj, selectedTopicId]);

  useEffect(() => {
    setSelectedSubtopic(subtopicOptions[0] || 'Altres');
  }, [selectedTopicId, subtopicOptions]);

  const selectedDuration =
    PRIVATE_DURATIONS.find((d) => d.id === selectedDurationId) || PRIVATE_DURATIONS[1];

  const handleBookPrivateClass = (e) => {
    e.preventDefault();
    const topicText =
      selectedTopicId === 'altres'
        ? 'Altres'
        : selectedTopicObj
        ? `Tema ${selectedTopicObj.number} · ${selectedTopicObj.title}`
        : selectedTopicId;

    const newBooking = {
      id: `priv-${Date.now()}`,
      createdAt: new Date().toLocaleString('ca-ES'),
      durationLabel: selectedDuration.label,
      price: selectedDuration.price,
      topic: topicText,
      subtopic: selectedSubtopic || 'Altres',
      preferredSchedule: preferredSchedule.trim() || 'A convenir',
      comment: comment.trim(),
      studentName: studentName.trim() || 'Opositor',
      studentEmail: studentEmail.trim()
    };

    setPrivateBookings((prev) => [newBooking, ...prev]);
    setBookingConfirmed(newBooking);
    setComment('');
  };

  const currentParticipantName = (user?.displayName || studentName || 'Opositor').trim();

  const toggleJoinGroupClass = (classId) => {
    setGroupClasses((prev) =>
      prev.map((gc) => {
        if (gc.id !== classId) return gc;
        const alreadyIn = gc.participants.includes(currentParticipantName);
        return {
          ...gc,
          participants: alreadyIn
            ? gc.participants.filter((p) => p !== currentParticipantName)
            : [...gc.participants, currentParticipantName]
        };
      })
    );
  };

  const handleProposeGroupClass = (e) => {
    e.preventDefault();
    if (!groupProposalText.trim()) return;
    const newGroup = {
      id: `grp-${Date.now()}`,
      title: groupProposalText.trim(),
      topicLabel: 'Proposta d\'opositors',
      dateLabel: 'Horari a consensuar (2 hores)',
      durationHours: 2,
      pricePerPerson: 25,
      minPeople: 4,
      participants: [currentParticipantName],
      notes: 'Grup obert! Quan arribi a 4 persones es confirma la sessió.'
    };
    setGroupClasses((prev) => [newGroup, ...prev]);
    setGroupProposalText('');
    setGroupProposalSent(true);
    setTimeout(() => setGroupProposalSent(false), 3500);
  };

  return (
    <div className="space-y-6">
      {/* Capçalera */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-indigo-50/40 to-amber-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/20 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 dark:bg-indigo-950/60 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Suport i Tutories · Oposicions Bombers</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Classes Particulars i Conjuntes
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          Reserva sessions individuals a mida per resoldre dubtes concrets del temari o uneix-te a una classe grupal programada (mínim 4 persones · 2 hores · 25 €/persona).
        </p>

        {/* Pestanyes */}
        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={() => setActiveTab('private')}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-extrabold transition ${
              activeTab === 'private'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Classes Particulars (10 € – 40 €)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('group')}
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-extrabold transition ${
              activeTab === 'group'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Classes Conjuntes (25 €/persona · 2 h)</span>
          </button>
        </div>
      </div>

      {activeTab === 'private' ? (
        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 items-start">
          {/* Formulari reserva particular */}
          <form
            onSubmit={handleBookPrivateClass}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-5"
          >
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              Configura la teva Classe Particular
            </h2>

            {/* 1. Durada i preu */}
            <div className="space-y-2">
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                1. Tria la durada
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRIVATE_DURATIONS.map((d) => {
                  const active = selectedDurationId === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDurationId(d.id)}
                      className={`text-left rounded-xl border-2 p-3.5 transition ${
                        active
                          ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/30'
                          : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                          {d.label}
                        </span>
                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                          {d.price} €
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                        {d.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Tema i Subapartat */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="class-topic-select"
                  className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  2. Tema a treballar
                </label>
                <select
                  id="class-topic-select"
                  value={selectedTopicId}
                  onChange={(e) => setSelectedTopicId(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white"
                >
                  {topics.map((t) => (
                    <option key={t.id} value={t.id}>
                      Tema {t.number} · {t.title}
                    </option>
                  ))}
                  <option value="altres">Altres (especifica al comentari)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="class-subtopic-select"
                  className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                >
                  3. Subapartat concret
                </label>
                <select
                  id="class-subtopic-select"
                  value={selectedSubtopic}
                  onChange={(e) => setSelectedSubtopic(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 dark:text-white"
                >
                  {subtopicOptions.map((sub, idx) => (
                    <option key={idx} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 4. Comentari lliure */}
            <div className="space-y-1.5">
              <label
                htmlFor="class-comment"
                className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400"
              >
                4. Comentari o dubtes concrets (si has triat &quot;Altres&quot; o vols concretar)
              </label>
              <textarea
                id="class-comment"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Ex: Vull practicar càlculs de Boyle vs Gay-Lussac en ampolles ERA o resoldre dubtes del Decret 16/2026..."
                className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Dades de contacte */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-500">Nom</label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="El teu nom"
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-500">Correu electrònic</label>
                <input
                  type="email"
                  required
                  value={studentEmail}
                  onChange={(e) => setStudentEmail(e.target.value)}
                  placeholder="correu@exemple.com"
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-[11px] font-bold text-slate-500">Disponibilitat horària</label>
                <input
                  type="text"
                  value={preferredSchedule}
                  onChange={(e) => setPreferredSchedule(e.target.value)}
                  placeholder="Ex: Dimarts tarda"
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs text-slate-600 dark:text-slate-300">
                Total seleccionat:{' '}
                <strong className="text-base text-indigo-600 dark:text-indigo-400">
                  {selectedDuration.label} · {selectedDuration.price} €
                </strong>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 text-xs sm:text-sm font-extrabold shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Sol·licitar Classe Particular</span>
              </button>
            </div>

            {bookingConfirmed && (
              <div className="rounded-xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-4 space-y-2">
                <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300">
                  ✓ Sol·licitud registrada correctament! ({bookingConfirmed.durationLabel} · {bookingConfirmed.price} €)
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  <strong>Tema:</strong> {bookingConfirmed.topic} → <strong>Subapartat:</strong> {bookingConfirmed.subtopic}
                </p>
                <a
                  href={`mailto:polsolerjofra@gmail.com?subject=${encodeURIComponent(
                    `Sol·licitud Classe Particular (${bookingConfirmed.durationLabel} - ${bookingConfirmed.price}€)`
                  )}&body=${encodeURIComponent(
                    `Nom: ${bookingConfirmed.studentName}\nCorreu: ${bookingConfirmed.studentEmail}\nDurada: ${bookingConfirmed.durationLabel} (${bookingConfirmed.price} €)\nTema: ${bookingConfirmed.topic}\nSubapartat: ${bookingConfirmed.subtopic}\nDisponibilitat: ${bookingConfirmed.preferredSchedule}\nComentari: ${bookingConfirmed.comment || '-'}`
                  )}`}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 text-xs font-extrabold"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Enviar confirmació per correu</span>
                </a>
              </div>
            )}
          </form>

          {/* Resum de tarifes i sol·licituds recents */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-3">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Tarifes Classes Particulars</span>
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                  <span>Sessió exprés (15 minuts)</span>
                  <strong className="text-slate-900 dark:text-white">10 €</strong>
                </li>
                <li className="flex justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                  <span>Sessió enfocada (30 minuts)</span>
                  <strong className="text-slate-900 dark:text-white">20 €</strong>
                </li>
                <li className="flex justify-between">
                  <span>Sessió completa (1 hora)</span>
                  <strong className="text-slate-900 dark:text-white">40 €</strong>
                </li>
              </ul>
            </div>

            {privateBookings.length > 0 && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-3">
                <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                  Les teves sol·licituds ({privateBookings.length})
                </h3>
                <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
                  {privateBookings.map((b) => (
                    <div
                      key={b.id}
                      className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 p-3 text-xs space-y-1"
                    >
                      <div className="flex justify-between font-extrabold text-slate-900 dark:text-white">
                        <span>{b.durationLabel} · {b.price} €</span>
                        <span className="text-[11px] font-semibold text-slate-500">{b.preferredSchedule}</span>
                      </div>
                      <div className="text-slate-700 dark:text-slate-300 font-semibold">
                        {b.topic} — {b.subtopic}
                      </div>
                      {b.comment && (
                        <div className="text-[11px] text-slate-500 italic flex items-start gap-1">
                          <MessageSquare className="w-3 h-3 mt-0.5 shrink-0" />
                          <span>{b.comment}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Banner condicions grups */}
          <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/60 dark:bg-emerald-950/20 p-5 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                Classes Conjuntes Programades · 25 €/persona (2 hores)
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Cada sessió requereix un <strong>mínim de 4 persones inscrites</strong> per confirmar-se. Uneix-te a un grup o proposa un nou tema.
              </p>
            </div>
          </div>

          {/* Llista de classes conjuntes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupClasses.map((gc) => {
              const count = gc.participants.length;
              const isConfirmed = count >= gc.minPeople;
              const isJoined = gc.participants.includes(currentParticipantName);
              const pct = Math.min(100, Math.round((count / gc.minPeople) * 100));

              return (
                <div
                  key={gc.id}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                          isConfirmed
                            ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                            : 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                        }`}
                      >
                        {isConfirmed ? 'Grup Confirmat ✓' : `Falten ${gc.minPeople - count} persones`}
                      </span>
                      <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                        {gc.pricePerPerson} €/pers · {gc.durationHours}h
                      </span>
                    </div>

                    <h3 className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug">
                      {gc.title}
                    </h3>
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {gc.topicLabel}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{gc.dateLabel}</span>
                    </div>
                    {gc.notes && (
                      <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                        {gc.notes}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-bold text-slate-600 dark:text-slate-300">
                        <span>Inscrits: {count} (mínim {gc.minPeople})</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isConfirmed ? 'bg-emerald-500' : 'bg-amber-500'
                          }`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleJoinGroupClass(gc.id)}
                      className={`w-full rounded-xl px-4 py-2 text-xs font-extrabold transition ${
                        isJoined
                          ? 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-rose-100 hover:text-rose-700'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                      }`}
                    >
                      {isJoined ? 'Inscrit/a ✓ (Desapuntar-me)' : `Unir-m'hi (${gc.pricePerPerson} €)`}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Proposar una nova classe conjunta */}
          <form
            onSubmit={handleProposeGroupClass}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
          >
            <input
              type="text"
              value={groupProposalText}
              onChange={(e) => setGroupProposalText(e.target.value)}
              placeholder="Proposa un tema per obrir un nou grup de 2 hores (mínim 4 persones · 25 €/persona)..."
              className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2.5 text-xs font-extrabold shrink-0"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Obrir Nou Grup</span>
            </button>
            {groupProposalSent && (
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                Grup creat ✓
              </span>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
