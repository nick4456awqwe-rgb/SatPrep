// Explicit literal Tailwind classes per color so the JIT scanner can find them
// (dynamic template strings like `bg-${color}-500` are invisible to Tailwind v4 scanning).
export const colorMap: Record<
  string,
  { bg: string; bgSoft: string; text: string; border: string; ring: string; gradient: string; stroke: string }
> = {
  blue: {
    bg: 'bg-blue-500',
    bgSoft: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-900',
    ring: 'ring-blue-400',
    gradient: 'from-blue-500 to-blue-600',
    stroke: 'stroke-blue-500',
  },
  purple: {
    bg: 'bg-purple-500',
    bgSoft: 'bg-purple-50 dark:bg-purple-950/40',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-900',
    ring: 'ring-purple-400',
    gradient: 'from-purple-500 to-purple-600',
    stroke: 'stroke-purple-500',
  },
  emerald: {
    bg: 'bg-emerald-500',
    bgSoft: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-900',
    ring: 'ring-emerald-400',
    gradient: 'from-emerald-500 to-emerald-600',
    stroke: 'stroke-emerald-500',
  },
  orange: {
    bg: 'bg-orange-500',
    bgSoft: 'bg-orange-50 dark:bg-orange-950/40',
    text: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-200 dark:border-orange-900',
    ring: 'ring-orange-400',
    gradient: 'from-orange-500 to-orange-600',
    stroke: 'stroke-orange-500',
  },
  teal: {
    bg: 'bg-teal-500',
    bgSoft: 'bg-teal-50 dark:bg-teal-950/40',
    text: 'text-teal-600 dark:text-teal-400',
    border: 'border-teal-200 dark:border-teal-900',
    ring: 'ring-teal-400',
    gradient: 'from-teal-500 to-teal-600',
    stroke: 'stroke-teal-500',
  },
  indigo: {
    bg: 'bg-indigo-500',
    bgSoft: 'bg-indigo-50 dark:bg-indigo-950/40',
    text: 'text-indigo-600 dark:text-indigo-400',
    border: 'border-indigo-200 dark:border-indigo-900',
    ring: 'ring-indigo-400',
    gradient: 'from-indigo-500 to-indigo-600',
    stroke: 'stroke-indigo-500',
  },
  pink: {
    bg: 'bg-pink-500',
    bgSoft: 'bg-pink-50 dark:bg-pink-950/40',
    text: 'text-pink-600 dark:text-pink-400',
    border: 'border-pink-200 dark:border-pink-900',
    ring: 'ring-pink-400',
    gradient: 'from-pink-500 to-pink-600',
    stroke: 'stroke-pink-500',
  },
  red: {
    bg: 'bg-red-500',
    bgSoft: 'bg-red-50 dark:bg-red-950/40',
    text: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-900',
    ring: 'ring-red-400',
    gradient: 'from-red-500 to-red-600',
    stroke: 'stroke-red-500',
  },
};

export function colorsFor(color: string) {
  return colorMap[color] ?? colorMap.blue;
}
