import { JSX } from "react";
import { FaBookOpen, FaPaintBrush,FaLaptop  } from "react-icons/fa";



type ListItem = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};

const items: ListItem[] = [
  {
    id: 1,
    icon: <FaBookOpen className="text-blue-500 w-10 h-6" />,
    title: "Plus de 120 cours",
    description: "Maîtrisez un métier tech avec un cours pratique et immersif.",
  },
  {
    id: 2,
    icon: <FaLaptop className="text-green-500 w-6 h-6" />,
    title: "Espace de Travail",
    description: "Laboratoire pratique et Atelier de formation continue.",
  },
  {
    id: 3,
    icon: <FaPaintBrush className="text-red-500 w-6 h-6" />,
    title: "Design",
    description: "Créez des interfaces modernes et esthétiques pour vos projets.",
  },
];

export default items