import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithRedirect,
  signInWithPopup,
  getRedirectResult,
  signOut,
  type User,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider, firebaseReady } from '../lib/firebase';

export interface AuthUser {
  uid: string;
  name: string;
  email: string;
  picture: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  ready: boolean; // Firebase config present
  loading: boolean; // auth state resolving
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function toAuthUser(u: User): AuthUser {
  return {
    uid: u.uid,
    name: u.displayName ?? 'Пользователь',
    email: u.email ?? '',
    picture: u.photoURL ?? '',
  };
}

async function upsertAccount(u: AuthUser) {
  if (!db) return;
  // Creates (or updates) a real account record in Firestore — this is the
  // persistent "account" behind the Google sign-in, not just a local session.
  await setDoc(
    doc(db, 'users', u.uid),
    { name: u.name, email: u.email, picture: u.picture, lastLoginAt: serverTimestamp() },
    { merge: true }
  );
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firebaseReady || !auth) {
      setLoading(false);
      return;
    }

    // Picks up the result after returning from the Google redirect flow, if any.
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) void upsertAccount(toAuthUser(result.user));
      })
      .catch((err) => console.error('getRedirectResult error:', err));

    const unsub = onAuthStateChanged(auth, (fbUser) => {
      setUser(fbUser ? toAuthUser(fbUser) : null);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function loginWithGoogle() {
    if (!auth) return;
    try {
      // Popup is the smoother UX when the browser allows it.
      const result = await signInWithPopup(auth, googleProvider);
      await upsertAccount(toAuthUser(result.user));
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code;
      if (code === 'auth/popup-blocked' || code === 'auth/cancelled-popup-request' || code === 'auth/popup-closed-by-user') {
        // Fall back to a full-page redirect, which no popup blocker can stop.
        await signInWithRedirect(auth, googleProvider);
        return;
      }
      throw err;
    }
  }

  async function logout() {
    if (!auth) return;
    await signOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, ready: firebaseReady, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
