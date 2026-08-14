// Reusable inline-SVG diagram library for math lessons.
// Each diagram is pure, parameter-free JSX keyed by `id`, theme-aware via currentColor.
import type { ReactNode } from 'react';

const AXIS = 'stroke-slate-400 dark:stroke-slate-500';
const GRID = 'stroke-slate-200 dark:stroke-slate-700';
const LABEL = 'fill-slate-600 dark:fill-slate-300 text-[13px]';
const CURVE_A = '#3b82f6'; // blue
const CURVE_B = '#f97316'; // orange
const CURVE_C = '#10b981'; // emerald
const CURVE_D = '#ef4444'; // red
const FILL_A = 'rgba(59,130,246,0.15)';
const FILL_B = 'rgba(249,115,22,0.15)';

function Frame({ children, viewBox = '0 0 320 220', h = 220 }: { children: ReactNode; viewBox?: string; h?: number }) {
  return (
    <div className="my-4 flex justify-center overflow-x-auto rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <svg viewBox={viewBox} width="100%" style={{ maxWidth: 560, height: 'auto' }} height={h}>
        {children}
      </svg>
    </div>
  );
}

function Axes({ x0 = 20, x1 = 300, y0 = 200, y1 = 20, cx, cy }: { x0?: number; x1?: number; y0?: number; y1?: number; cx: number; cy: number }) {
  return (
    <g>
      <line x1={x0} y1={cy} x2={x1} y2={cy} className={AXIS} strokeWidth={1.5} />
      <line x1={cx} y1={y0} x2={cx} y2={y1} className={AXIS} strokeWidth={1.5} />
    </g>
  );
}

function polyline(fn: (x: number) => number, xMin: number, xMax: number, toPx: (x: number, y: number) => [number, number], steps = 60) {
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + ((xMax - xMin) * i) / steps;
    const y = fn(x);
    const [px, py] = toPx(x, y);
    pts.push(`${px.toFixed(1)},${py.toFixed(1)}`);
  }
  return pts.join(' ');
}

const deg = (d: number) => (d * Math.PI) / 180;

