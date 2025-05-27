"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/home/ContactForm";
import Link from "next/link";
import axios from "axios";
import api from "@/utils/api";

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

// Composant Métier
function MetierCard({ title, description, image }: any) {
  const slug = generateSlug(title);
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={240}
        className="object-cover w-full h-48"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        <Link href={`/metiers/${slug}`}>
          <Button className="mt-4 px-6 py-2  text-white rounded-lg hover:bg-violet-900 transition">
            Voir plus
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

// Données métiers
// const metiersData = [
//   {
//     title: "Developpeur Web",
//     description: "Conçoit et développe des sites et applications web.",
//     image: "/images/learning.jpg",
//     formations: [
//       "HTML, CSS, JS",
//       "React / Laravel",
//       "Base de données",
//       "Git et GitHub",
//     ],
//   },
//   {
//     title: "UX/UI Designer",
//     description: "Crée des interfaces utilisateurs attractives et intuitives.",
//     image: "/images/learning.jpg",
//     formations: [
//       "Figma & Adobe XD",
//       "Design Thinking",
//       "Accessibilité",
//       "Ergonomie digitale",
//     ],
//   },
//   {
//     title: "Data Analyst",
//     description: "Analyse les données pour en tirer des insights.",
//     image: "/images/learning.jpg",
//     formations: ["Excel avancé", "SQL", "Python", "Power BI / Tableau"],
//   },
//   {
//     title: "Community Manager",
//     description: "Anime les réseaux sociaux et gère l’image de marque.",
//     image: "/images/learning.jpg",
//     formations: [
//       "Stratégie réseaux sociaux",
//       "Outils de gestion (Hootsuite, Buffer)",
//       "Création de contenu",
//     ],
//   },
//   {
//     title: "Développeur Front-End",
//     description: "Crée l’interface utilisateur des sites et applications web.",
//     image: "/images/frontend.jpg",
//     formations: ["HTML/CSS", "JavaScript", "Frameworks (React, Vue, Angular)"],
//   },
//   {
//     title: "Développeur Back-End",
//     description: "Gère la logique serveur, les bases de données et les API.",
//     image: "/images/backend.jpg",
//     formations: ["PHP/Laravel", "Node.js", "Bases de données (MySQL, MongoDB)"],
//   },
//   {
//     title: "Développeur Full-Stack",
//     description: "Maîtrise le développement à la fois côté client et serveur.",
//     image: "/images/learning.jpg",
//     formations: [
//       "HTML/CSS/JS",
//       "Node.js / PHP",
//       "Bases de données",
//       "Frameworks Full-Stack",
//     ],
//   },
//   {
//     title: "Développeur CMS",
//     description:
//       "Crée et personnalise des sites à l’aide de CMS comme WordPress.",
//     image: "/images/learning.jpg",
//     formations: ["WordPress", "Thèmes & plugins", "SEO et optimisation"],
//   },
//   // ... autres métiers
// ];

export default function MetiersPage() {
  const [metiers, setMetiers] = useState([]);
  const [selectedMetier, setSelectedMetier] = useState(null);

  useEffect(() => {
    const fetchMetiers = async () => {
      try {
        const response = await api.get("/api/metiers");
        setMetiers(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement", error);
      }
    };
    fetchMetiers();
  }, []);
       
  return (
    <main className=" min-h-screen pb-20">
      {/* Bannière */}
      <section className=" py-16 px-8 md:px-20 shadow">
        <h1 className="text-4xl font-bold mb-4">Les métiers du digital</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Découvrez les métiers les plus en demande dans le domaine du numérique
          et trouvez celui qui vous inspire.
        </p>
      </section>

      {/* Grille */}
      <section className="max-w-7xl mx-auto mt-10 px-8 md:px-20">
        {metiers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metiers.map((metier: any, i: number) => (
              <MetierCard
                key={i}
                {...metier}
                onClick={() => setSelectedMetier(metier)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center text-lg">
            Aucun métier disponible pour le moment.
          </p>
        )}
      </section>

      {/* Modale */}
      {selectedMetier && (
        <Modal
          metier={selectedMetier}
          onClose={() => setSelectedMetier(null)}
        />
      )}
      <ContactForm />
    </main>
  );
}
