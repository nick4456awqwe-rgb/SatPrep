import { Link, useParams } from 'react-router-dom';
import { mathDomains } from '../data/mathData';
import { readingDomains } from '../data/readingData';
import { useProgress } from '../context/ProgressContext';
import { colorsFor } from '../lib/colors';
import Quiz from '../components/Quiz';
import type { Subject } from '../types';
import { useMemo, useState } from 'react';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function UnitTest({ subject }: { subject: Subject }) {
  const { domainId } = useParams();
  const domains = subject === 'math' ? mathDomains : readingDomains;
  const domain = domains.find((d) => d.id === domainId);
  const { recordQuizResult, topicScore } = useProgress();
  const [started, setStarted] = useState(false);

  const questions = useMemo(() => {
    if (!domain) return [];
    const pool = domain.topics.flatMap((t) => [...t.examples, ...t.quiz]);
    return shuffle(pool).slice(0, Math.min(12, pool.length));
  }, [domain]);

  if (!domain) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-slate-500">Раздел не найден.</p>
        <Link to={`/${subject}`} className="text-blue-500 underline">
          Вернуться к списку разделов
        </Link>
      </div>
    );
  }

  const c = colorsFor(domain.color);
  const testKey = `unit-test-${domain.id}`;
  const score = topicScore(testKey);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <nav className="mb-4 flex flex-wrap items-center gap-1 text-sm text-slate-400">
        <Link to={`/${subject}`} className="hover:text-blue-500">
          {subject === 'math' ? 'Математика' : 'Чтение и письмо'}
        </Link>
        <span>/</span>
        <Link to={`/${subject}/${domain.id}`} className="hover:text-blue-500">
          {domain.title}
        </Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-300">Проверочная работа</span>
      </nav>

      <div className={`rounded-2xl border p-5 ${c.border} ${c.bgSoft}`}>
        <span className={`text-xs font-bold uppercase tracking-wide ${c.text}`}>🏆 Unit Test</span>
        <h1 className="mt-1 text-2xl font-extrabold text-slate-900 dark:text-white">
          Проверочная работа: {domain.title}
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          Сборный тест из вопросов по всем темам раздела «{domain.title}» — {questions.length} вопросов вперемешку,
          как настоящий unit test на Khan Academy. Нужно набрать 80%+, чтобы раздел засчитался пройденным.
        </p>
        {score > 0 && (
          <p className="mt-3 text-sm font-semibold text-slate-500">
            Лучший результат: {Math.round(score * 100)}% {score >= 0.8 ? '🏆 раздел пройден' : ''}
          </p>
        )}
      </div>

      <div className="mt-6">
        {!started ? (
          <button
            onClick={() => setStarted(true)}
            className="w-full rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-6 text-center font-bold text-amber-700 transition hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-400"
          >
            Начать проверочную работу
          </button>
        ) : (
          <Quiz
            questions={questions}
            title={`Проверочная работа · ${domain.title}`}
            onComplete={(correct, total) => recordQuizResult(testKey, correct, total)}
          />
        )}
      </div>
    </div>
  );
}
