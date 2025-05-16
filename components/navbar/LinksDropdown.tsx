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
    title: "React.js",
    href: "/docs/reactjs",
    description: "Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques et modulaires."
  },
  {
    title: "Next.js",
    href: "/docs/nextjs",
    description: "Framework React pour créer des applications web performantes avec rendu côté serveur (SSR)."
  },
  {
    title: "Tailwind CSS",
    href: "/docs/tailwindcss",
    description: "Framework CSS utilitaire pour construire rapidement des interfaces modernes et responsives."
  },
  {
    title: "HTML",
    href: "/docs/html",
    description: "Langage de balisage standard pour structurer le contenu d’une page web."
  },
  {
    title: "CSS",
    href: "/docs/css",
    description: "Langage de style pour mettre en forme les pages web : couleurs, mise en page, animations..."
  },
  {
    title: "JavaScript",
    href: "/docs/javascript",
    description: "Langage de programmation essentiel pour rendre les pages web interactives."
  },
  {
    title: "Laravel",
    href: "/docs/laravel",
    description: "Framework PHP robuste pour le développement d'applications web côté serveur."
  },
  {
    title: "Python",
    href: "/docs/python",
    description: "Langage polyvalent utilisé en data, web, IA, scripting et plus encore."
  },
  {
    title: "Java",
    href: "/docs/java",
    description: "Langage orienté objet largement utilisé pour les applications d’entreprise, Android et backend."
  },
  {
    title: "Spring Boot",
    href: "/docs/spring-boot",
    description: "Framework Java simplifiant la création de services web et d’API REST."
  },
  {
    title: "Node.js",
    href: "/docs/nodejs",
    description: "Environnement d'exécution JavaScript côté serveur, idéal pour les applications temps réel."
  },
  {
    title: "NestJS",
    href: "/docs/nestjs",
    description: "Framework Node.js structuré et modulaire basé sur TypeScript, inspiré d’Angular."
  },
  {
    title: "Express.js",
    href: "/docs/expressjs",
    description: "Framework minimaliste pour construire des API et applications web avec Node.js."
  },
  {
    title: "Django",
    href: "/docs/django",
    description: "Framework Python haut niveau pour construire rapidement des applications web robustes."
  },
  {
    title: "Algorithmique",
    href: "/docs/algorithmique",
    description: "Discipline fondamentale pour résoudre des problèmes de manière optimisée avec des algorithmes."
  },
  {
    title: "WordPress",
    href: "/docs/wordpress",
    description: "CMS populaire pour créer des sites web ou des blogs sans coder."
  },
  {
    title: "PHP",
    href: "/docs/php",
    description: "Langage côté serveur largement utilisé pour le développement web dynamique."
  }, 
  {
    title: "UX Design (User Experience)",
    href: "/docs/ux-design",
    description:
      "Conçoit des expériences utilisateur fluides, intuitives et centrées sur les besoins réels des utilisateurs."
  },
  {
    title: "UI Design (User Interface)",
    href: "/docs/ui-design",
    description:
      "Crée des interfaces visuelles attrayantes, cohérentes et fonctionnelles pour le web et le mobile."
  }, 
  {
    title: "Analyse de données et statistiques",
    href: "/docs/analyse-donnees-statistiques",
    description:
      "Comprendre, interpréter et extraire des insights à partir de données grâce aux statistiques."
  },
  {
    title: "Outils d’analyse",
    href: "/docs/outils-analyse",
    description:
      "Maîtrise d’Excel, SQL, Python, Power BI, Tableau pour explorer et visualiser les données."
  },
  {
    title: "Préparation et traitement des données",
    href: "/docs/preparation-traitement-donnees",
    description:
      "Nettoyer, transformer et structurer les données pour les rendre exploitables en analyse."
  },
  {
    title: "Pensée analytique et résolution de problèmes",
    href: "/docs/pensee-analytique",
    description:
      "Développer un raisonnement logique pour poser les bonnes questions et tirer des conclusions pertinentes."
  },
  {
    title: "Notions de machine learning",
    href: "/docs/machine-learning-bases",
    description:
      "Appréhender les algorithmes de base pour prédire et classer à partir de données."
  },
  {
    title: "Notions de business intelligence",
    href: "/docs/business-intelligence",
    description:
      "Utiliser les outils BI pour produire des rapports interactifs et aider à la prise de décision."
  },
  {
    title: "Git & versioning",
    href: "/docs/git-versioning",
    description:
      "Collaborer efficacement sur des projets data grâce au contrôle de version avec Git et GitHub."
  }, 
  {
    title: "Stratégie réseaux sociaux",
    href: "/docs/strategie-reseaux-sociaux",
    description:
      "Définir les objectifs, cibler les audiences et planifier les contenus sur chaque plateforme."
  },
  {
    title: "Outils de gestion & publication",
    href: "/docs/outils-gestion-publication",
    description:
      "Maîtriser des outils comme Hootsuite, Buffer ou Meta Business Suite pour planifier et analyser."
  },
  {
    title: "Création de contenu",
    href: "/docs/creation-contenu",
    description:
      "Produire des visuels, vidéos et textes engageants adaptés à chaque réseau social."
  },
  {
    title: "Animation et modération de communauté",
    href: "/docs/animation-moderation",
    description:
      "Interagir avec les abonnés, modérer les échanges et renforcer la communauté."
  },
  {
    title: "Analyse et reporting",
    href: "/docs/analyse-reporting",
    description:
      "Mesurer la performance des actions, interpréter les données et adapter la stratégie."
  },
  {
    title: "Culture web & tendances digitales",
    href: "/docs/culture-web-tendances",
    description:
      "Rester à jour sur les mèmes, les formats, les plateformes émergentes et les comportements en ligne."
  },
  {
    title: "Marketing digital (complémentaire)",
    href: "/docs/marketing-digital",
    description:
      "Comprendre les bases du SEO, de la publicité en ligne et des tunnels de conversion."
  }
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Metiers Tech</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/metiers"
                  >
                    <RiComputerFill size={100} className="text-purple-950" />
                    <div className="mb-2 mt-4 text-lg font-medium">Metiers</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Concevoir des applications et logiciels.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
             
              <ListItem href="/docs" title="UX/UI Designer">
              Crée des interfaces utilisateurs attractives et intuitives.
              </ListItem>
              <ListItem href="/docs" title="Développeur Front End">
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
              <ListItem href="/metiers" title="Tous les metiers Tech ">
              Voir tous les metiers tech disponibles en formation actuellement
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cours</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.slice(0, 10).map((component) => (
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
              Projets
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