export default function Diagram({ id }: { id: string }) {
  switch (id) {
    // ---------- ALGEBRA ----------
    case 'number-line-solution': {
      const scale = (v: number) => 40 + (v + 6) * 20;
      return (
        <Frame viewBox="0 0 320 90" h={90}>
          <line x1={20} y1={45} x2={300} y2={45} className={AXIS} strokeWidth={1.5} />
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((v) => (
            <g key={v}>
              <line x1={scale(v)} y1={40} x2={scale(v)} y2={50} className={AXIS} strokeWidth={1} />
              <text x={scale(v)} y={65} textAnchor="middle" className={LABEL}>{v}</text>
            </g>
          ))}
          <circle cx={scale(3)} cy={45} r={6} fill={CURVE_A} />
          <text x={scale(3)} y={25} textAnchor="middle" fontWeight={700} fill={CURVE_A} fontSize={12}>x = 3</text>
        </Frame>
      );
    }
    case 'inequality-number-line': {
      const scale = (v: number) => 40 + (v + 6) * 20;
      return (
        <Frame viewBox="0 0 320 90" h={90}>
          <line x1={20} y1={45} x2={300} y2={45} className={AXIS} strokeWidth={1.5} />
          {[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5].map((v) => (
            <g key={v}>
              <line x1={scale(v)} y1={40} x2={scale(v)} y2={50} className={AXIS} strokeWidth={1} />
              <text x={scale(v)} y={65} textAnchor="middle" className={LABEL}>{v}</text>
            </g>
          ))}
          <line x1={scale(2)} y1={45} x2={280} y2={45} stroke={CURVE_A} strokeWidth={4} />
          <circle cx={scale(2)} cy={45} r={6} fill="white" stroke={CURVE_A} strokeWidth={3} />
          <text x={scale(2)} y={25} textAnchor="middle" fontWeight={700} fill={CURVE_A} fontSize={12}>x &gt; 2</text>
          <text x={280} y={30} textAnchor="middle" fill={CURVE_A} fontSize={14}>→</text>
        </Frame>
      );
    }
    case 'systems-solution-types': {
      const mk = (label: string, draw: ReactNode, key: string) => (
        <g key={key}>
          <rect x={0} y={0} width={100} height={100} fill="none" />
          {draw}
          <text x={50} y={95} textAnchor="middle" className={LABEL} fontSize={10}>{label}</text>
        </g>
      );
      return (
        <Frame viewBox="0 0 320 110" h={130}>
          <g transform="translate(5,0)">
            {mk('Одно решение', <g><line x1={10} y1={80} x2={90} y2={10} stroke={CURVE_A} strokeWidth={2} /><line x1={10} y1={20} x2={90} y2={70} stroke={CURVE_B} strokeWidth={2} /><circle cx={54} cy={44} r={3.5} fill={CURVE_D} /></g>, 'a')}
          </g>
          <g transform="translate(115,0)">
            {mk('Нет решений', <g><line x1={10} y1={70} x2={90} y2={30} stroke={CURVE_A} strokeWidth={2} /><line x1={10} y1={90} x2={90} y2={50} stroke={CURVE_B} strokeWidth={2} /></g>, 'b')}
          </g>
          <g transform="translate(225,0)">
            {mk('Беск. много', <g><line x1={10} y1={80} x2={90} y2={20} stroke={CURVE_A} strokeWidth={4} /><line x1={10} y1={80} x2={90} y2={20} stroke={CURVE_B} strokeWidth={1.5} strokeDasharray="4 3" /></g>, 'c')}
          </g>
        </Frame>
      );
    }
    case 'linear-inequality-graph': {
      const toPx = (x: number, y: number): [number, number] => [40 + x * 20, 180 - y * 20];
      const line = polyline((x) => 0.5 * x + 2, -8, 6, toPx);
      return (
        <Frame viewBox="0 0 320 200" h={200}>
          <Axes cx={40} cy={180} y0={190} y1={10} x1={300} />
          <polygon points={`${line} 300,10 40,10`} fill={FILL_A} />
          <polyline points={line} fill="none" stroke={CURVE_A} strokeWidth={2} strokeDasharray="6 4" />
          <text x={230} y={40} className={LABEL}>y &gt; 0.5x + 2</text>
          <text x={150} y={195} textAnchor="middle" className={LABEL}>закрашено выше пунктирной линии</text>
        </Frame>
      );
    }
    case 'systems-inequalities-graph': {
      const toPx = (x: number, y: number): [number, number] => [40 + x * 20, 180 - y * 20];
      const l1 = polyline((x) => 0.6 * x + 3, -8, 6, toPx);
      const l2 = polyline((x) => -0.6 * x + 5, -8, 6, toPx);
      return (
        <Frame viewBox="0 0 320 200" h={200}>
          <Axes cx={40} cy={180} y0={190} y1={10} x1={300} />
          <polygon points={`${l1} 300,10 40,10`} fill={FILL_A} />
          <polygon points={`${l2} 40,10 300,10`} fill={FILL_B} />
          <polyline points={l1} fill="none" stroke={CURVE_A} strokeWidth={2} />
          <polyline points={l2} fill="none" stroke={CURVE_B} strokeWidth={2} />
          <text x={90} y={45} className={LABEL} fill={CURVE_A}>y ≥ x + 2</text>
          <text x={190} y={45} className={LABEL} fill={CURVE_B}>y ≤ −x + 6</text>
          <text x={150} y={195} textAnchor="middle" className={LABEL}>решение — пересечение (тёмная зона)</text>
        </Frame>
      );
    }

    // ---------- ADVANCED MATH ----------
    case 'parabola-forms': {
      const toPxUp = (x: number, y: number): [number, number] => [60 + x * 18, 100 - y * 14];
      const up = polyline((x) => 0.7 * x * x - 2, -7, 7, toPxUp);
      const toPxDown = (x: number, y: number): [number, number] => [230 + x * 18, 40 - y * 14];
      const down = polyline((x) => -0.7 * x * x + 2, -7, 7, toPxDown);
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <line x1={10} y1={100} x2={130} y2={100} className={AXIS} />
          <line x1={60} y1={20} x2={60} y2={170} className={AXIS} />
          <polyline points={up} fill="none" stroke={CURVE_A} strokeWidth={2.5} />
          <circle cx={60} cy={86} r={3.5} fill={CURVE_D} />
          <text x={60} y={185} textAnchor="middle" className={LABEL}>a &gt; 0: вершина = минимум</text>

          <line x1={180} y1={40} x2={300} y2={40} className={AXIS} />
          <line x1={230} y1={10} x2={230} y2={140} className={AXIS} />
          <polyline points={down} fill="none" stroke={CURVE_B} strokeWidth={2.5} />
          <circle cx={230} cy={12} r={3.5} fill={CURVE_D} />
          <text x={230} y={185} textAnchor="middle" className={LABEL}>a &lt; 0: вершина = максимум</text>
        </Frame>
      );
    }
    case 'parabola-roots': {
      const toPx = (x: number, y: number): [number, number] => [160 + x * 22, 170 - y * 12];
      const curve = polyline((x) => 0.5 * (x - 2) * (x + 2), -6, 6, toPx);
      return (
        <Frame viewBox="0 0 320 200" h={200}>
          <line x1={20} y1={110} x2={300} y2={110} className={AXIS} />
          <line x1={160} y1={20} x2={160} y2={190} className={AXIS} />
          <polyline points={curve} fill="none" stroke={CURVE_A} strokeWidth={2.5} />
          <circle cx={116} cy={110} r={4} fill={CURVE_D} />
          <circle cx={204} cy={110} r={4} fill={CURVE_D} />
          <text x={116} y={128} textAnchor="middle" className={LABEL}>p = −2</text>
          <text x={204} y={128} textAnchor="middle" className={LABEL}>q = 2</text>
          <line x1={160} y1={110} x2={160} y2={80} stroke={CURVE_D} strokeDasharray="3 3" strokeWidth={1} />
          <text x={160} y={70} textAnchor="middle" className={LABEL} fill={CURVE_D}>ось симметрии x = (p+q)/2</text>
        </Frame>
      );
    }
    case 'exponential-curves': {
      const toPx1 = (x: number, y: number): [number, number] => [30 + x * 20, 170 - y * 12];
      const growth = polyline((x) => Math.pow(1.5, x), 0, 6.5, toPx1);
      const toPx2 = (x: number, y: number): [number, number] => [190 + x * 20, 170 - y * 12];
      const decay = polyline((x) => 10 * Math.pow(0.6, x), 0, 6.5, toPx2);
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <line x1={30} y1={170} x2={165} y2={170} className={AXIS} />
          <line x1={30} y1={170} x2={30} y2={20} className={AXIS} />
          <polyline points={growth} fill="none" stroke={CURVE_A} strokeWidth={2.5} />
          <text x={97} y={185} textAnchor="middle" className={LABEL}>рост: y = a·b^x, b &gt; 1</text>

          <line x1={190} y1={170} x2={325} y2={170} className={AXIS} />
          <line x1={190} y1={170} x2={190} y2={20} className={AXIS} />
          <polyline points={decay} fill="none" stroke={CURVE_B} strokeWidth={2.5} />
          <text x={257} y={185} textAnchor="middle" className={LABEL}>спад: y = a·b^x, 0&lt;b&lt;1</text>
        </Frame>
      );
    }
    case 'line-parabola-intersection': {
      const toPx = (x: number, y: number): [number, number] => [160 + x * 22, 170 - y * 12];
      const curve = polyline((x) => 0.5 * (x * x) - 1, -6, 6, toPx);
      const lineP = polyline((x) => x + 1, -6, 6, toPx);
      return (
        <Frame viewBox="0 0 320 200" h={200}>
          <line x1={20} y1={110} x2={300} y2={110} className={AXIS} />
          <line x1={160} y1={20} x2={160} y2={190} className={AXIS} />
          <polyline points={curve} fill="none" stroke={CURVE_A} strokeWidth={2.5} />
          <polyline points={lineP} fill="none" stroke={CURVE_B} strokeWidth={2} />
          <circle cx={160 - 22} cy={110 - 12 * 0} r={4} fill={CURVE_D} />
          <circle cx={160 + 88} cy={170 - 12 * 5} r={4} fill={CURVE_D} />
          <text x={97} y={140} className={LABEL} fill={CURVE_A}>y = x² − 1 (парабола)</text>
          <text x={190} y={60} className={LABEL} fill={CURVE_B}>y = x + 1 (прямая)</text>
        </Frame>
      );
    }

    // ---------- GEOMETRY: AREA & VOLUME ----------
    case 'shapes-area': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(10,15)">
            <rect x={0} y={0} width={70} height={45} fill="none" stroke={CURVE_A} strokeWidth={2} />
            <text x={35} y={60} textAnchor="middle" className={LABEL}>длина × ширина</text>
            <text x={-4} y={25} textAnchor="end" className={LABEL}>w</text>
            <text x={35} y={-4} textAnchor="middle" className={LABEL}>l</text>
          </g>
          <g transform="translate(120,15)">
            <polygon points="0,45 70,45 25,0" fill="none" stroke={CURVE_B} strokeWidth={2} />
            <line x1={25} y1={45} x2={25} y2={0} stroke={CURVE_B} strokeDasharray="3 3" strokeWidth={1} />
            <text x={35} y={60} textAnchor="middle" className={LABEL}>½ · осн. · высота</text>
          </g>
          <g transform="translate(230,35)">
            <circle cx={25} cy={25} r={25} fill="none" stroke={CURVE_C} strokeWidth={2} />
            <line x1={25} y1={25} x2={50} y2={25} stroke={CURVE_C} strokeWidth={1.5} />
            <text x={38} y={20} className={LABEL}>r</text>
            <text x={25} y={64} textAnchor="middle" className={LABEL}>πr²</text>
          </g>
          <g transform="translate(60,110)">
            <polygon points="0,45 20,0 70,0 90,45" fill="none" stroke={CURVE_D} strokeWidth={2} />
            <text x={45} y={62} textAnchor="middle" className={LABEL}>½(b₁+b₂)·h — трапеция</text>
          </g>
          <g transform="translate(200,110)">
            <polygon points="0,45 60,45 80,15 20,15" fill="none" stroke="#a855f7" strokeWidth={2} />
            <text x={40} y={62} textAnchor="middle" className={LABEL}>осн. × высота — параллелограмм</text>
          </g>
        </Frame>
      );
    }
    case 'shapes-volume': {
      return (
        <Frame viewBox="0 0 320 170" h={170}>
          <g transform="translate(10,20)">
            <polygon points="0,20 40,20 55,5 15,5" fill="none" stroke={CURVE_A} strokeWidth={1.5} />
            <polygon points="0,20 0,60 40,60 40,20" fill="none" stroke={CURVE_A} strokeWidth={1.5} />
            <polygon points="40,20 55,5 55,45 40,60" fill="none" stroke={CURVE_A} strokeWidth={1.5} />
            <text x={27} y={80} textAnchor="middle" className={LABEL}>lwh</text>
          </g>
          <g transform="translate(100,15)">
            <ellipse cx={25} cy={10} rx={22} ry={8} fill="none" stroke={CURVE_B} strokeWidth={1.5} />
            <line x1={3} y1={10} x2={3} y2={55} stroke={CURVE_B} strokeWidth={1.5} />
            <line x1={47} y1={10} x2={47} y2={55} stroke={CURVE_B} strokeWidth={1.5} />
            <path d="M 3 55 A 22 8 0 0 0 47 55" fill="none" stroke={CURVE_B} strokeWidth={1.5} />
            <text x={25} y={80} textAnchor="middle" className={LABEL}>πr²h</text>
          </g>
          <g transform="translate(180,15)">
            <ellipse cx={25} cy={58} rx={22} ry={7} fill="none" stroke={CURVE_C} strokeWidth={1.5} />
            <line x1={3} y1={58} x2={25} y2={5} stroke={CURVE_C} strokeWidth={1.5} />
            <line x1={47} y1={58} x2={25} y2={5} stroke={CURVE_C} strokeWidth={1.5} />
            <text x={25} y={80} textAnchor="middle" className={LABEL}>⅓πr²h</text>
          </g>
          <g transform="translate(255,15)">
            <circle cx={25} cy={30} r={25} fill="none" stroke={CURVE_D} strokeWidth={1.5} />
            <ellipse cx={25} cy={30} rx={25} ry={8} fill="none" stroke={CURVE_D} strokeWidth={1} strokeDasharray="3 2" />
            <text x={25} y={80} textAnchor="middle" className={LABEL}>⁴⁄₃πr³</text>
          </g>
        </Frame>
      );
    }

    // ---------- GEOMETRY: ANGLES & TRIANGLES ----------
    case 'parallel-lines-transversal': {
      return (
        <Frame viewBox="0 0 320 180" h={180}>
          <line x1={20} y1={60} x2={300} y2={60} className={AXIS} strokeWidth={2} />
          <line x1={20} y1={140} x2={300} y2={140} className={AXIS} strokeWidth={2} />
          <line x1={90} y1={20} x2={230} y2={180} stroke={CURVE_A} strokeWidth={2} />
          <text x={30} y={54} className={LABEL}>ℓ₁</text>
          <text x={30} y={134} className={LABEL}>ℓ₂</text>
          {/* angle labels at intersection 1 */}
          <text x={130} y={50} className={LABEL} fontSize={10}>1</text>
          <text x={155} y={50} className={LABEL} fontSize={10}>2</text>
          <text x={130} y={78} className={LABEL} fontSize={10}>3</text>
          <text x={155} y={78} className={LABEL} fontSize={10}>4</text>
          <text x={175} y={130} className={LABEL} fontSize={10}>5</text>
          <text x={200} y={130} className={LABEL} fontSize={10}>6</text>
          <text x={175} y={158} className={LABEL} fontSize={10}>7</text>
          <text x={200} y={158} className={LABEL} fontSize={10}>8</text>
          <text x={20} y={20} className={LABEL} fill={CURVE_A}>∠2 = ∠6 (corresponding), ∠4 = ∠5 (alternate interior)</text>
        </Frame>
      );
    }
    case 'triangle-angle-sum': {
      return (
        <Frame viewBox="0 0 320 170" h={170}>
          <polygon points="60,150 260,150 150,20" fill="none" stroke={CURVE_A} strokeWidth={2} />
          <text x={55} y={165} textAnchor="middle" className={LABEL}>A</text>
          <text x={265} y={165} textAnchor="middle" className={LABEL}>B</text>
          <text x={150} y={12} textAnchor="middle" className={LABEL}>C</text>
          <text x={90} y={140} className={LABEL} fontSize={10}>∠A</text>
          <text x={225} y={140} className={LABEL} fontSize={10}>∠B</text>
          <text x={148} y={38} className={LABEL} fontSize={10}>∠C</text>
          <line x1={260} y1={150} x2={310} y2={150} stroke={CURVE_D} strokeWidth={1.5} strokeDasharray="4 3" />
          <text x={280} y={140} className={LABEL} fill={CURVE_D} fontSize={10}>внешний угол</text>
          <text x={150} y={168} textAnchor="middle" className={LABEL}>∠A + ∠B + ∠C = 180°</text>
        </Frame>
      );
    }
    case 'similar-triangles': {
      return (
        <Frame viewBox="0 0 320 150" h={150}>
          <polygon points="20,120 80,120 20,60" fill="none" stroke={CURVE_A} strokeWidth={2} />
          <text x={12} y={95} className={LABEL} fontSize={10}>4</text>
          <text x={50} y={135} className={LABEL} fontSize={10}>3</text>
          <text x={40} y={85} className={LABEL} fontSize={10}>5</text>

          <polygon points="150,120 270,120 150,30" fill="none" stroke={CURVE_B} strokeWidth={2} />
          <text x={138} y={80} className={LABEL} fontSize={10}>12</text>
          <text x={205} y={135} className={LABEL} fontSize={10}>9</text>
          <text x={195} y={65} className={LABEL} fontSize={10}>15</text>
          <text x={150} y={148} textAnchor="middle" className={LABEL}>коэффициент подобия k = 3 (все стороны ×3)</text>
        </Frame>
      );
    }
    case 'special-triangles': {
      return (
        <Frame viewBox="0 0 320 170" h={170}>
          <g transform="translate(10,10)">
            <polygon points="0,120 90,120 0,30" fill="none" stroke={CURVE_A} strokeWidth={2} />
            <text x={-8} y={78} className={LABEL} fontSize={10}>a</text>
            <text x={40} y={135} className={LABEL} fontSize={10}>a</text>
            <text x={40} y={70} className={LABEL} fontSize={10}>a√2</text>
            <rect x={0} y={108} width={12} height={12} fill="none" stroke={CURVE_A} strokeWidth={1} />
            <text x={40} y={150} textAnchor="middle" className={LABEL}>45° – 45° – 90°</text>
          </g>
          <g transform="translate(170,10)">
            <polygon points="0,120 130,120 0,20" fill="none" stroke={CURVE_B} strokeWidth={2} />
            <text x={-10} y={72} className={LABEL} fontSize={10}>a</text>
            <text x={55} y={135} className={LABEL} fontSize={10}>a√3</text>
            <text x={45} y={62} className={LABEL} fontSize={10}>2a</text>
            <rect x={0} y={108} width={12} height={12} fill="none" stroke={CURVE_B} strokeWidth={1} />
            <text x={55} y={150} textAnchor="middle" className={LABEL}>30° – 60° – 90°</text>
          </g>
        </Frame>
      );
    }
    case 'pythagorean-triangle': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <polygon points="60,160 220,160 60,40" fill="none" stroke={CURVE_A} strokeWidth={2} />
          <rect x={60} y={148} width={12} height={12} fill="none" stroke={CURVE_A} strokeWidth={1} />
          <text x={40} y={105} className={LABEL}>a</text>
          <text x={140} y={178} className={LABEL}>b</text>
          <text x={150} y={95} className={LABEL} fill={CURVE_D}>c (гипотенуза)</text>
          <text x={140} y={20} textAnchor="middle" fontWeight={700} className={LABEL}>a² + b² = c²</text>
        </Frame>
      );
    }
    case 'soh-cah-toa-triangle': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <polygon points="60,160 260,160 60,40" fill="none" stroke={CURVE_A} strokeWidth={2} />
          <rect x={60} y={148} width={12} height={12} fill="none" stroke={CURVE_A} strokeWidth={1} />
          <path d="M 100 160 A 40 40 0 0 0 84 128" fill="none" stroke={CURVE_D} strokeWidth={1.5} />
          <text x={108} y={140} className={LABEL} fill={CURVE_D}>θ</text>
          <text x={155} y={178} className={LABEL}>adjacent</text>
          <text x={40} y={100} className={LABEL}>opposite</text>
          <text x={175} y={90} className={LABEL} fill={CURVE_D}>hypotenuse</text>
          <text x={160} y={15} textAnchor="middle" className={LABEL} fontWeight={700}>sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj</text>
        </Frame>
      );
    }
    case 'unit-circle-special-angles': {
      const R = 70;
      const cx = 160;
      const cy = 110;
      const angles = [30, 45, 60, 90];
      return (
        <Frame viewBox="0 0 320 220" h={220}>
          <circle cx={cx} cy={cy} r={R} fill="none" className={GRID} strokeWidth={1.5} />
          <line x1={cx - R - 10} y1={cy} x2={cx + R + 10} y2={cy} className={AXIS} />
          <line x1={cx} y1={cy - R - 10} x2={cx} y2={cy + R + 10} className={AXIS} />
          {angles.map((a) => {
            const rad = deg(a);
            const x = cx + R * Math.cos(rad);
            const y = cy - R * Math.sin(rad);
            return (
              <g key={a}>
                <line x1={cx} y1={cy} x2={x} y2={y} stroke={CURVE_A} strokeWidth={1.5} />
                <circle cx={x} cy={y} r={3} fill={CURVE_D} />
                <text x={x + (a === 90 ? 10 : 8)} y={y - 6} className={LABEL} fontSize={10}>{a}°</text>
              </g>
            );
          })}
          <text x={160} y={210} textAnchor="middle" className={LABEL}>особые углы: 30°, 45°, 60°, 90°</text>
        </Frame>
      );
    }

    // ---------- CIRCLES ----------
    case 'circle-equation': {
      const cx = 170, cy = 110, r = 60;
      return (
        <Frame viewBox="0 0 320 220" h={220}>
          <line x1={20} y1={110} x2={300} y2={110} className={AXIS} />
          <line x1={170} y1={10} x2={170} y2={210} className={AXIS} />
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={CURVE_A} strokeWidth={2} />
          <circle cx={cx} cy={cy} r={3} fill={CURVE_D} />
          <text x={cx + 8} y={cy - 8} className={LABEL}>(h, k)</text>
          <line x1={cx} y1={cy} x2={cx + r} y2={cy} stroke={CURVE_D} strokeWidth={1.5} strokeDasharray="4 3" />
          <text x={cx + r / 2} y={cy - 8} className={LABEL} fill={CURVE_D}>r</text>
          <text x={170} y={16} textAnchor="middle" className={LABEL} fontWeight={700}>(x − h)² + (y − k)² = r²</text>
        </Frame>
      );
    }
    case 'circle-arc-sector': {
      const cx = 160, cy = 110, r = 80;
      const a1 = deg(0), a2 = deg(75);
      const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1);
      const x2 = cx + r * Math.cos(a2), y2 = cy - r * Math.sin(a2);
      return (
        <Frame viewBox="0 0 320 220" h={220}>
          <circle cx={cx} cy={cy} r={r} fill="none" className={GRID} strokeWidth={1.5} />
          <path d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 0 ${x2} ${y2} Z`} fill={FILL_A} stroke={CURVE_A} strokeWidth={2} />
          <text x={cx + 20} y={cy - 30} className={LABEL} fill={CURVE_A}>сектор</text>
          <text x={x1 + 10} y={y1 + 15} className={LABEL} fontSize={10}>угол сектора</text>
          <text x={160} y={210} textAnchor="middle" className={LABEL}>длина дуги = (угол/360°)·2πr; площадь сектора = (угол/360°)·πr²</text>
        </Frame>
      );
    }
    case 'inscribed-central-angle': {
      const cx = 160, cy = 110, r = 80;
      const a1 = deg(30), a2 = deg(150), a3 = deg(260);
      const p1x = cx + r * Math.cos(a1), p1y = cy - r * Math.sin(a1);
      const p2x = cx + r * Math.cos(a2), p2y = cy - r * Math.sin(a2);
      const p3x = cx + r * Math.cos(a3), p3y = cy - r * Math.sin(a3);
      return (
        <Frame viewBox="0 0 320 220" h={220}>
          <circle cx={cx} cy={cy} r={r} fill="none" className={GRID} strokeWidth={1.5} />
          <line x1={cx} y1={cy} x2={p1x} y2={p1y} stroke={CURVE_A} strokeWidth={2} />
          <line x1={cx} y1={cy} x2={p2x} y2={p2y} stroke={CURVE_A} strokeWidth={2} />
          <text x={cx + 10} y={cy - 20} className={LABEL} fill={CURVE_A} fontSize={10}>центральный ∠</text>

          <line x1={p3x} y1={p3y} x2={p1x} y2={p1y} stroke={CURVE_B} strokeWidth={2} />
          <line x1={p3x} y1={p3y} x2={p2x} y2={p2y} stroke={CURVE_B} strokeWidth={2} />
          <text x={p3x - 30} y={p3y + 15} className={LABEL} fill={CURVE_B} fontSize={10}>вписанный ∠</text>
          <text x={160} y={210} textAnchor="middle" className={LABEL}>вписанный угол = ½ центрального угла (та же дуга)</text>
        </Frame>
      );
    }

    // ---------- POLYNOMIALS ----------
    case 'polynomial-area-model': {
      // (x+3)(x+2) as an area model split into 4 parts
      const x = 90, three = 45; // width segments for "x" and "3"
      const xh = 70, two = 35; // height segments for "x" and "2"
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(60,15)">
            <rect x={0} y={0} width={x} height={xh} fill={FILL_A} stroke={CURVE_A} strokeWidth={1.5} />
            <rect x={x} y={0} width={three} height={xh} fill={FILL_B} stroke={CURVE_B} strokeWidth={1.5} />
            <rect x={0} y={xh} width={x} height={two} fill={FILL_B} stroke={CURVE_B} strokeWidth={1.5} />
            <rect x={x} y={xh} width={three} height={two} fill={FILL_A} stroke={CURVE_C} strokeWidth={1.5} />

            <text x={x / 2} y={xh / 2 + 5} textAnchor="middle" fontWeight={700} className={LABEL}>x²</text>
            <text x={x + three / 2} y={xh / 2 + 5} textAnchor="middle" fontWeight={700} className={LABEL}>3x</text>
            <text x={x / 2} y={xh + two / 2 + 5} textAnchor="middle" fontWeight={700} className={LABEL}>2x</text>
            <text x={x + three / 2} y={xh + two / 2 + 5} textAnchor="middle" fontWeight={700} className={LABEL}>6</text>

            <text x={x / 2} y={-8} textAnchor="middle" className={LABEL}>x</text>
            <text x={x + three / 2} y={-8} textAnchor="middle" className={LABEL}>3</text>
            <text x={-10} y={xh / 2 + 5} textAnchor="end" className={LABEL}>x</text>
            <text x={-10} y={xh + two / 2 + 5} textAnchor="end" className={LABEL}>2</text>
          </g>
          <text x={160} y={180} textAnchor="middle" className={LABEL}>(x+3)(x+2) = x² + 3x + 2x + 6 = x² + 5x + 6</text>
        </Frame>
      );
    }
    case 'difference-of-squares': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(40,15)">
            <rect x={0} y={0} width={100} height={100} fill="none" stroke={CURVE_A} strokeWidth={2} />
            <rect x={70} y={0} width={30} height={30} fill={FILL_B} stroke={CURVE_B} strokeWidth={1.5} />
            <text x={50} y={60} textAnchor="middle" className={LABEL}>a² − b²</text>
            <text x={-10} y={55} textAnchor="end" className={LABEL}>a</text>
            <text x={85} y={-6} textAnchor="middle" className={LABEL} fontSize={10}>b</text>
          </g>
          <text x={175} y={65} className={LABEL} fontSize={16}>=</text>
          <g transform="translate(200,45)">
            <rect x={0} y={0} width={100} height={30} fill={FILL_A} stroke={CURVE_C} strokeWidth={1.5} />
            <text x={50} y={20} textAnchor="middle" className={LABEL}>(a−b)(a+b)</text>
          </g>
          <text x={160} y={175} textAnchor="middle" className={LABEL}>квадрат с вырезанным углом = прямоугольник той же площади</text>
        </Frame>
      );
    }

    // ---------- DATA ANALYSIS: RATIOS / STATS / PROBABILITY ----------
    case 'ratio-bar-model': {
      return (
        <Frame viewBox="0 0 320 130" h={130}>
          <text x={20} y={30} className={LABEL}>Отношение 2 : 3</text>
          <g transform="translate(20,45)">
            {[0, 1].map((i) => (
              <rect key={i} x={i * 60} y={0} width={56} height={36} fill={FILL_A} stroke={CURVE_A} strokeWidth={1.5} />
            ))}
            {[0, 1, 2].map((i) => (
              <rect key={i} x={125 + i * 55} y={0} width={51} height={36} fill={FILL_B} stroke={CURVE_B} strokeWidth={1.5} />
            ))}
          </g>
          <text x={48} y={100} textAnchor="middle" className={LABEL} fill={CURVE_A}>часть A (2 доли)</text>
          <text x={210} y={100} textAnchor="middle" className={LABEL} fill={CURVE_B}>часть B (3 доли)</text>
        </Frame>
      );
    }
    case 'percent-bar-model': {
      return (
        <Frame viewBox="0 0 320 110" h={110}>
          <rect x={20} y={30} width={280} height={36} fill="none" strokeWidth={1.5} className={AXIS} />
          <rect x={20} y={30} width={280 * 0.25} height={36} fill={FILL_A} stroke={CURVE_A} strokeWidth={1.5} />
          <text x={20 + 140 * 0.25} y={52} textAnchor="middle" className={LABEL} fill={CURVE_A} fontWeight={700}>25% (часть)</text>
          <text x={220} y={52} textAnchor="middle" className={LABEL}>остальные 75%</text>
          <text x={160} y={90} textAnchor="middle" className={LABEL}>процент = часть / целое × 100%</text>
        </Frame>
      );
    }
    case 'dot-plot-outlier': {
      const scale = (v: number) => 30 + v * 24;
      const dataMain = [4, 5, 5, 6, 6, 6, 7];
      const outlier = 20;
      return (
        <Frame viewBox="0 0 320 130" h={130}>
          <line x1={20} y1={90} x2={300} y2={90} className={AXIS} />
          {[0, 4, 8, 12, 16, 20].map((v) => (
            <text key={v} x={scale(v)} y={108} textAnchor="middle" className={LABEL} fontSize={10}>{v}</text>
          ))}
          {dataMain.map((v, i) => {
            const counts: Record<number, number> = {};
            const stack = (counts[v] = (counts[v] || 0) + 1);
            return <circle key={i} cx={scale(v)} cy={82 - stack * 10} r={5} fill={CURVE_A} />;
          })}
          <circle cx={scale(outlier)} cy={82 - 10} r={5} fill={CURVE_D} />
          <text x={scale(outlier)} y={55} textAnchor="middle" className={LABEL} fill={CURVE_D} fontSize={10}>выброс</text>
          <text x={scale(5.5)} y={30} textAnchor="middle" className={LABEL} fill={CURVE_A} fontSize={10}>медиана здесь</text>
          <text x={160} y={125} textAnchor="middle" className={LABEL}>выброс сильно сдвигает среднее, но почти не влияет на медиану</text>
        </Frame>
      );
    }
    case 'std-dev-comparison': {
      const scaleA = (v: number) => 30 + v * 22;
      const scaleB = (v: number) => 190 + v * 22;
      const wide = [2, 3, 4, 6, 8, 9, 10];
      const tight = [5, 6, 6, 6, 6, 7, 7];
      return (
        <Frame viewBox="0 0 320 130" h={130}>
          <line x1={20} y1={90} x2={140} y2={90} className={AXIS} />
          {wide.map((v, i) => (
            <circle key={i} cx={scaleA(v)} cy={80} r={4.5} fill={CURVE_A} />
          ))}
          <text x={80} y={108} textAnchor="middle" className={LABEL} fontSize={10}>больше разброс</text>

          <line x1={180} y1={90} x2={300} y2={90} className={AXIS} />
          {tight.map((v, i) => (
            <circle key={i} cx={scaleB(v)} cy={80} r={4.5} fill={CURVE_B} />
          ))}
          <text x={240} y={108} textAnchor="middle" className={LABEL} fontSize={10}>меньше разброс</text>
        </Frame>
      );
    }
    case 'probability-tree-coins': {
      return (
        <Frame viewBox="0 0 320 170" h={170}>
          <circle cx={30} cy={85} r={4} fill={CURVE_D} />
          <line x1={30} y1={85} x2={130} y2={30} stroke={CURVE_A} strokeWidth={1.5} />
          <line x1={30} y1={85} x2={130} y2={140} stroke={CURVE_A} strokeWidth={1.5} />
          <text x={75} y={50} className={LABEL} fontSize={10}>H (½)</text>
          <text x={75} y={120} className={LABEL} fontSize={10}>T (½)</text>

          <line x1={130} y1={30} x2={230} y2={10} stroke={CURVE_B} strokeWidth={1.5} />
          <line x1={130} y1={30} x2={230} y2={50} stroke={CURVE_B} strokeWidth={1.5} />
          <line x1={130} y1={140} x2={230} y2={120} stroke={CURVE_B} strokeWidth={1.5} />
          <line x1={130} y1={140} x2={230} y2={160} stroke={CURVE_B} strokeWidth={1.5} />

          <text x={240} y={12} className={LABEL} fontSize={11}>HH</text>
          <text x={240} y={52} className={LABEL} fontSize={11}>HT</text>
          <text x={240} y={122} className={LABEL} fontSize={11}>TH</text>
          <text x={240} y={162} className={LABEL} fontSize={11}>TT</text>
          <text x={160} y={168} textAnchor="middle" className={LABEL} fontSize={10}> </text>
        </Frame>
      );
    }
    case 'venn-two-events': {
      return (
        <Frame viewBox="0 0 320 170" h={170}>
          <circle cx={130} cy={85} r={60} fill={FILL_A} stroke={CURVE_A} strokeWidth={2} />
          <circle cx={190} cy={85} r={60} fill={FILL_B} stroke={CURVE_B} strokeWidth={2} />
          <text x={95} y={90} textAnchor="middle" className={LABEL} fill={CURVE_A}>Кофе</text>
          <text x={225} y={90} textAnchor="middle" className={LABEL} fill={CURVE_B}>Чай</text>
          <text x={160} y={90} textAnchor="middle" className={LABEL} fontWeight={700}>оба</text>
          <text x={160} y={160} textAnchor="middle" className={LABEL}>P(A или B) = P(A) + P(B) − P(A и B)</text>
        </Frame>
      );
    }

    // ---------- HEIGHTS: 2D SHAPES ----------
    case 'triangle-height-drop': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(20,15)">
            <polygon points="10,150 260,150 90,20" fill="none" stroke={CURVE_A} strokeWidth={2.5} />
            <line x1={90} y1={150} x2={90} y2={20} stroke={CURVE_D} strokeWidth={2} strokeDasharray="5 4" />
            <rect x={82} y={142} width={16} height={16} fill="none" stroke={CURVE_D} strokeWidth={1.5} />
            <text x={100} y={90} className={LABEL} fill={CURVE_D} fontWeight={700}>высота h</text>
            <text x={130} y={168} textAnchor="middle" className={LABEL}>основание (base)</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>
            высота — это ВСЕГДА перпендикуляр к основанию, а не боковая сторона
          </text>
        </Frame>
      );
    }
    case 'trapezoid-height-detail': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(30,20)">
            <polygon points="0,120 220,120 170,10 60,10" fill="none" stroke={CURVE_B} strokeWidth={2.5} />
            <line x1={60} y1={120} x2={60} y2={10} stroke={CURVE_D} strokeWidth={2} strokeDasharray="5 4" />
            <rect x={52} y={102} width={16} height={16} fill="none" stroke={CURVE_D} strokeWidth={1.5} />
            <text x={70} y={70} className={LABEL} fill={CURVE_D} fontWeight={700}>h</text>
            <text x={110} y={-2} textAnchor="middle" className={LABEL}>основание b₁</text>
            <text x={110} y={140} textAnchor="middle" className={LABEL}>основание b₂</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>площадь = ½(b₁+b₂)·h, где h — перпендикуляр между основаниями</text>
        </Frame>
      );
    }
    case 'parallelogram-height-detail': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(30,20)">
            <polygon points="0,120 180,120 220,20 40,20" fill="none" stroke={CURVE_C} strokeWidth={2.5} />
            <line x1={40} y1={120} x2={40} y2={20} stroke={CURVE_D} strokeWidth={2} strokeDasharray="5 4" />
            <rect x={32} y={102} width={16} height={16} fill="none" stroke={CURVE_D} strokeWidth={1.5} />
            <text x={50} y={75} className={LABEL} fill={CURVE_D} fontWeight={700}>высота h</text>
            <text x={130} y={140} textAnchor="middle" className={LABEL}>основание</text>
            <text x={135} y={8} textAnchor="middle" className={LABEL} fill="#a855f7">боковая сторона ≠ высота!</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>площадь = основание × ВЫСОТА (не боковая сторона)</text>
        </Frame>
      );
    }

    // ---------- HEIGHTS: 3D SOLIDS ----------
    case 'prism-dimensions': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(60,25)">
            <polygon points="0,30 70,30 100,5 30,5" fill="none" stroke={CURVE_A} strokeWidth={1.5} />
            <polygon points="0,30 0,110 70,110 70,30" fill="none" stroke={CURVE_A} strokeWidth={1.5} />
            <polygon points="70,30 100,5 100,85 70,110" fill="none" stroke={CURVE_A} strokeWidth={1.5} />
            <line x1={0} y1={30} x2={0} y2={110} stroke={CURVE_D} strokeWidth={2} />
            <text x={-14} y={75} textAnchor="end" className={LABEL} fill={CURVE_D} fontWeight={700}>h</text>
            <text x={35} y={125} textAnchor="middle" className={LABEL}>длина (l)</text>
            <text x={90} y={45} className={LABEL} fontSize={10}>ширина (w)</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>V = l × w × h — три независимых измерения</text>
        </Frame>
      );
    }
    case 'cylinder-height-radius': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(110,15)">
            <ellipse cx={40} cy={15} rx={38} ry={13} fill="none" stroke={CURVE_B} strokeWidth={2} />
            <line x1={2} y1={15} x2={2} y2={135} stroke={CURVE_B} strokeWidth={2} />
            <line x1={78} y1={15} x2={78} y2={135} stroke={CURVE_B} strokeWidth={2} />
            <path d="M 2 135 A 38 13 0 0 0 78 135" fill="none" stroke={CURVE_B} strokeWidth={2} />
            <path d="M 2 135 A 38 13 0 0 1 78 135" fill="none" stroke={CURVE_B} strokeWidth={1} strokeDasharray="3 3" />
            <line x1={40} y1={15} x2={78} y2={15} stroke={CURVE_D} strokeWidth={1.5} strokeDasharray="3 3" />
            <text x={55} y={10} className={LABEL} fill={CURVE_D} fontSize={10}>r</text>
            <line x1={95} y1={15} x2={95} y2={135} stroke={CURVE_D} strokeWidth={2} />
            <text x={100} y={80} className={LABEL} fill={CURVE_D} fontWeight={700}>h</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>V = πr²h — h измеряется строго вертикально между основаниями</text>
        </Frame>
      );
    }
    case 'cone-height-slant': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(90,15)">
            <ellipse cx={60} cy={130} rx={55} ry={16} fill="none" stroke={CURVE_C} strokeWidth={2} />
            <line x1={60} y1={130} x2={60} y2={10} stroke={CURVE_D} strokeWidth={2} strokeDasharray="4 3" />
            <line x1={60} y1={10} x2={5} y2={130} stroke={CURVE_C} strokeWidth={2.5} />
            <line x1={60} y1={10} x2={115} y2={130} stroke={CURVE_C} strokeWidth={2.5} />
            <text x={68} y={70} className={LABEL} fill={CURVE_D} fontWeight={700}>h (высота)</text>
            <text x={20} y={75} className={LABEL} fill={CURVE_C} fontWeight={700}>l (наклонная)</text>
            <line x1={60} y1={130} x2={5} y2={130} stroke="#a855f7" strokeWidth={1.5} strokeDasharray="3 3" />
            <text x={20} y={148} className={LABEL} fill="#a855f7" fontSize={10}>r</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>
            h ⊥ основанию (для объёма), l — боковая сторона (для площади поверхности): l² = r² + h²
          </text>
        </Frame>
      );
    }
    case 'pyramid-height': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(70,15)">
            <polygon points="0,130 160,130 130,105 30,105" fill="none" stroke="#a855f7" strokeWidth={2} />
            <line x1={80} y1={117} x2={80} y2={10} stroke={CURVE_D} strokeWidth={2} strokeDasharray="4 3" />
            <line x1={0} y1={130} x2={80} y2={10} stroke="#a855f7" strokeWidth={2.5} />
            <line x1={160} y1={130} x2={80} y2={10} stroke="#a855f7" strokeWidth={2.5} />
            <line x1={30} y1={105} x2={80} y2={10} stroke="#a855f7" strokeWidth={1.5} opacity={0.6} />
            <line x1={130} y1={105} x2={80} y2={10} stroke="#a855f7" strokeWidth={1.5} opacity={0.6} />
            <text x={88} y={65} className={LABEL} fill={CURVE_D} fontWeight={700}>h</text>
            <circle cx={80} cy={117} r={3} fill={CURVE_D} />
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>
            h измеряется от вершины ДО ЦЕНТРА основания, строго перпендикулярно ему
          </text>
        </Frame>
      );
    }
    case 'sphere-radius-diameter': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(90,20)">
            <circle cx={70} cy={70} r={65} fill="none" stroke={CURVE_D} strokeWidth={2} />
            <ellipse cx={70} cy={70} rx={65} ry={18} fill="none" stroke={CURVE_D} strokeWidth={1} strokeDasharray="3 3" />
            <line x1={70} y1={70} x2={135} y2={70} stroke={CURVE_A} strokeWidth={2.5} />
            <text x={100} y={62} className={LABEL} fill={CURVE_A} fontWeight={700}>r</text>
            <line x1={5} y1={100} x2={135} y2={100} stroke={CURVE_B} strokeWidth={2} />
            <text x={70} y={118} textAnchor="middle" className={LABEL} fill={CURVE_B} fontWeight={700}>d = 2r</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>V = (4/3)πr³ — используй именно радиус, а не диаметр!</text>
        </Frame>
      );
    }
    case 'composite-solid': {
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <g transform="translate(110,15)">
            <ellipse cx={40} cy={95} rx={38} ry={12} fill="none" stroke={CURVE_B} strokeWidth={2} />
            <line x1={2} y1={95} x2={2} y2={140} stroke={CURVE_B} strokeWidth={2} />
            <line x1={78} y1={95} x2={78} y2={140} stroke={CURVE_B} strokeWidth={2} />
            <path d="M 2 140 A 38 12 0 0 0 78 140" fill="none" stroke={CURVE_B} strokeWidth={2} />
            <line x1={2} y1={95} x2={40} y2={10} stroke={CURVE_C} strokeWidth={2.5} />
            <line x1={78} y1={95} x2={40} y2={10} stroke={CURVE_C} strokeWidth={2.5} />
            <text x={88} y={70} className={LABEL} fontSize={10}>конус сверху</text>
            <text x={88} y={125} className={LABEL} fontSize={10}>цилиндр снизу</text>
          </g>
          <text x={160} y={182} textAnchor="middle" className={LABEL}>составное тело = сумма объёмов простых частей</text>
        </Frame>
      );
    }

    // ---------- DATA ----------
    case 'scatterplot-trend': {
      const pts = [
        [30, 150], [60, 120], [90, 130], [120, 90], [150, 100], [180, 60], [210, 75], [240, 40], [270, 50],
      ];
      return (
        <Frame viewBox="0 0 320 190" h={190}>
          <line x1={20} y1={170} x2={300} y2={170} className={AXIS} />
          <line x1={20} y1={170} x2={20} y2={20} className={AXIS} />
          {pts.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={4} fill={CURVE_A} />
          ))}
          <line x1={25} y1={160} x2={290} y2={35} stroke={CURVE_D} strokeWidth={2} />
          <text x={230} y={30} className={LABEL} fill={CURVE_D}>line of best fit</text>
          <text x={160} y={185} textAnchor="middle" className={LABEL}>положительная корреляция</text>
        </Frame>
      );
    }

    default:
      return null;
  }
}
