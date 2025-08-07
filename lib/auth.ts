// lib/auth.ts
import { cookies } from "next/headers";
import apiServer from "@/utils/api-server";

export async function getUserFromServer() {
  const cookieStore = cookies(); // cookies côté serveur
  const cookieHeader = cookieStore.toString(); // convertit en header utilisable


    console.log("🧪 Cookies côté serveur :", cookieHeader); // Ajoute ce log

  try {
    const res = await apiServer.get("/api/user", {
      headers: {
        Cookie: cookieHeader,
        Origin: "http://localhost:3000"
      },
    });

    return res.data; // user avec id, email, role, etc.
  } catch (err: any) { 
    console.error("Erreur de récupération du user côté serveur message :", err.response?.status, err.message);
    return null;
  }
}
