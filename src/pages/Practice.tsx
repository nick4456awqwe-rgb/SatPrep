import { useMemo, useState } from 'react';
import { mathDomains } from '../data/mathData';
import { readingDomains } from '../data/readingData';
import Quiz from '../components/Quiz';
import { useProgress } from '../context/ProgressContext';
import type { Question } from '../types';

type Mode = 'math' | 'reading' | 'mixed' | null;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function collectQuestions(domains: typeof mathDomains): Question[] {
  return domains.flatMap((d) => d.topics.flatMap((t) => [...t.examples, ...t.quiz]));
}

export default function Practice() {
  const [mode, setMode] = useState<Mode>(null);
  const [session, setSession] = useState<Question[] | null>(null);
  const { recordQuizResult } = useProgress();

  const pools = useMemo(
    () => ({
      math: collectQuestions(mathDomains),
      reading: collectQuestions(readingDomains),
    }),
    []
  );

  function startSession(m: Exclude<Mode, null>) {
    let pool: Question[] = [];
    if (m === 'math') pool = pools.math;
    else if (m === 'reading') pool = pools.reading;
    else pool = [...pools.math, ...pools.reading];
    setMode(m);
    setSession(shuffle(pool).slice(0, 10));
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">🎯 Смешанная практика</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        Случайная подборка из 10 вопросов — отличный способ поддержать стрик, если не хочешь проходить целую тему.
      </p>

      {!session ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <ModeButton emoji="🧮" title="Математика" desc="Вопросы по всем блокам Math" onClick={() => startSession('math')} />
          <ModeButton emoji="📚" title="Чтение и письмо" desc="Вопросы по всем блокам Reading & Writing" onClick={() => startSession('reading')} />
          <ModeButton emoji="🔀" title="Всё вместе" desc="Микс математики и чтения" onClick={() => startSession('mixed')} />
        </div>
      ) : (
        <div className="mt-8">
          <Quiz
            questions={session}
            title={mode === 'math' ? 'Математика' : mode === 'reading' ? 'Чтение и письмо' : 'Смешанная практика'}
            onComplete={(correct, total) => recordQuizResult('practice-session', correct, total)}
          />
          <button
            onClick={() => setSession(null)}
            className="mt-4 text-sm font-semibold text-blue-500 hover:underline"
          >
            ← Выбрать другой режим
          </button>
        </div>
      )}
    </div>
  );
}

function ModeButton({ emoji, title, desc, onClick }: { emoji: string; title: string; desc: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="text-3xl">{emoji}</div>
      <h3 className="mt-2 font-bold text-slate-800 dark:text-slate-100">{title}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{desc}</p>
    </button>
  );
}
