import type { ReactNode } from 'react';

// Original stylized mockups of a graphing-calculator interface (not a copy of any
// real product's pixels/branding) used purely to illustrate the workflow described
// in the guide text. Colors/labels are generic and theme-aware.

const GRID = 'stroke-slate-200 dark:stroke-slate-700';
const AXIS = 'stroke-slate-400 dark:stroke-slate-500';
const INK = 'fill-slate-700 dark:fill-slate-200';
const DOT_COLORS = ['#2d70b3', '#c74440', '#388c46', '#6042a6', '#fa7e19'];

function Chrome({ children, rows, height = 260 }: { children: ReactNode; rows: string[]; height?: number }) {
  return (
    <div className="my-4 overflow-hidden rounded-2xl border border-slate-300 shadow-md dark:border-slate-600">
      {/* fake title bar */}
      <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-medium text-slate-400">графический калькулятор</span>
      </div>
      <div className="flex">
        {/* expression list panel */}
        <div className="w-[38%] min-w-[130px] space-y-0 border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-b border-slate-100 px-2.5 py-2 text-[13px] dark:border-slate-800"
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ backgroundColor: DOT_COLORS[i % DOT_COLORS.length] }}
              />
              <span className="truncate font-mono text-slate-700 dark:text-slate-200">{r}</span>
            </div>
          ))}
          <div className="px-2.5 py-2 text-[13px] text-slate-300 dark:text-slate-600">+ добавить</div>
        </div>
        {/* graph area */}
        <div className="flex-1 bg-white dark:bg-slate-900">
          <svg viewBox="0 0 300 220" width="100%" height={height} style={{ display: 'block' }}>
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}

function GraphPaper({ cx = 150, cy = 110 }: { cx?: number; cy?: number }) {
  const lines = [];
  for (let x = 10; x <= 290; x += 20) {
    lines.push(<line key={`v${x}`} x1={x} y1={0} x2={x} y2={220} className={GRID} strokeWidth={1} />);
  }
  for (let y = 10; y <= 210; y += 20) {
    lines.push(<line key={`h${y}`} x1={0} y1={y} x2={300} y2={y} className={GRID} strokeWidth={1} />);
  }
  return (
    <g>
      {lines}
      <line x1={0} y1={cy} x2={300} y2={cy} className={AXIS} strokeWidth={1.5} />
      <line x1={cx} y1={0} x2={cx} y2={220} className={AXIS} strokeWidth={1.5} />
    </g>
  );
}

function poly(fn: (x: number) => number, xMin: number, xMax: number, toPx: (x: number, y: number) => [number, number], steps = 60) {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + ((xMax - xMin) * i) / steps;
    const [px, py] = toPx(x, fn(x));
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return pts.join(' ');
}

