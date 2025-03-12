

// Définition du type pour un module et une leçon
type Lesson = {
  id: number;
  title: string;
  videoUrl: string;
};

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};

type Course = {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  rating: number;
  image: string;
  modules: Module[];
};

// Liste des cours avec modules et leçons
const courses: Course[] = [
  {
    id: 1,
    title: "Développement Web Moderne",
    description: "Pratique de React : Plus de 25 projets avec Next.js, TypeScript, Prisma, Zod, Shadcn, Axios, Router 6, Query 5, Redux Toolkit",
    instructor: "Ange-Pascal Akoumoua || Ingénieur Logiciel",
    duration: "100h",
    rating: 4.8,
    image: "/images/web-development.jpg",
    modules: [
      {
        id: 1,
        title: "Introduction",
        lessons: [
          { id: 1, title: "HTML et CSS Basics", videoUrl: "https://example.com/html-css" },
          { id: 2, title: "JavaScript Fondamentaux", videoUrl: "https://example.com/js-fondamentaux" },
          { id: 3, title: "Qu'est ce que React Js ", videoUrl: "https://example.com/js-fondamentaux" },
          { id: 4, title: "Le but de React Js ", videoUrl: "https://example.com/js-fondamentaux" },
          { id: 5, title: "La structure de React Js ", videoUrl: "https://example.com/js-fondamentaux" },
          { id: 6, title: "Prerequis ", videoUrl: "https://example.com/js-fondamentaux" },
          { id: 7, title: "Revus du cours", videoUrl: "https://example.com/js-fondamentaux" },
        ],
      },
      {
        id: 2,
        title: "Environnement de Dev",
        lessons: [
          { id: 8, title: "Workflow Info", videoUrl: "https://example.com/react" },
          { id: 9, title: "Browser", videoUrl: "https://example.com/vue" },
          { id: 10, title: "Vs Code", videoUrl: "https://example.com/vue" },
          { id: 11, title: "Node Js", videoUrl: "https://example.com/vue" },
          { id: 12, title: "Create-React-App", videoUrl: "https://example.com/vue" },
        ],
      },
      {
        id: 3,
        title: "Application de Backroads",
        lessons: [
          { id: 13, title: "Introduction", videoUrl: "https://example.com/react" },
          { id: 14, title: "GitHub", videoUrl: "https://example.com/vue" },
          { id: 15, title: "Setup & Installation", videoUrl: "https://example.com/vue" },
          { id: 16, title: "Modèle de base SRC", videoUrl: "https://example.com/vue" },
          { id: 17, title: "Structure de l'application", videoUrl: "https://example.com/vue" },
          { id: 18, title: "Pages (composants, nav logo, Smooth Scroll)", videoUrl: "https://example.com/vue" },
          { id: 19, title: "Liens des pages & pages sociaux", videoUrl: "https://example.com/vue" },
          { id: 20, title: "Plus de composants (Hero, about, titre, services, tours, footer)", videoUrl: "https://example.com/vue" },
          { id: 21, title: "Approches Alternatives (composants de Liens de page & plus de composants", videoUrl: "https://example.com/vue" },
          { id: 22, title: "Deploiement Continu", videoUrl: "https://example.com/vue" },
        ],
      }, 
      {
        id: 4,
        title: "Vite Js",
        lessons: [
          { id: 23, title: "Introduction", videoUrl: "https://example.com/react" },
          { id: 24, title: "Installation & Setup", videoUrl: "https://example.com/vue" },
         
        ],
      },
      {
        id: 5,
        title: "React Hooks and Topics Avancés",
        lessons: [
          { id: 25, title: "Intro, Github, Setup, Overview, exemple d'erreur", videoUrl: "https://example.com/react" },
          { id: 26, title: "UseState Fondamental", videoUrl: "https://example.com/vue" },
          { id: 27, title: "Rendu Initial, Re-render, Règle general de React Hooks", videoUrl: "https://example.com/vue" },
          { id: 28, title: "UseState: Array Exemple", videoUrl: "https://example.com/vue" },
          { id: 29, title: "UseState: Extra Info, Exemple Objet, Auto Batching info", videoUrl: "https://example.com/vue" },
          { id: 30, title: "UseState: Fonction, Formulaire, SetTimeout", videoUrl: "https://example.com/vue" },
          { id: 31, title: "UseState: Exercice", videoUrl: "https://example.com/vue" },
          { id: 32, title: "UseEffect (fondamental, Effet Multiple, Fetch Challenge, Clean Up Info)", videoUrl: "https://example.com/vue" },
          { id: 33, title: "UseEffect: Exercice", videoUrl: "https://example.com/vue" },
          { id: 34, title: "Rendu Conditionnel & Fetching de données", videoUrl: "https://example.com/vue" },
          { id: 35, title: "Les Formulaires", videoUrl: "https://example.com/vue" },
          { id: 36, title: "UseRef", videoUrl: "https://example.com/vue" },
          { id: 36, title: "Hooks personnalisés", videoUrl: "https://example.com/vue" },
          { id: 37, title: "Context API", videoUrl: "https://example.com/vue" },
          { id: 38, title: "UseReducer", videoUrl: "https://example.com/vue" },
          { id: 39, title: "React DevTools, React Memo, CallBack Hooks, UseTransition, React Suspense", videoUrl: "https://example.com/vue" },
          { id: 40, title: "Projet avec React Fondamental étape par étape", videoUrl: "https://example.com/vue" },
         
        ],
      },
      {
        id: 6,
        title: "Axios Http & React Query",
        lessons: [
          { id: 41, title: "Axios introduction ", videoUrl: "https://example.com/react" },
          { id: 42, title: "IAxios CRUD", videoUrl: "https://example.com/vue" },
          { id: 43, title: "React Query Introduction", videoUrl: "https://example.com/vue" },
          { id: 43, title: "React Query complète", videoUrl: "https://example.com/vue" },
          { id: 44, title: "Projet CMS Contentful", videoUrl: "https://example.com/vue" },
         
        ],
      },
      {
        id: 7,
        title: "Mix Master React Router & React Query",
        lessons: [
          { id: 45, title: "Introduction & Configuration", videoUrl: "https://example.com/react" },
          { id: 46, title: "Routage Basic", videoUrl: "https://example.com/vue" },
          { id: 47, title: "React Toastify", videoUrl: "https://example.com/vue" },
          { id: 48, title: "Formulaire ", videoUrl: "https://example.com/vue" },
          { id: 49, title: "React Query complète", videoUrl: "https://example.com/vue" },
         
        ],
      },
      {
        id: 8,
        title: "TailwindCss",
        lessons: [
          { id: 50, title: "Introduction & Configuration", videoUrl: "https://example.com/react" },
          { id: 51, title: "Projet Portefolio Web Dev", videoUrl: "https://example.com/vue" }, 
        ],
      },
      {
        id: 9,
        title: "Redux Toolkit",
        lessons: [
          { id: 52, title: "Introduction & Configuration & Githup", videoUrl: "https://example.com/react" },
          { id: 53, title: "Redux Dev Tools", videoUrl: "https://example.com/vue" }, 
          { id: 54, title: "Projet Comprehension Redux", videoUrl: "https://example.com/vue" }, 
          { id: 55, title: "Projet Complet (React Router, RTK, Axios, React Query)", videoUrl: "https://example.com/vue" }, 
        ],
      },
      {
        id: 10,
        title: "Typescript",
        lessons: [
          { id: 56, title: "Introduction & Configuration & Githup", videoUrl: "https://example.com/react" },
          { id: 57, title: "Type Annotation & Type Inference", videoUrl: "https://example.com/vue" }, 
          { id: 58, title: "Union and any type", videoUrl: "https://example.com/vue" }, 
          { id: 59, title: "Tableaux & Objets", videoUrl: "https://example.com/vue" }, 
          { id: 60, title: "Fonctions Params and Fonctions Returns", videoUrl: "https://example.com/vue" }, 
          { id: 61, title: "Default & Rest parametres ", videoUrl: "https://example.com/vue" }, 
          { id: 62, title: "Objets comme parametres & Excess propreté de verification", videoUrl: "https://example.com/vue" }, 
          { id: 63, title: "Type Alias & Intersection type", videoUrl: "https://example.com/vue" }, 
          { id: 64, title: "Interface complet ", videoUrl: "https://example.com/vue" }, 
          { id: 65, title: "Interface ", videoUrl: "https://example.com/vue" }, 
          { id: 66, title: "Tuples & Enums", videoUrl: "https://example.com/vue" }, 
          { id: 67, title: "Type Assertion, Inconnu and type Never", videoUrl: "https://example.com/vue" }, 
          { id: 68, title: "ES6 modules ", videoUrl: "https://example.com/vue" }, 
          { id: 69, title: "Type Guarding", videoUrl: "https://example.com/vue" }, 
          { id: 70, title: "Generique", videoUrl: "https://example.com/vue" }, 
          { id: 71, title: "Afficher les données & Déclaration des fichiers", videoUrl: "https://example.com/vue" }, 
          { id: 72, title: "Classes", videoUrl: "https://example.com/vue" }, 
          { id: 73, title: "Projet Tâches", videoUrl: "https://example.com/vue" }, 
        ],
      },
      {
        id: 11,
        title: "React avec Typescript",
        lessons: [
          { id: 74, title: "Introduction & Configuration & Fondamentaux", videoUrl: "https://example.com/react" },
          { id: 75, title: "UseState & Events ", videoUrl: "https://example.com/vue" }, 
          { id: 76, title: "Challenge et solution", videoUrl: "https://example.com/vue" }, 
          { id: 77, title: "Context API et UseReducer", videoUrl: "https://example.com/vue" }, 
          { id: 78, title: "Afficher les données ", videoUrl: "https://example.com/vue" }, 
          { id: 79, title: "Redux Toolkit ", videoUrl: "https://example.com/vue" }, 
          { id: 80, title: "Projet de tâches ", videoUrl: "https://example.com/vue" }, 
        ],
      },
      {
        id: 12,
        title: "Next Js",
        lessons: [
          { id: 81, title: "Introduction & Configuration & Fondamentaux", videoUrl: "https://example.com/react" },
          { id: 82, title: "Next Routes ", videoUrl: "https://example.com/vue" }, 
          { id: 83, title: "Layout File, Navbar, Fonts and Metadata", videoUrl: "https://example.com/vue" }, 
          { id: 84, title: "Composant Serveur & Composant client", videoUrl: "https://example.com/vue" }, 
          { id: 85, title: "Afficher les données ", videoUrl: "https://example.com/vue" }, 
          { id: 86, title: "Nest Layout & Pages dynamiques ", videoUrl: "https://example.com/vue" }, 
          { id: 87, title: "Images", videoUrl: "https://example.com/vue" }, 
          { id: 88, title: "Plus de route", videoUrl: "https://example.com/vue" }, 
          { id: 89, title: "Action serveur", videoUrl: "https://example.com/vue" }, 
          { id: 90, title: "Action File (fichier)", videoUrl: "https://example.com/vue" }, 
          { id: 91, title: "UseFormStatus and UseFormState", videoUrl: "https://example.com/vue" }, 
          { id: 92, title: "Suppression de bouton, cacher un input & methode bind", videoUrl: "https://example.com/vue" }, 
          { id: 93, title: "Comprendre le routage", videoUrl: "https://example.com/vue" }, 
          { id: 94, title: "Middleware, Local build & cache", videoUrl: "https://example.com/vue" }, 
        ],
      }, 
      {
        id: 13,
        title: "Projets",
        lessons: [
          { id: 95, title: "Boutique en ligne", videoUrl: "https://example.com/react" },
          { id: 96, title: "Recherche Github Utilisateurs ", videoUrl: "https://example.com/vue" }, 
          { id: 97, title: "Testing d'application react avec RTL & vitest", videoUrl: "https://example.com/vue" }, 
          { id: 98, title: " Jobify", videoUrl: "https://example.com/vue" }, 
          { id: 99, title: " Jobster  ", videoUrl: "https://example.com/vue" }, 
          { id: 100, title: "Github Utilsateurs", videoUrl: "https://example.com/vue" }, 
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Ingénieur DevOps",
    description: "Maîtrisez les principes du DevOps pour automatiser, sécuriser et optimiser le cycle de vie des applications, du développement au déploiement.",
    instructor: "Ange Pascal Akoumoua || Ingénieur DevOps",
    duration: "350h",
    rating: 4.6,
    image: "/images/nodejs.jpg",
    modules: [
      {
        id: 1,
        title: "Apprenez les bases du DevOps, des réseaux et des applications.",
        lessons: [
          { id: 1, title: "Le modèle des 12 facteurs app ", videoUrl: "https://example.com/node-install" },
          { id: 2, title: "DevOps prérequis cours ", videoUrl: "https://example.com/node-install" },
          { id: 3, title: "Les Fondamentaux du DevOps", videoUrl: "https://example.com/express" },
        ],
      },
      {
        id: 2,
        title: "Linux",
        lessons: [

          { id: 4, title: "Linux pour débutant", videoUrl: "https://example.com/express" },
          { id: 5, title: "Shell Script pour débutant", videoUrl: "https://example.com/express" },
        ],
      },
      {
        id: 3,
        title: "Apprenez la programmation",
        lessons: [
          { id: 6, title: "Goland", videoUrl: "https://example.com/node-install" }, 
          { id: 7, title: "Python", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 4,
        title: "Apprenez le contrôle de version",
        lessons: [
          { id: 8, title: "Git pour débutants", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 5,
        title: "Apprenez les outils CI/CD populaires",
        lessons: [
          { id: 9, title: "Jenkis pour débutant", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 6,
        title: "Maîtrisez les concepts des conteneurs",
        lessons: [
          { id: 10, title: "Docker pour débutant absolu", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 7,
        title: "Apprenez l'orchestration des conteneurs",
        lessons: [
          { id: 11, title: "Kubernetes pour Débutants", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 8,
        title: "Maîtrisez les concepts d'Infrastructure as Code",
        lessons: [
          { id: 12, title: "Terraform pour Débutants", videoUrl: "https://example.com/node-install" },  
        ],
      },
      {
        id: 9,
        title: "Apprentissage avancé",
        lessons: [
          { id: 13, title: "Helm pour débutants", videoUrl: "https://example.com/node-install" },  
          { id: 14, title: "Mesh de services Istio", videoUrl: "https://example.com/node-install" },  
          { id: 15, title: "GitOps avec ArgoCD", videoUrl: "https://example.com/node-install" },  
          { id: 16, title: "Associé certifié Prometheus", videoUrl: "https://example.com/node-install" },  
        ],
      },
      {
        id: 10,
        title: "Préparez-vous pour votre carrière !",
        lessons: [
          { id: 17, title: "DevOps interview", videoUrl: "https://example.com/node-install" },  
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Brand Management : Immersion dans la gestion de marques",
    description: "Ce cours propose une exploration approfondie des principes et des pratiques de la gestion de marque, aussi appelée brand management.",
    instructor: "Hans Kouagoué || Brand Manager, Co-founder",
    duration: "30h",
    rating: 4.6,
    image: "/images/nodejs.jpg",
    modules: [
      {
        id: 1,
        title: "Introduction à la gestion de marque.",
        lessons: [
          { id: 1, title: "Les Fondamentaux de la Gestion de Marque", videoUrl: "https://example.com/node-install" },
          { id: 2, title: "Création et Développement d'une Marque", videoUrl: "https://example.com/node-install" },
          { id: 3, title: "Gestion et Évolution d'une Marque au Fil du Temps", videoUrl: "https://example.com/express" },
        ],
      },
      {
        id: 2,
        title: "Piliers d'une marque",
        lessons: [

          { id: 4, title: "Identité Visuelle et Design de la Marque", videoUrl: "https://example.com/express" },
          { id: 5, title: "Valeurs et Mission de la Marque", videoUrl: "https://example.com/express" },
          { id: 6, title: "Expérience Client et Relation avec la Marque", videoUrl: "https://example.com/express" },
        ],
      },
      {
        id: 3,
        title: "Recherche et analyse de la marque",
        lessons: [
          { id: 8, title: "Analyse SWOT pour une Marque", videoUrl: "https://example.com/node-install" }, 
          { id: 9, title: "Étude de Marché et Positionnement de Marque", videoUrl: "https://example.com/node-install" },
          { id: 10, title: "Évaluation de la Perception de la Marque", videoUrl: "https://example.com/node-install" },
        ],
      },
      {
        id: 4,
        title: "Stratégie de marque",
        lessons: [
          { id: 11, title: "Définition et Positionnement de la Marque", videoUrl: "https://example.com/node-install" }, 
          { id: 12, title: "Création d'une Proposition de Valeur Unique", videoUrl: "https://example.com/node-install" },
          { id: 13, title: "Stratégie de Communication et de Marketing de la Marque", videoUrl: "https://example.com/node-install" },
        ],
      },
      {
        id: 5,
        title: "Gestion de la perception de la marque",
        lessons: [
          { id: 14, title: "Construire une Image Cohérente de la Marque", videoUrl: "https://example.com/node-install" }, 
          { id: 15, title: "Gérer les Avis et Retours des Clients", videoUrl: "https://example.com/node-install" }, 
          { id: 15, title: "Impact des Relations Publiques et des Médias", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 6,
        title: "Évaluation de la performance de la marque",
        lessons: [
          { id: 17, title: "Mesure de la Notoriété et de la Visibilité de la Marque", videoUrl: "https://example.com/node-install" }, 
          { id: 18, title: "Évaluation de la Fidélité et de l'Engagement Client", videoUrl: "https://example.com/node-install" }, 
          { id: 19, title: "Suivi de la Perception de la Marque et de la Concurrence", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 7,
        title: "Applications pratiques et études de cas",
        lessons: [
          { id: 20, title: "Etude de cas d'une entreprise B2B", videoUrl: "https://example.com/node-install" }, 
        ],
      },
      {
        id: 8,
        title: "Tendances et innovations en gestion de marque",
        lessons: [
          { id: 21, title: "Personnalisation et Expérience Client", videoUrl: "https://example.com/node-install" },  
          { id: 22, title: "L'Authenticité et la Transparence de la Marque", videoUrl: "https://example.com/node-install" },  
          { id: 23, title: "TUtilisation des Technologies Émergentes (AR/VR, IA, Blockchain", videoUrl: "https://example.com/node-install" },  
        ],
      },
     
    ],
  },
];


export default courses;
