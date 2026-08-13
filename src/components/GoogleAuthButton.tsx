import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface GoogleJwtPayload {
  name: string;
  email: string;
  picture: string;
}

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;

export default function GoogleAuthButton() {
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (!CLIENT_ID) {
    // No client ID configured yet — show a gentle placeholder instead of a broken button.
    return (
      <button
        onClick={() =>
          alert(
            'Вход через Google ещё не настроен: нужно добавить VITE_GOOGLE_CLIENT_ID в файл .env (см. README).'
          )
        }
        className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-500 dark:border-slate-600 dark:text-slate-400"
        title="Требуется VITE_GOOGLE_CLIENT_ID"
      >
        Войти
      </button>
    );
  }

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3 shadow-sm transition hover:shadow dark:border-slate-700 dark:bg-slate-800"
        >
          <img src={user.picture} alt={user.name} className="h-7 w-7 rounded-full" referrerPolicy="no-referrer" />
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
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        if (!credentialResponse.credential) return;
        const payload = jwtDecode<GoogleJwtPayload>(credentialResponse.credential);
        login({ name: payload.name, email: payload.email, picture: payload.picture });
      }}
      onError={() => alert('Не удалось войти через Google. Попробуй ещё раз.')}
      theme="outline"
      size="medium"
      shape="pill"
      text="signin"
    />
  );
}
