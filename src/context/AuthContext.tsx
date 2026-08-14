import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firebaseReady || !auth) {
      setLoading(false);
      return;
    }
    const unsub = onAuthStateChanged(auth, (fbUser) => {
      setUser(fbUser ? toAuthUser(fbUser) : null);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function loginWithGoogle() {
    if (!auth || !db) return;
    const result = await signInWithPopup(auth, googleProvider);
    const u = toAuthUser(result.user);
    // Creates (or updates) a real account record in Firestore — this is the
    // persistent "account" behind the Google sign-in, not just a local session.
    await setDoc(
      doc(db, 'users', u.uid),
      {
        name: u.name,
        email: u.email,
        picture: u.picture,
        lastLoginAt: serverTimestamp(),
      },
      { merge: true }
    );
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
