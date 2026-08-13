import { useProgress } from '../context/ProgressContext';

export default function StreakWidget() {
  const { state } = useProgress();
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 dark:bg-orange-950/40">
        <span className={`text-lg ${state.streak > 0 ? 'animate-pulse' : 'grayscale opacity-50'}`}>🔥</span>
        <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{state.streak}</span>
      </div>
      <div className="flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 dark:bg-blue-950/40">
        <span className="text-lg">⭐</span>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{state.xp} XP</span>
      </div>
    </div>
  );
}
