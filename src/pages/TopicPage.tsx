import { Link, useParams } from 'react-router-dom';
import { mathDomains } from '../data/mathData';
import { readingDomains } from '../data/readingData';
import { useProgress } from '../context/ProgressContext';
import { colorsFor } from '../lib/colors';
import Quiz from '../components/Quiz';
import Diagram from '../components/Diagram';
import type { Subject, Question } from '../types';
import { useState } from 'react';

export default function TopicPage({ subject }: { subject: Subject }) {
  const { domainId, topicId } = useParams();
  const domains = subject === 'math' ? mathDomains : readingDomains;
  const domain = domains.find((d) => d.id === domainId);
  const topic = domain?.topics.find((t) => t.id === topicId);
  const { recordQuizResult, topicScore } = useProgress();
  const [showQuiz, setShowQuiz] = useState(false);

  if (!domain || !topic) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p className="text-lg text-slate-500">Тема не найдена.</p>
        <Link to={`/${subject}`} className="text-blue-500 underline">
          Вернуться к списку тем
        </Link>
      </div>
    );
  }

  const c = colorsFor(domain.color);
  const score = topicScore(topic.id);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
        <Link to={`/${subject}`} className="hover:text-blue-500">
          {subject === 'math' ? 'Математика' : 'Чтение и письмо'}
        </Link>
        <span>/</span>
        <Link to={`/${subject}/${domain.id}`} className="hover:text-blue-500">
          {domain.title}
        </Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-300">{topic.title}</span>
      </nav>

      <div className={`rounded-2xl border p-6 ${c.border} ${c.bgSoft}`}>
        <span className={`text-xs font-bold uppercase tracking-wide ${c.text}`}>{domain.englishTitle}</span>
        <h1 className="mt-1 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white">{topic.title}</h1>
        <p className="mt-1 text-base text-slate-500 dark:text-slate-400">{topic.subtitle}</p>
        <p className="mt-3 text-lg leading-relaxed text-slate-700 dark:text-slate-300">{topic.summary}</p>
        {score > 0 && (
          <p className="mt-4 text-sm font-semibold text-slate-500">
            Твой лучший результат: {Math.round(score * 100)}% {score >= 0.8 ? '✅ тема освоена' : ''}
          </p>
        )}
      </div>

      {/* Lesson */}
      <div className="mt-9 space-y-5">
        {topic.lesson.map((section, i) => (
          <div
            key={i}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7 dark:border-slate-700 dark:bg-slate-800"
          >
            <h2 className="mb-4 text-xl font-bold leading-snug text-slate-800 dark:text-slate-100">
              {section.heading}
            </h2>
            <div className="space-y-4 text-lg leading-[1.75] text-slate-700 dark:text-slate-300">
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            {section.diagram && <Diagram id={section.diagram} />}
            {section.tips && (
              <ul className="mt-5 space-y-3">
                {section.tips.map((tip, j) => (
                  <li
                    key={j}
                    className="flex gap-3 rounded-xl bg-amber-50 p-4 text-base leading-relaxed text-amber-900 dark:bg-amber-950/30 dark:text-amber-200"
                  >
                    <span className="text-xl leading-none">💡</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Examples */}
      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-100">✏️ Разбор примеров</h2>
        <div className="space-y-5">
          {topic.examples.map((ex) => (
            <ExampleCard key={ex.id} question={ex} />
          ))}
        </div>
      </div>

      {/* Quiz */}
      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-bold text-slate-800 dark:text-slate-100">🎯 Проверь себя</h2>
        {!showQuiz ? (
          <button
            onClick={() => setShowQuiz(true)}
            className="w-full rounded-2xl border-2 border-dashed border-blue-300 bg-blue-50 p-7 text-center text-lg font-bold text-blue-600 transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-400"
          >
            Начать практику по теме ({topic.quiz.length} вопросов)
          </button>
        ) : (
          <Quiz
            questions={topic.quiz}
            title={topic.title}
            onComplete={(correct, total) => recordQuizResult(topic.id, correct, total)}
          />
        )}
      </div>
    </div>
  );
}

function ExampleCard({ question }: { question: Question }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
      {question.passage && (
        <div className="mb-4 whitespace-pre-line rounded-xl bg-slate-50 p-5 font-serif text-lg leading-relaxed text-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
          {question.passage}
        </div>
      )}
      <p className="text-lg font-medium leading-relaxed text-slate-800 dark:text-slate-100">{question.prompt}</p>
      <ul className="mt-4 space-y-2">
        {question.choices.map((choice, i) => (
          <li
            key={i}
            className={`rounded-xl border px-4 py-3 text-base leading-relaxed ${
              open && i === question.correct
                ? 'border-emerald-400 bg-emerald-50 font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'border-slate-200 text-slate-700 dark:border-slate-600 dark:text-slate-300'
            }`}
          >
            <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>
            {choice}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-4 text-base font-semibold text-blue-500 hover:underline"
      >
        {open ? 'Скрыть решение' : 'Показать решение'}
      </button>
      {open && (
        <p className="mt-3 rounded-xl bg-blue-50 p-4 text-base leading-relaxed text-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
          {question.explanation}
        </p>
      )}
    </div>
  );
}
