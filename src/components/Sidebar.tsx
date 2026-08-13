import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { mathDomains } from '../data/mathData';
import { readingDomains } from '../data/readingData';
import { useProgress } from '../context/ProgressContext';
import { colorsFor } from '../lib/colors';
import type { Subject } from '../types';

function statusIcon(score: number) {
  if (score >= 1) return '🌟';
  if (score >= 0.8) return '✅';
  if (score > 0) return '🔸';
  return '';
}

export default function Sidebar({ subject }: { subject: Subject }) {
  const domains = subject === 'math' ? mathDomains : readingDomains;
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean); // [subject, domainId?, topicId?]
  const activeDomainId = parts[1];
  const activeTopicId = parts[2];
  const { topicScore } = useProgress();

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {};
    domains.forEach((d) => {
      init[d.id] = activeDomainId ? d.id === activeDomainId : false;
    });
    return init;
  });

  function toggle(id: string) {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <aside className="sticky top-[57px] hidden h-[calc(100vh-57px)] w-72 shrink-0 overflow-y-auto border-r border-slate-200 bg-white py-4 lg:block dark:border-slate-800 dark:bg-slate-900">
      <div className="px-4 pb-3">
        <Link
          to={`/${subject}`}
          className="text-xs font-bold uppercase tracking-wide text-slate-400 hover:text-blue-600"
        >
          ← Все курсы
        </Link>
        <h2 className="mt-1 text-lg font-extrabold text-slate-800 dark:text-slate-100">
          {subject === 'math' ? '🧮 Математика' : '📚 Чтение и письмо'}
        </h2>
      </div>

      <nav className="space-y-1 px-2">
        {domains.map((d, idx) => {
          const c = colorsFor(d.color);
          const isOpen = !!expanded[d.id];
          const isActiveDomain = d.id === activeDomainId;
          return (
            <div key={d.id} className="mb-1">
              <button
                onClick={() => toggle(d.id)}
                className={`flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm font-bold transition ${
                  isActiveDomain ? c.text : 'text-slate-600 dark:text-slate-300'
                } hover:bg-slate-100 dark:hover:bg-slate-800`}
              >
                <span className={`text-xs transition-transform ${isOpen ? 'rotate-90' : ''}`}>▶</span>
                <span className="shrink-0">{d.icon}</span>
                <span className="min-w-0 flex-1 truncate">
                  Раздел {idx + 1}: {d.title}
                </span>
              </button>

              {isOpen && (
                <div className="ml-4 mt-0.5 space-y-0.5 border-l border-slate-200 pl-3 dark:border-slate-700">
                  <Link
                    to={`/${subject}/${d.id}`}
                    className={`block rounded-md px-2 py-1.5 text-sm ${
                      activeDomainId === d.id && !activeTopicId
                        ? `font-semibold ${c.text} ${c.bgSoft}`
                        : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    Обзор раздела
                  </Link>
                  {d.topics.map((t) => {
                    const score = topicScore(t.id);
                    const active = activeTopicId === t.id;
                    return (
                      <Link
                        key={t.id}
                        to={`/${subject}/${d.id}/${t.id}`}
                        className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm ${
                          active
                            ? `font-semibold ${c.text} ${c.bgSoft}`
                            : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="w-4 shrink-0 text-center">{statusIcon(score) || '○'}</span>
                        <span className="min-w-0 flex-1 truncate">{t.title}</span>
                      </Link>
                    );
                  })}
                  <Link
                    to={`/${subject}/${d.id}/test`}
                    className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-semibold ${
                      activeTopicId === 'test'
                        ? `${c.text} ${c.bgSoft}`
                        : 'text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/30'
                    }`}
                  >
                    <span className="w-4 shrink-0 text-center">🏆</span>
                    <span>Проверочная работа</span>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
