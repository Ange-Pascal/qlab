"use client"; 
console.log("AuthProvider rendu");


import { createContext, useContext, useEffect, useState } from "react";
import api from "@/utils/api";  

console.log("AuthProvider rendu");

// === Types ===
type User = {
  id: number;
  name: string;
  email: string;
  // ajoute d'autres champs si nécessaire
};

type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  fetchUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null); 


  // Fonction pour récupérer l'utilisateur connecté
  const fetchUser = async () => {
    try {
      console.log("→ Appel de sanctum/csrf-cookie");
      await api.get("/sanctum/csrf-cookie");

      console.log("→ Appel de /api/user");
      const res = await api.get("/api/user");
      console.log("✅ Utilisateur connecté :", res.data);
      setUser(res.data);
    } catch (err: any) {
      console.error("❌ Erreur de récupération :", err.response?.status, err);
      setUser(null);
    }
  };

useEffect(() => {
  // Fonction pour récupérer l'utilisateur connecté
//   const fetchUser = async () => {
//     try {
//       console.log("→ Appel de sanctum/csrf-cookie");
//       await api.get("/sanctum/csrf-cookie");
// 
//       console.log("→ Appel de /api/user");
//       const res = await api.get("/api/user");
//       console.log("✅ Utilisateur connecté :", res.data);
//       setUser(res.data);
//     } catch (err: any) {
//       console.error("❌ Erreur de récupération :", err.response?.status, err);
//       setUser(null);
//     }
//   };

  fetchUser();
}, []);

useEffect(() => {
  if (user) {
    console.log("👤 Utilisateur connecté :", user);
  } else {
    console.log("🚫 Aucun utilisateur connecté");
  }
}, [user]);



  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// === Hook personnalisé pour utiliser le contexte ===
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}