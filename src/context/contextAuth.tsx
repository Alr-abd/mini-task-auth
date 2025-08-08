'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@/interfaces/UserInterface';
import { AuthContextType } from '@/interfaces/AuthContextInterface';


const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async ({ phoneNumber, password }: { phoneNumber: string; password: string }) => {
    try {
      const res = await fetch('https://randomuser.me/api/');
      const data = await res.json();
      console.log(data)
      const fetchedUser = {
        name: data.results[0].name.first,
        email: data.results[0].email,
        phone: phoneNumber,
      };
      setUser(fetchedUser);
      localStorage.setItem('user', JSON.stringify(fetchedUser));
      console.log(fetchedUser)
      router.push('/dashboard');
    } catch (err) {
      console.error('Login error', err);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("error");
  }
  return context;
};
