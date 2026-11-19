import React, { useState, useEffect } from 'react';
import { Lightbulb, Plus, ArrowUpRight, Trash2, Sparkles } from 'lucide-react';
import { INITIAL_MNEMONICS } from '../data/mnemonicsData';

const CUSTOM_STORAGE_KEY = 'bombers_custom_mnemonics_v1';

export default function MnemonicsView({ topics, onSelectTopic }) {
  const [search, setSearch] = useState('');
  const [selectedTopicFilter, setSelectedTopicFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [customMnemonics, setCustomMnemonics] = useState(() => {
    try {
      const saved = localStorage.getItem(CUSTOM_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [newTitle, setNewTitle] = useState('');
  const [newAcronym, setNewAcronym] = useState('');
  const [newTopicNum, setNewTopicNum] = useState(30);
  const [newExplanation, setNewExplanation] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(CUSTOM_STORAGE_KEY, JSON.stringify(customMnemonics));
    } catch {
      // ignore
    }
  }, [customMnemonics]);

  const allMnemonics = [...INITIAL_MNEMONICS, ...customMnemonics];

  const filtered = allMnemonics.filter((m) => {
    const matchesTopic =
      selectedTopicFilter === 'all' ||
      String(m.topicNumber) === selectedTopicFilter ||
      (m.relatedTopics && m.relatedTopics.map(String).includes(selectedTopicFilter));
    if (!matchesTopic) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      (m.acronym && m.acronym.toLowerCase().includes(q)) ||
      (m.explanation && m.explanation.toLowerCase().includes(q)) ||
      (m.rules &&
        m.rules.some(
          (r) => r.code.toLowerCase().includes(q) || r.meaning.toLowerCase().includes(q)
        ))
    );
  });

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newExplanation.trim()) return;
    const num = Number(newTopicNum) || 1;
    const entry = {
      id: `custom-${Date.now()}`,
      topicNumber: num,
      topicId: `tema-${num}`,
      category: `Tema ${num} (Anotació pròpia)`,
      title: newTitle.trim(),
      acronym: newAcronym.trim() || 'Regla personalitzada',
      rules: [],
      explanation: newExplanation.trim(),
      isCustom: true
    };
    setCustomMnemonics((prev) => [entry, ...prev]);
    setNewTitle('');
    setNewAcronym('');
    setNewExplanation('');
    setShowAddForm(false);
  };

  const handleDeleteCustom = (id) => {
    setCustomMnemonics((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-600/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Regles Mnemotècniques i de Relació</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Trucs de Memòria i Associacions Ràpides
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Recull centralitzat de regles mnemotècniques vinculades als seus temes. Pots
              consultar-les per tema o afegir-ne de noves fàcilment.
            </p>
          </div>

          <button
            onClick={() => setShowAddForm((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 text-xs font-extrabold shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>{showAddForm ? 'Tancar formulari' : 'Afegir regla / anotació'}</span>
          </button>
        </div>

        {showAddForm && (
          <form
            onSubmit={handleAdd}
            className="rounded-2xl border border-purple-200 dark:border-purple-900 bg-purple-50/70 dark:bg-purple-950/20 p-4 space-y-3"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Títol (ex: Avisos sonors...)"
                className="sm:col-span-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold"
                required
              />
              <select
                value={newTopicNum}
                onChange={(e) => setNewTopicNum(e.target.value)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold"
              >
                {topics.map((t) => (
                  <option key={t.id} value={t.number}>
                    Tema {t.number} · {t.title}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              value={newAcronym}
              onChange={(e) => setNewAcronym(e.target.value)}
              placeholder="Acrònim o relació curta (ex: 1 i 3 -> Tot Mort)"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold"
            />
            <textarea
              value={newExplanation}
              onChange={(e) => setNewExplanation(e.target.value)}
              placeholder="Explicació o anotació detallada..."
              rows={2}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs"
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-extrabold"
              >
                Desar regla
              </button>
            </div>
          </form>
        )}

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cerca regla (ex: PORC, PaVo, Gran Via, 1 i 3, Fases)..."
            className="flex-1 min-w-[220px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-800 dark:text-slate-200 focus:outline-none focus:border-purple-500"
          />
          <select
            value={selectedTopicFilter}
            onChange={(e) => setSelectedTopicFilter(e.target.value)}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200"
          >
            <option value="all">Tots els temes</option>
            <option value="8">Tema 8 · Teoria del foc</option>
            <option value="10">Tema 10 · Química</option>
            <option value="24">Tema 24 · Incendis estructurals</option>
            <option value="30">Tema 30 · Col·lapses estructurals</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-purple-200/80 dark:border-purple-900/50 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-purple-600/10 text-purple-700 dark:text-purple-300">
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    Tema {item.topicNumber}
                    {item.relatedTopics && item.relatedTopics.length > 1
                      ? ` (també T${item.relatedTopics.filter((n) => n !== item.topicNumber).join(', T')})`
                      : ''}
                  </span>
                </div>
                <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                  {item.title}
                </h2>
              </div>

              <div className="flex items-center gap-2">
                {item.isCustom && (
                  <button
                    onClick={() => handleDeleteCustom(item.id)}
                    className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-red-600"
                    title="Eliminar anotació"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => onSelectTopic(item.topicId)}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-purple-400"
                >
                  <span>Anar al Tema {item.topicNumber}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {item.acronym && (
              <div className="inline-flex items-center gap-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 px-4 py-2 text-sm font-extrabold text-purple-900 dark:text-purple-200">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                <span>{item.acronym}</span>
              </div>
            )}

            {item.rules && item.rules.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {item.rules.map((r, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 px-3.5 py-2.5"
                  >
                    <div className="text-xs font-extrabold text-red-600 dark:text-red-400">
                      {r.code}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {r.meaning}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.explanation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
