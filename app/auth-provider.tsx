"use client";

import { createContext, useEffect, useState } from "react";
import api from "@/utils/api";

export const AuthContext = createContext<unknown>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/api/user")
    .then((res) => {
      console.log("User connecté :", res.data);
      setUser(res.data);
    })
    .catch((err) => {
      console.error("Non authentifié :", err.response?.status); // ← ici : 401 ?
      setUser(null);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
