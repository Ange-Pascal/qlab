import { cookies } from "next/headers";

export async function getUserFromServer() {
  const cookieStore = cookies().toString();

  const cookieHeader = cookieStore
    // .getAll()
    // .map((c) => `${c.name}=${c.value}`)
    // .join("; ");    

  console.log("🍪 Cookies transmis à Laravel :", cookieHeader);

  try {
    const res = await fetch("http://localhost:8000/api/user", {
      headers: {
        Cookie: cookieHeader,
        Accept: "application/json",
      },
      credentials: "include",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error("❌ Réponse non OK :", res.status);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("❌ Erreur getUserFromServer", error);
    return null;
  }
}
