"use client";

import * as React from "react";
import Link from "next/link";
import { RiComputerFill } from "react-icons/ri";

import { cn } from "@/lib/utils";
// import { Icons } from "../icons/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Développeur FullStack",
    href: "/docs/primitives/alert-dialog",
    description:
      "Un développeur fullstack crée des applications web en travaillant à la fois sur le front-end et le back-end.",
  },
  {
    title: "Développeur Web",
    href: "/docs/primitives/hover-card",
    description:
      "Un développeur web crée et maintient des sites internet en utilisant diverses technologies pour assurer leur fonctionnalité, leur design et leur performance.",
  },
  {
    title: "Développeur Mobile",
    href: "/docs/primitives/progress",
    description:
      "Un développeur mobile conçoit et développe des applications mobiles adaptées aux plateformes iOS et Android, en optimisant leur performance et leur expérience utilisateur.",
  },
  {
    title: "Marketing Digital",
    href: "/docs/primitives/scroll-area",
    description: "Le marketing digital utilise les canaux en ligne tels que les réseaux sociaux, les moteurs de recherche et les sites web pour promouvoir des produits, services ou marques auprès d'un large public",
  },
  {
    title: "DevOps",
    href: "/docs/primitives/tabs",
    description:
      "Le DevOps est une méthodologie qui combine les pratiques de développement et d'exploitation pour améliorer la collaboration, l'automatisation et l'efficacité dans la gestion des infrastructures et des déploiements.",
  },
  {
    title: "Data Engineer",
    href: "/docs/primitives/tooltip",
    description:
      "Un data engineer conçoit, construit et maintient des systèmes et des infrastructures pour collecter, stocker et traiter de grandes quantités de données afin de les rendre accessibles et exploitables.",
  },
  {
    title: "Sécurité Informatique",
    href: "/docs/primitives/tooltip",
    description:
      "La sécurité informatique consiste à protéger les systèmes, réseaux et données contre les attaques, les intrusions et les pertes afin d'assurer leur intégrité, confidentialité et disponibilité.",
  },
  {
    title: "Administrateur Sytème",
    href: "/docs/primitives/tooltip",
    description:
      "Un administrateur système gère, configure et maintient les serveurs et les réseaux d'une organisation pour garantir leur bon fonctionnement et leur sécurité.",
  },
  {
    title: "Graphiste || Branding",
    href: "/docs/primitives/tooltip",
    description:
      "Un graphiste crée des visuels esthétiques et fonctionnels, tandis que le branding consiste à concevoir une identité visuelle cohérente et mémorable pour une marque afin de renforcer son image et sa reconnaissance",
  },
  {
    title: "----> Toutes les formations",
    href: "/formation",
    description:
      "Cliquez ici pour découvrir l'ensemble de nos offres et accéder à toutes les ressources disponibles pour vous perfectionner !",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Metiers Dev</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <RiComputerFill size={100} className="text-purple-950" />
                    <div className="mb-2 mt-4 text-lg font-medium">Metiers</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Concevoir des applications et logiciels.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Développeur IA">
                Créer des applications avancées avec l'intelligence artificielle
              </ListItem>
              <ListItem href="/docs" title="Développeur Desktop">
                Concevoir des applications bureaux
              </ListItem>
              <ListItem href="/docs" title="Développeur Front">
                Concevoir et optimiser l’interface utilisateur des sites et
                applications web en assurant une expérience fluide et
                responsive.
              </ListItem>
              <ListItem href="/docs" title="Développeur FullSTack">
                Concevoir et développer des applications web en maîtrisant aussi
                bien le front-end que le back-end.
              </ListItem>
              <ListItem href="/docs" title="Développeur Backend">
                Concevoir les API REST & GRAPHQL.
              </ListItem>
              <ListItem href="/docs/installation" title="Développeur Mobile">
                Créer des applications optimisées pour iOS et Android.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Développeur CMS"
              >
                Développer et concevoir des applications avec des CMS.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Formations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/background" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Background
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
