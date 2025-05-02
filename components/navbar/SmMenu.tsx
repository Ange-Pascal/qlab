'use client'

import { Button } from "@/components/ui/button";
import { IoIosMenu } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { AuthContext } from "@/app/auth-provider";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { useContext } from "react";

export function SmMenu() {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await api.post("/logout");
      setUser(null);
      toast.success("Déconnexion réussie");
      router.push("/connexion");
    } catch (e) {
      toast.error("Erreur lors de la déconnexion");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IoIosMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Paramètre
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/mes-cours">Mes cours </Link>
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/dashboard">Dashboard</Link>
            <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Ajouter un cours
            <DropdownMenuShortcut>⌘A</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Projets</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Consulting</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Infos</DropdownMenuItem>
                <DropdownMenuItem>Contacts</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            Bourses
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Contacts</DropdownMenuItem>
        <DropdownMenuItem>Réseaux Sociaux</DropdownMenuItem>
        <DropdownMenuItem>Faq</DropdownMenuItem>
        <DropdownMenuSeparator />
        {user ? (
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            Déconnexion
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <Link href="/connexion">Se Connecter</Link>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
