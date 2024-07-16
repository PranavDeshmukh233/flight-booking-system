import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    email: null,
    id: null,
    token: null,
    role: null,
    name: null,
  });

  useEffect(() => {
    const storedAuth = Cookies.get("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const setAuthInfo = ({ email, id, token, role, name }) => {
    const authObject = { email, id, token, role, name };
    setAuth(authObject);
    Cookies.set("auth", JSON.stringify(authObject), { expires: 1 });
  };

  const clearAuthInfo = () => {
    setAuth({
      email: null,
      id: null,
      token: null,
      role: null,
      name: null,
    });
    Cookies.remove("auth");
  };

  useEffect(() => {
    console.log("Auth context updated:", auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuthInfo, clearAuthInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
