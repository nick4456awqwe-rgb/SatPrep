import { Link } from 'react-router-dom';
import { mathDomains } from '../data/mathData';
import { readingDomains } from '../data/readingData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { colorsFor } from '../lib/colors';

export default function Home() {
  const { state, topicScore } = useProgress();
  const { user } = useAuth();
  const allDomains = [...mathDomains, ...readingDomains];
  const totalTopics = allDomains.reduce((sum, d) => sum + d.topics.length, 0);
  const masteredTopics = allDomains.reduce(
    (sum, d) => sum + d.topics.filter((t) => topicScore(t.id) >= 0.8).length,
    0
  );
  const overallPct = totalTopics > 0 ? Math.round((masteredTopics / totalTopics) * 100) : 0;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-mesh dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm backdrop-blur dark:border-blue-900 dark:bg-slate-900/70 dark:text-blue-400">
              ✨ Подготовка к Digital SAT
            </span>
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl dark:text-white">
              {user ? `С возвращением, ${user.name.split(' ')[0]}!` : 'Готовься к SAT'}{' '}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                {user ? '' : 'на русском'}
              </span>
              {!user && (
                <>
                  ,<br />
                  практикуйся{' '}
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    на английском
                  </span>
                </>
              )}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
              Все темы Math и Reading &amp; Writing разложены по блокам, как на экзамене. Подробные объяснения на
              русском с картинками и графиками, реальные примеры заданий на английском, мгновенная проверка и стрик
              за ежедневные занятия. 🔥
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/math"
                className="btn-shine rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition hover:shadow-xl hover:shadow-blue-600/30"
              >
                Начать с математики
              </Link>
              <Link
                to="/reading"
                className="rounded-2xl border-2 border-slate-300 bg-white/80 px-7 py-3.5 text-base font-bold text-slate-700 backdrop-blur transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200"
              >
                Начать с чтения и письма
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatCard emoji="🔥" label="Дней подряд" value={state.streak} accent="from-orange-400 to-rose-500" />
          <StatCard emoji="⭐" label="Всего опыта" value={state.xp} accent="from-blue-400 to-indigo-500" />
          <StatCard emoji="✅" label="Тем освоено" value={`${masteredTopics}/${totalTopics}`} accent="from-emerald-400 to-teal-500" />
          <StatCard emoji="📈" label="Общий прогресс" value={`${overallPct}%`} accent="from-purple-400 to-fuchsia-500" />
        </div>
      </section>

      {/* Domains */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="font-display mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">🧮 Математика по блокам</h2>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mathDomains.map((d) => (
            <DomainCard key={d.id} id={d.id} subject="math" title={d.title} icon={d.icon} color={d.color} count={d.topics.length} />
          ))}
        </div>

        <h2 className="font-display mb-5 text-2xl font-bold text-slate-800 dark:text-slate-100">📚 Чтение и письмо по блокам</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {readingDomains.map((d) => (
            <DomainCard key={d.id} id={d.id} subject="reading" title={d.title} icon={d.icon} color={d.color} count={d.topics.length} />
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ emoji, label, value, accent }: { emoji: string; label: string; value: string | number; accent: string }) {
  return (
    <div className="card-hover rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
      <div
        className={`mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-xl shadow-inner`}
      >
        {emoji}
      </div>
      <div className="font-display text-2xl font-extrabold text-slate-800 dark:text-slate-100">{value}</div>
      <div className="text-xs font-medium text-slate-400">{label}</div>
    </div>
  );
}

function DomainCard({
  id,
  subject,
  title,
  icon,
  color,
  count,
}: {
  id: string;
  subject: 'math' | 'reading';
  title: string;
  icon: string;
  color: string;
  count: number;
}) {
  const c = colorsFor(color);
  return (
    <Link
      to={`/${subject}/${id}`}
      className={`card-hover group rounded-2xl border p-5 shadow-sm ${c.border} ${c.bgSoft}`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${c.gradient} text-2xl shadow-md`}>
        {icon}
      </div>
      <h3 className={`mt-4 font-display font-bold ${c.text}`}>{title}</h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{count} тем</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-slate-400 transition group-hover:gap-2 group-hover:text-slate-600 dark:group-hover:text-slate-300">
        Открыть <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