export default function DesmosMock({ id }: { id: string }) {
  switch (id) {
    case 'interface-overview': {
      const toPx = (x: number, y: number): [number, number] => [150 + x * 18, 110 - y * 12];
      return (
        <Chrome rows={['y = x² − 4', 'y = 2x + 1', '(x, y)']}>
          <GraphPaper />
          <polyline points={poly((x) => 0.5 * x * x - 4, -8, 8, toPx)} fill="none" stroke={DOT_COLORS[0]} strokeWidth={2.5} />
          <polyline points={poly((x) => 2 * x + 1, -6, 6, toPx)} fill="none" stroke={DOT_COLORS[1]} strokeWidth={2.5} />
        </Chrome>
      );
    }
    case 'intersection': {
      const toPx = (x: number, y: number): [number, number] => [150 + x * 20, 110 - y * 12];
      const c1 = poly((x) => 0.4 * x * x - 2, -8, 8, toPx);
      const c2 = poly((x) => x + 1, -8, 8, toPx);
      // intersection roughly at x ≈ -1.2 and x ≈ 2.5 for these params — mark two points illustratively
      return (
        <Chrome rows={['y₁ = 0.4x² − 2', 'y₂ = x + 1', 'point: (2.5, 3.5)']}>
          <GraphPaper />
          <polyline points={c1} fill="none" stroke={DOT_COLORS[0]} strokeWidth={2.5} />
          <polyline points={c2} fill="none" stroke={DOT_COLORS[1]} strokeWidth={2.5} />
          <circle cx={200} cy={68} r={5} fill={DOT_COLORS[2]} stroke="white" strokeWidth={1.5} />
          <text x={208} y={62} className={`${INK} text-[11px]`}>(2.5, 3.5)</text>
        </Chrome>
      );
    }
    case 'parabola-vertex-click': {
      const toPx = (x: number, y: number): [number, number] => [150 + x * 20, 170 - y * 12];
      const curve = poly((x) => 0.6 * (x - 1) * (x - 1) - 3, -6, 8, toPx);
      const [vx, vy] = toPx(1, -3);
      return (
        <Chrome rows={['y = 0.6(x−1)² − 3']} height={220}>
          <GraphPaper cy={170} />
          <polyline points={curve} fill="none" stroke={DOT_COLORS[0]} strokeWidth={2.5} />
          <circle cx={vx} cy={vy} r={5} fill="white" stroke={DOT_COLORS[3]} strokeWidth={2} />
          <text x={vx + 8} y={vy - 8} className={`${INK} text-[11px]`}>минимум: (1, −3)</text>
        </Chrome>
      );
    }
    case 'table-regression': {
      const pts: [number, number][] = [[1, 3], [2, 5], [3, 6], [4, 9], [5, 10]];
      const toPx = (x: number, y: number): [number, number] => [30 + x * 45, 200 - y * 16];
      const linePts = poly((x) => 1.8 * x + 1, 0, 6, toPx);
      return (
        <Chrome rows={['x₁, y₁ (таблица)', 'y₁ ~ mx₁ + b', 'm = 1.8, b = 1.1']}>
          <GraphPaper cx={30} cy={200} />
          <polyline points={linePts} fill="none" stroke={DOT_COLORS[1]} strokeWidth={2} strokeDasharray="5 3" />
          {pts.map(([x, y], i) => {
            const [px, py] = toPx(x, y);
            return <circle key={i} cx={px} cy={py} r={5} fill={DOT_COLORS[0]} />;
          })}
        </Chrome>
      );
    }
    case 'slider-family': {
      const toPx = (x: number, y: number): [number, number] => [150 + x * 18, 170 - y * 14];
      return (
        <Chrome rows={['y = a·x²', 'a = 1']} height={220}>
          <GraphPaper cy={170} />
          {[0.4, 0.8, 1.4].map((a, i) => (
            <polyline
              key={a}
              points={poly((x) => a * x * x - 5, -7, 7, toPx)}
              fill="none"
              stroke={DOT_COLORS[i]}
              strokeWidth={2}
              opacity={i === 1 ? 1 : 0.45}
            />
          ))}
          <rect x={30} y={195} width={90} height={10} rx={5} fill="none" className={AXIS} strokeWidth={1} />
          <circle cx={75} cy={200} r={6} fill={DOT_COLORS[1]} />
          <text x={130} y={204} className={`${INK} text-[11px]`}>a: слайдер</text>
        </Chrome>
      );
    }
    case 'inequality-shading': {
      const toPx = (x: number, y: number): [number, number] => [150 + x * 18, 170 - y * 12];
      const line = poly((x) => x + 1, -9, 9, toPx);
      return (
        <Chrome rows={['y > x + 1']} height={220}>
          <GraphPaper cy={170} />
          <polygon points={`${line} 300,0 0,0`} fill="rgba(45,112,179,0.18)" />
          <polyline points={line} fill="none" stroke={DOT_COLORS[0]} strokeWidth={2} strokeDasharray="6 4" />
        </Chrome>
      );
    }
    case 'stats-list': {
      return (
        <Chrome rows={['L₁ = {2,4,6,8,20}', 'mean(L₁) = 8', 'median(L₁) = 6', 'stdev(L₁) = 6.96']} height={220}>
          <g>
            <line x1={20} y1={190} x2={280} y2={190} className={AXIS} />
            {[2, 4, 6, 8, 20].map((v, i) => (
              <circle key={i} cx={20 + v * 12} cy={175} r={5} fill={DOT_COLORS[i % DOT_COLORS.length]} />
            ))}
            <text x={150} y={40} textAnchor="middle" className={`${INK} text-[12px]`}>
              Desmos считает статистику по списку мгновенно
            </text>
          </g>
        </Chrome>
      );
    }
    case 'circle-typed': {
      return (
        <Chrome rows={['(x−2)² + (y+1)² = 16']}>
          <GraphPaper cx={150 - 2 * 18} cy={110 + 1 * 12} />
          <circle cx={150} cy={122} r={72} fill="none" stroke={DOT_COLORS[0]} strokeWidth={2.5} />
          <circle cx={150} cy={122} r={3.5} fill={DOT_COLORS[2]} />
        </Chrome>
      );
    }
    case 'trig-curve': {
      const toPx = (x: number, y: number): [number, number] => [150 + x * 16, 110 - y * 40];
      const curve = poly((x) => Math.sin(x), -9, 9, toPx, 100);
      return (
        <Chrome rows={['y = sin(x)', 'settings: radians']}>
          <GraphPaper />
          <polyline points={curve} fill="none" stroke={DOT_COLORS[0]} strokeWidth={2.5} />
        </Chrome>
      );
    }
    case 'geometry-tool': {
      return (
        <div className="my-4 overflow-hidden rounded-2xl border border-slate-300 shadow-md dark:border-slate-600">
          <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs font-medium text-slate-400">геометрический инструмент</span>
          </div>
          <div className="flex items-center gap-4 border-b border-slate-200 bg-white px-4 py-2 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
            {['📍 точка', '📏 отрезок', '📐 угол', '⭕ окружность', '📎 измерить'].map((t) => (
              <span key={t} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium dark:bg-slate-800">
                {t}
              </span>
            ))}
          </div>
          <svg viewBox="0 0 300 200" width="100%" height={200} className="bg-white dark:bg-slate-900">
            <GraphPaper cy={100} />
            <polygon points="80,150 220,150 150,50" fill="none" stroke={DOT_COLORS[0]} strokeWidth={2.5} />
            <circle cx={80} cy={150} r={4} fill={DOT_COLORS[1]} />
            <circle cx={220} cy={150} r={4} fill={DOT_COLORS[1]} />
            <circle cx={150} cy={50} r={4} fill={DOT_COLORS[1]} />
            <text x={150} y={170} textAnchor="middle" className={`${INK} text-[11px]`}>AB = 140, ∠A = 62°</text>
          </svg>
        </div>
      );
    }
    default:
      return null;
  }
}
