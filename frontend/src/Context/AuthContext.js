import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: null,
    role: null,
  });

  const setAuthInfo = ({ token, role }) => {
    setAuth({ token, role });
  };

  useEffect(() => {
    console.log("Auth context updated:", auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
