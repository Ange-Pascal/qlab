"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // à importer

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

const formationsData = [
  {
    id: 1,
    title: "React.js",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 2,
    title: "Next.js",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 3,
    title: "Tailwind CSS",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 4,
    title: "HTML",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 5,
    title: "CSS",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 6,
    title: "JavaScript",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 7,
    title: "Laravel",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 8,
    title: "Python",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 9,
    title: "Java",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 10,
    title: "Spring Boot",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 11,
    title: "Node.js",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 12,
    title: "NestJS",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 13,
    title: "Express.js",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 14,
    title: "Django",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 15,
    title: "Algorithmique",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 16,
    title: "WordPress",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 17,
    title: "PHP",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 18,
    title: "UX Design (User Experience)",
    category: "Design",
    price: "Payant",
    location: "Présentiel",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 19,
    title: "UI Design (User Interface)",
    category: "Design",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 20,
    title: "Analyse de données et statistiques",
    category: "Data",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 21,
    title: "Outils d’analyse",
    category: "Data Science",
    price: "Payant",
    location: "Présentiel",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 22,
    title: "Préparation et traitement des données",
    category: "Big Data",
    price: "Gratuit",
    location: "Hybride",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 23,
    title: "Pensée analytique et résolution de problèmes",
    category: "Compétences Transversales",
    price: "Payant",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 24,
    title: "Notions de machine learning",
    category: "Intelligence Artificielle",
    price: "Gratuit",
    location: "Présentiel",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 25,
    title: "Notions de business intelligence",
    category: "Business",
    price: "Payant",
    location: "Hybride",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 26,
    title: "Git & versioning",
    category: "Outils collaboratifs",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },

  {
    id: 27,
    title: "Stratégie réseaux sociaux",
    category: "Marketing Digital",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 28,
    title: "Outils de gestion & publication",
    category: "Community Management",
    price: "Payant",
    location: "Présentiel",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 29,
    title: "Création de contenu",
    category: "Créativité",
    price: "Gratuit",
    location: "Hybride",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 30,
    title: "Animation et modération de communauté",
    category: "Community Management",
    price: "Payant",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 31,
    title: "Analyse et reporting",
    category: "Marketing",
    price: "Gratuit",
    location: "Présentiel",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 32,
    title: "Culture web & tendances digitales",
    category: "Culture Numérique",
    price: "Gratuit",
    location: "Hybride",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 33,
    title: "Marketing digital",
    category: "Marketing",
    price: "Payant",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
];

export default function FormationPage() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    location: "",
    language: "",
    search: "",
  });
  const [loading, setLoading] = useState(false);

  const handleFilterChange = (field: string, value: string) => {
    setLoading(true);
    setTimeout(() => {
      setFilters((prev) => ({ ...prev, [field]: value }));
      setLoading(false);
    }, 300); // simulate loading delay
  };

  const filteredFormations = useMemo(() => {
    return formationsData.filter(
      (f) =>
        (!filters.category || f.category === filters.category) &&
        (!filters.price || f.price === filters.price) &&
        (!filters.location || f.location === filters.location) &&
        (!filters.language || f.language === filters.language) &&
        (!filters.search ||
          f.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  }, [filters]);

  return (
    <main className=" pb-20">
      {/* Bannière */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 shadow">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Apprenez avec Qlab</h1>
          <p className="text-lg text-gray-600">
            Formations pratiques, vidéos engageantes et soutien personnalisé.
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="border-4 border-yellow-500 rounded-xl shadow-lg overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=eKYkDqHohrw"
              width="100%"
            />
          </div>
        </div>
      </section>

      {/* Filtres et formations */}
      <section className="max-w-7xl mx-auto mt-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filtres */}
        <div className=" shadow p-6 rounded-xl space-y-4 md:col-span-1">
          <h2 className="text-lg font-semibold">Filtres</h2>
          <select
            className="w-full border rounded px-4 py-2"
            onChange={(e) => handleFilterChange("category", e.target.value)}
          >
            <option value="">Catégorie</option>
            <option value="Développement">Développement</option>
            <option value="Design">Design</option>
            <option value="Data">Data</option>
            <option value="Marketing">Marketing</option>
          </select>
          <select
            className="w-full border rounded px-4 py-2"
            onChange={(e) => handleFilterChange("price", e.target.value)}
          >
            <option value="">Prix</option>
            <option value="Gratuit">Gratuit</option>
            <option value="Payant">Payant</option>
          </select>
          <select
            className="w-full border rounded px-4 py-2"
            onChange={(e) => handleFilterChange("location", e.target.value)}
          >
            <option value="">Localisation</option>
            <option value="En ligne">En ligne</option>
            <option value="Présentiel">Présentiel</option>
          </select>
          <select
            className="w-full border rounded px-4 py-2"
            onChange={(e) => handleFilterChange("language", e.target.value)}
          >
            <option value="">Langue</option>
            <option value="Français">Français</option>
            <option value="Anglais">Anglais</option>
          </select>
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full border rounded px-4 py-2"
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              onClick={() => setLayout("grid")}
              className={`px-4 py-2 rounded border ${
                layout === "grid" ? "bg-violet-600 text-white" : "bg-yellow-600"
              }`}
            >
              Grille
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`px-4 py-2 rounded border ${
                layout === "list" ? "bg-violet-600 text-white" : "bg-yellow-600"
              }`}
            >
              Liste
            </button>
          </div>
        </div>

        {/* Formations */}
        {/* Liste des formations */}
        <div className="md:col-span-3">
          {loading ? (
            <div className="text-center py-20">Chargement...</div>
          ) : filteredFormations.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              Aucun cours trouvé.
            </div>
          ) : (
            <motion.div
              className={`grid gap-6 ${
                layout === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {filteredFormations.map((formation) => {
                const slug = generateSlug(formation.title);
                return (
                  <motion.div
                    key={formation.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Lien sur image + contenu sauf bouton */}
                    <Link href={`/cours/${slug}`}>
                      <div className="relative h-48 cursor-pointer">
                        {/* Badge catégorie */}
                        <div className="absolute top-2 left-2 z-10 text-black bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow">
                          {formation.category}
                        </div>
                        {/* Badge localisation */}
                        <div className="absolute top-2 right-2 z-10 text-black bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow">
                          {formation.location}
                        </div>
                        <Image
                          src={formation.thumbnail}
                          alt={formation.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold text-black line-clamp-2">
                          {formation.title}
                        </h3>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Prix :</span>{" "}
                          {formation.price}
                        </div>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Langue :</span>{" "}
                          {formation.language}
                        </div>
                      </div>
                    </Link>

                    {/* Bouton en dehors du lien */}
                    <div className="px-5 pb-5">
                      <Button className="mt-2 w-full bg-violet-600 text-white py-2 px-4 rounded-xl hover:bg-violet-900 transition">
                        S'inscrire
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

