import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

interface TopicProgress {
  bestScore: number; // 0..1
  attempts: number;
  mastered: boolean;
}

interface ProgressState {
  xp: number;
  streak: number;
  lastActiveDate: string | null; // ISO date (yyyy-mm-dd)
  topics: Record<string, TopicProgress>;
}

interface ProgressContextValue {
  state: ProgressState;
  recordQuizResult: (topicId: string, correct: number, total: number) => void;
  isMastered: (topicId: string) => boolean;
  topicScore: (topicId: string) => number;
  totalMasteredCount: () => number;
}

const STORAGE_KEY = 'sat-prep-progress-v1';

function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const d1 = new Date(a + 'T00:00:00');
  const d2 = new Date(b + 'T00:00:00');
  return Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
}

function loadState(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore corrupted storage
  }
  return { xp: 0, streak: 0, lastActiveDate: null, topics: {} };
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Update streak on first load of the day
  useEffect(() => {
    const today = todayISO();
    setState((prev) => {
      if (prev.lastActiveDate === today) return prev;
      if (!prev.lastActiveDate) {
        return { ...prev, lastActiveDate: today, streak: Math.max(prev.streak, 1) };
      }
      const diff = daysBetween(prev.lastActiveDate, today);
      if (diff === 1) {
        return { ...prev, lastActiveDate: today, streak: prev.streak + 1 };
      } else if (diff > 1) {
        return { ...prev, lastActiveDate: today, streak: 1 };
      }
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const recordQuizResult = (topicId: string, correct: number, total: number) => {
    const score = total > 0 ? correct / total : 0;
    const today = todayISO();
    setState((prev) => {
      const existing = prev.topics[topicId] ?? { bestScore: 0, attempts: 0, mastered: false };
      const bestScore = Math.max(existing.bestScore, score);
      const mastered = bestScore >= 0.8;
      const earnedXp = correct * 10 + (mastered && !existing.mastered ? 50 : 0);

      let streak = prev.streak;
      let lastActiveDate = prev.lastActiveDate;
      if (prev.lastActiveDate !== today) {
        if (prev.lastActiveDate) {
          const diff = daysBetween(prev.lastActiveDate, today);
          streak = diff === 1 ? prev.streak + 1 : 1;
        } else {
          streak = Math.max(prev.streak, 1);
        }
        lastActiveDate = today;
      }

      return {
        ...prev,
        xp: prev.xp + earnedXp,
        streak,
        lastActiveDate,
        topics: {
          ...prev.topics,
          [topicId]: { bestScore, attempts: existing.attempts + 1, mastered },
        },
      };
    });
  };

  const isMastered = (topicId: string) => !!state.topics[topicId]?.mastered;
  const topicScore = (topicId: string) => state.topics[topicId]?.bestScore ?? 0;
  const totalMasteredCount = () => Object.values(state.topics).filter((t) => t.mastered).length;

  const value = useMemo(
    () => ({ state, recordQuizResult, isMastered, topicScore, totalMasteredCount }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
