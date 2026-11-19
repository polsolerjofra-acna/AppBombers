import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Lightbulb } from 'lucide-react';
import MnemonicCard from './content/MnemonicCard';

const PAGE_MNEMONICS_KEY = 'bombers_page_mnemonics_v1';

export default function PageMnemonicsBox({ topicId, pageNumber }) {
  const storageKey = `${topicId}::${pageNumber}`;
  const [allByPage, setAllByPage] = useState(() => {
    try {
      const raw = localStorage.getItem(PAGE_MNEMONICS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [acronym, setAcronym] = useState('');
  const [trick, setTrick] = useState('');

  useEffect(() => {
    setIsAdding(false);
  }, [topicId, pageNumber]);

  const persist = (next) => {
    setAllByPage(next);
    try {
      localStorage.setItem(PAGE_MNEMONICS_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  const pageList = allByPage[storageKey] || [];

  const handleSave = (e) => {
    e.preventDefault();
    if (!title.trim() && !trick.trim()) return;
    const item = {
      id: `pm-${Date.now()}`,
      title: title.trim() || 'Regla mnemotècnica pròpia',
      acronym: acronym.trim(),
      trick: trick.trim()
    };
    const next = {
      ...allByPage,
      [storageKey]: [...pageList, item]
    };
    persist(next);
    setTitle('');
    setAcronym('');
    setTrick('');
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    const filtered = pageList.filter((it) => it.id !== id);
    const next = { ...allByPage };
    if (filtered.length === 0) delete next[storageKey];
    else next[storageKey] = filtered;
    persist(next);
  };

  return (
    <div className="space-y-3 pt-2">
      {pageList.map((item) => (
        <div key={item.id} className="relative group">
          <MnemonicCard
            type="mnemonic"
            title={item.title}
            acronym={item.acronym}
            trick={item.trick}
          />
          <button
            type="button"
            onClick={() => handleDelete(item.id)}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-slate-400 hover:text-red-600 transition-colors"
            title="Eliminar aquesta regla"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}

      {isAdding ? (
        <form
          onSubmit={handleSave}
          className="rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/70 dark:bg-purple-950/20 p-4 space-y-2.5"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-purple-800 dark:text-purple-300 flex items-center gap-1.5">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Nova regla mnemotècnica per a aquesta pàgina</span>
            </span>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="text-xs font-bold text-slate-500 hover:text-slate-700"
            >
              Cancel·lar
            </button>
          </div>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Títol (ex: Ordre instal·lació d'enllaç)"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold"
          />
          <input
            type="text"
            value={acronym}
            onChange={(e) => setAcronym(e.target.value)}
            placeholder="Acrònim o paraula clau (opcional)"
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold"
          />
          <textarea
            value={trick}
            onChange={(e) => setTrick(e.target.value)}
            placeholder="Escriu aquí la teva regla mnemotècnica o anotació..."
            rows={2}
            required
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-xs"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-extrabold"
            >
              Desar a la pàgina
            </button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setIsAdding(true)}
          className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-purple-300 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20 px-3.5 py-2 text-xs font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-100/70 transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Afegir regla mnemotècnica a aquesta pàgina</span>
        </button>
      )}
    </div>
  );
}
