import { create } from 'zustand';
import { User } from '@supabase/supabase-js';

type Role = 'admin' | 'editor' | 'viewer';

interface AuthState {
  user: User | null;
  role: Role | null;
  setUser: (user: User | null) => void;
  setRole: (role: Role | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
}));