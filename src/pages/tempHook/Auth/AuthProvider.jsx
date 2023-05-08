import { useState, useMemo } from 'react';
import authContext from './context';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLogedIn] = useState(false);
  console.log('useMemo');

  const onLogIn = () => {
    setUser({ name: 'Mango' });
    setIsLogedIn(true);
  };

  const onLogOut = () => {
    setUser(null);
    setIsLogedIn(false);
  };

  const providerValue = useMemo(() => {
    return { user, isLoggedIn, onLogIn, onLogOut };
  }, [user, isLoggedIn]);

  return (
    <authContext.Provider value={providerValue}>
      {children}
    </authContext.Provider>
  );
}
