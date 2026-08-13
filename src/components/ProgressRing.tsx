interface Props {
  progress: number; // 0..1
  size?: number;
  strokeWidth?: number;
  colorClass?: string; // stroke color e.g. 'stroke-blue-500'
}

export default function ProgressRing({ progress, size = 44, strokeWidth = 5, colorClass = 'stroke-blue-500' }: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(progress, 0), 1));

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        className="fill-none stroke-slate-200 dark:stroke-slate-700"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className={`fill-none transition-all duration-500 ${colorClass}`}
      />
    </svg>
  );
}
