import { getUserFromServer } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function InstructorLayout({ children }: { children: React.ReactNode }) {
  const user = await getUserFromServer(); 


   // Debug
  console.log("user:", user); // ou
  if (!user || !user.role) throw new Error(JSON.stringify(user));


  if (!user) {
    redirect("/connexion");
  }

  if (user.role !== "admin" && user.role !== "instructor") {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
