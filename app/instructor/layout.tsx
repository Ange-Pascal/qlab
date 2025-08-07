import { getUserFromServer } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function InstructorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserFromServer();
  console.log("👤 Utilisateur côté serveur :", user);
  if (!user) redirect("/connexion");
  const hasAccess = user.roles?.some((role: any) =>
    ["admin", "instructor"].includes(role.name)
  );

  if (!hasAccess) {
    redirect("/unauthorized");
  }

  return <>{children}</>;
}
