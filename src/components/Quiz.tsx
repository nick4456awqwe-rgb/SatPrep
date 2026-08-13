import { useState } from 'react';
import type { Question } from '../types';

interface QuizProps {
  questions: Question[];
  title: string;
  onComplete?: (correct: number, total: number) => void;
}

export default function Quiz({ questions, title, onComplete }: QuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function choose(i: number) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.correct) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRevealed(false);
    } else {
      setFinished(true);
      onComplete?.(correctCount, questions.length);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setRevealed(false);
    setCorrectCount(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((correctCount / questions.length) * 100);
    const good = pct >= 80;
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="text-6xl">{good ? '🎉' : '💪'}</div>
        <h3 className="mt-4 text-2xl font-bold text-slate-800 dark:text-slate-100">
          {good ? 'Отлично! Тема освоена' : 'Неплохо, но стоит повторить'}
        </h3>
        <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
          Правильных ответов: {correctCount} из {questions.length} ({pct}%)
        </p>
        <button
          onClick={restart}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-500"
        >
          Пройти ещё раз
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-500">{title}</span>
        <span className="text-sm font-medium text-slate-400">
          {current + 1} / {questions.length}
        </span>
      </div>
      <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-blue-500 transition-all"
          style={{ width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {q.passage && (
        <div className="mb-4 whitespace-pre-line rounded-xl bg-slate-50 p-5 font-serif text-lg leading-relaxed text-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
          {q.passage}
        </div>
      )}
      <p className="mb-4 text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-100">{q.prompt}</p>

      <div className="space-y-3">
        {q.choices.map((choice, i) => {
          let stateClasses =
            'border-slate-200 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-600 dark:hover:bg-slate-700/50';
          if (revealed) {
            if (i === q.correct) {
              stateClasses = 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 dark:border-emerald-500';
            } else if (i === selected) {
              stateClasses = 'border-rose-400 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-500';
            } else {
              stateClasses = 'border-slate-200 opacity-60 dark:border-slate-600';
            }
          }
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={revealed}
              className={`flex w-full items-center gap-3 rounded-xl border-2 px-5 py-4 text-left text-lg transition ${stateClasses}`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current text-sm font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="leading-relaxed text-slate-700 dark:text-slate-200">{choice}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <div className="mt-5 rounded-xl bg-blue-50 p-5 text-base leading-relaxed text-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
          <p className="mb-1.5 text-lg font-semibold text-blue-600 dark:text-blue-400">
            {selected === q.correct ? '✅ Верно! Объяснение:' : '❌ Не совсем. Объяснение:'}
          </p>
          {q.explanation}
        </div>
      )}

      <div className="mt-5 flex justify-end">
        {revealed && (
          <button
            onClick={next}
            className="rounded-xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            {current + 1 < questions.length ? 'Следующий вопрос →' : 'Завершить'}
          </button>
        )}
      </div>
    </div>
  );
}
