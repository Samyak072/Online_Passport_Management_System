import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  login: (user) => set({ user, isAuthenticated: true, isAdmin: user.isAdmin }),
  logout: () => set({ user: null, isAuthenticated: false, isAdmin: false }),
}));