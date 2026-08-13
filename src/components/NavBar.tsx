import { NavLink } from 'react-router-dom';
import StreakWidget from './StreakWidget';
import GoogleAuthButton from './GoogleAuthButton';

const linkBase = 'px-3 py-2 rounded-lg text-sm font-semibold transition-colors';

function Logo() {
  return (
    <NavLink to="/" className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 40 40" className="shrink-0">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="55%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#logoGrad)" />
        <path
          d="M11 25.5 L17.5 15 L22 22 L29 12"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29" cy="12" r="2.6" fill="white" />
      </svg>
      <span className="font-display text-lg font-extrabold tracking-tight text-slate-800 dark:text-slate-100">
        SAT<span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Prep</span>
      </span>
    </NavLink>
  );
}

export default function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur-lg dark:border-slate-800/70 dark:bg-slate-900/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Logo />

        <nav className="hidden items-center gap-1 sm:flex">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/math"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`
            }
          >
            Математика
          </NavLink>
          <NavLink
            to="/reading"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`
            }
          >
            Чтение и письмо
          </NavLink>
          <NavLink
            to="/practice"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`
            }
          >
            Практика
          </NavLink>
          <NavLink
            to="/desmos"
            className={({ isActive }) =>
              `${linkBase} ${isActive ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30' : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'}`
            }
          >
            Гайд по Desmos
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <StreakWidget />
          <GoogleAuthButton />
        </div>
      </div>
      <nav className="flex items-center gap-1 overflow-x-auto border-t border-slate-100 px-4 py-2 sm:hidden dark:border-slate-800">
        <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
          Главная
        </NavLink>
        <NavLink to="/math" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
          Математика
        </NavLink>
        <NavLink to="/reading" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
          Чтение
        </NavLink>
        <NavLink to="/practice" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
          Практика
        </NavLink>
        <NavLink to="/desmos" className={({ isActive }) => `${linkBase} ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}>
          Desmos
        </NavLink>
      </nav>
    </header>
  );
}
