import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function GoogleAuthButton() {
  const { user, ready, loading, loginWithGoogle, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [signingIn, setSigningIn] = useState(false);

  if (!ready) {
    return (
      <button
        onClick={() =>
          alert(
            'Вход через Google ещё не настроен: нужно создать проект Firebase и добавить VITE_FIREBASE_* ключи в файл .env (см. README).'
          )
        }
        className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-500 dark:border-slate-600 dark:text-slate-400"
        title="Требуется настройка Firebase"
      >
        Войти
      </button>
    );
  }

  if (loading) {
    return <div className="h-8 w-20 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />;
  }

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 shadow-sm transition hover:shadow dark:border-slate-700 dark:bg-slate-800"
        >
          {user.picture ? (
            <img src={user.picture} alt={user.name} className="h-7 w-7 rounded-full" referrerPolicy="no-referrer" />
          ) : (
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              {user.name.charAt(0).toUpperCase()}
            </span>
          )}
          <span className="max-w-[110px] truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
            {user.name.split(' ')[0]}
          </span>
        </button>
        {open && (
          <div className="absolute right-0 top-11 z-40 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <p className="truncate px-2 py-1 text-xs text-slate-400">{user.email}</p>
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="mt-1 w-full rounded-lg px-2 py-1.5 text-left text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30"
            >
              Выйти
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={async () => {
        setSigningIn(true);
        try {
          await loginWithGoogle();
        } catch (err) {
          console.error(err);
          alert('Не удалось войти через Google. Попробуй ещё раз.');
        } finally {
          setSigningIn(false);
        }
      }}
      disabled={signingIn}
      className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:shadow disabled:opacity-60 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
    >
      <svg width="16" height="16" viewBox="0 0 48 48">
        <path
          fill="#FFC107"
          d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
        />
        <path
          fill="#FF3D00"
          d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
        />
        <path
          fill="#4CAF50"
          d="M24 44c5.5 0 10.4-2.1 14.1-5.5l-6.5-5.5C29.6 34.9 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.6 39.6 16.3 44 24 44z"
        />
        <path
          fill="#1976D2"
          d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.5 5.5C40.9 36.9 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"
        />
      </svg>
      {signingIn ? 'Входим…' : 'Войти через Google'}
    </button>
  );
}
