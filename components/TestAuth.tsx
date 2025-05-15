"use client";

import { useEffect } from "react";
import api from "@/utils/api";

export default function TestAuth() {
  useEffect(() => {
    const testAuth = async () => {
      try {
        console.log("→ Étape 1 : Appel /sanctum/csrf-cookie");
        await api.get("/sanctum/csrf-cookie");

        console.log("→ Étape 2 : Connexion avec /login");
        const loginResponse = await api.post("/login", {
          email: email,      // ← à adapter
          password: password,      // ← à adapter
        });

        console.log("✅ Connexion réussie :", loginResponse.data);

        console.log("→ Étape 3 : Appel /api/user");
        const userResponse = await api.get("/api/user");

        console.log("🎉 Utilisateur récupéré :", userResponse.data);
      } catch (err) {
        console.error("❌ Erreur pendant le test d'authentification :", err);
      }
    };

    testAuth();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Test d'authentification Laravel Sanctum</h2>
      <p>Regarde la console pour les résultats.</p>
    </div>
  );
}
