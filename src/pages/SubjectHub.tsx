import { Link, useParams } from 'react-router-dom';
import { mathDomains } from '../data/mathData';
import { readingDomains } from '../data/readingData';
import { useProgress } from '../context/ProgressContext';
import { colorsFor } from '../lib/colors';
import ProgressRing from '../components/ProgressRing';
import type { Domain, Subject } from '../types';

export default function SubjectHub({ subject }: { subject: Subject }) {
  const { domainId } = useParams();
  const domains = subject === 'math' ? mathDomains : readingDomains;

  if (domainId) {
    const domain = domains.find((d) => d.id === domainId);
    if (!domain) {
      return (
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <p className="text-slate-500">Раздел не найден.</p>
        </div>
      );
    }
    return <DomainOverview subject={subject} domain={domain} idx={domains.indexOf(domain)} />;
  }

  return <CourseOverview subject={subject} domains={domains} />;
}

function CourseOverview({ subject, domains }: { subject: Subject; domains: Domain[] }) {
  const { topicScore } = useProgress();
  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
        {subject === 'math' ? '🧮 Математика для SAT' : '📚 Чтение и письмо для SAT'}
      </h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">
        {subject === 'math'
          ? 'Курс состоит из 4 разделов, как на настоящем Digital SAT Math. Проходи темы по порядку или выбери любую — прогресс сохраняется.'
          : 'Курс состоит из 4 разделов, как на настоящем Digital SAT Reading & Writing. Проходи темы по порядку или выбери любую — прогресс сохраняется.'}
      </p>

      <div className="mt-6 space-y-4">
        {domains.map((d, idx) => {
          const c = colorsFor(d.color);
          const totalScore = d.topics.reduce((sum, t) => sum + Math.min(topicScore(t.id) / 0.8, 1), 0);
          const pct = Math.round((totalScore / d.topics.length) * 100);
          return (
            <Link
              key={d.id}
              to={`/${subject}/${d.id}`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-2xl ${c.bgSoft}`}>
                {d.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Раздел {idx + 1}</p>
                <h3 className="font-bold text-slate-800 dark:text-slate-100">{d.title}</h3>
                <p className="truncate text-sm text-slate-500 dark:text-slate-400">{d.description}</p>
                <div className="mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                  <div className={`h-full rounded-full ${c.bg}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="hidden shrink-0 text-sm font-bold text-slate-400 sm:block">{pct}%</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function DomainOverview({ subject, domain, idx }: { subject: Subject; domain: Domain; idx: number }) {
  const { topicScore } = useProgress();
  const c = colorsFor(domain.color);
  const testScore = topicScore(`unit-test-${domain.id}`);

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Раздел {idx + 1}</p>
      <div className={`mt-2 rounded-2xl border p-5 ${c.border} ${c.bgSoft}`}>
        <div className="flex items-start gap-3">
          <span className="text-3xl">{domain.icon}</span>
          <div>
            <h1 className={`text-xl font-extrabold ${c.text}`}>{domain.title}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">{domain.englishTitle}</p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{domain.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-2.5">
        {domain.topics.map((t, i) => {
          const score = topicScore(t.id);
          const mastered = score >= 0.8;
          return (
            <Link
              key={t.id}
              to={`/${subject}/${domain.id}/${t.id}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <ProgressRing progress={score} size={44} strokeWidth={4} colorClass={c.stroke} />
                <span className="absolute text-sm">{mastered ? '✅' : score > 0 ? '📝' : i + 1}</span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-slate-800 group-hover:text-blue-600 dark:text-slate-100">
                  {t.title}
                </h3>
                <p className="truncate text-xs text-slate-400">{t.subtitle}</p>
              </div>
              <span className="shrink-0 text-slate-300 group-hover:text-blue-400">→</span>
            </Link>
          );
        })}

        <Link
          to={`/${subject}/${domain.id}/test`}
          className="flex items-center gap-4 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-amber-800 dark:bg-amber-950/20"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xl dark:bg-amber-900/40">
            🏆
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-amber-800 dark:text-amber-400">Проверочная работа по разделу</h3>
            <p className="text-xs text-amber-600/80 dark:text-amber-500/70">
              {testScore > 0 ? `Лучший результат: ${Math.round(testScore * 100)}%` : 'Смешанные вопросы по всем темам раздела'}
            </p>
          </div>
          <span className="shrink-0 text-amber-400">→</span>
        </Link>
      </div>
    </div>
  );
}
