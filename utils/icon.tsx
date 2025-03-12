import { JSX } from "react";

import { MdOutlineFlipToBack, MdOutlineSecurity } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { VscAzureDevops } from "react-icons/vsc";

type IconList = {
  id: number;
  icon: JSX.Element;
  titre: string;
  description: string;
};

const icons: IconList[] = [
  {
    id: 1,
    icon: <BsCreditCard2Front />,
    titre: "Front end",
    description:
      "Maîtriser le Front-End permet de créer des interfaces attrayantes, interactives et optimisées pour une meilleure expérience utilisateur",
  },
  {
    id: 2,
    icon: <MdOutlineFlipToBack />,
    titre: "Backend",
    description:
      "Maîtriser le Back-End permet de gérer les bases de données, la sécurité, la logique métier et la performance des applications.",
  },
  {
    id: 3,
    icon: <VscAzureDevops />,
    titre: "DevOps",
    description:
      "Maîtriser le DevOps permet d'automatiser, sécuriser et optimiser le développement, le déploiement et la gestion des infrastructures.",
  },
  {
    id: 4,
    icon: <MdOutlineSecurity />,
    titre: "Sécurité",
    description:
      "La sécurité informatique protège les données, prévient les cyberattaques et garantit la confidentialité, l’intégrité et la disponibilité des systèmes.",
  },
];

export default icons;
