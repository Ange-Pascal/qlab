"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

const formationsData = [
  {
    id: 1,
    title: "Développement Web",
    category: "Développement",
    price: "Gratuit",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    category: "Design",
    price: "Payant",
    location: "Présentiel",
    language: "Anglais",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 3,
    title: "Data Science",
    category: "Data",
    price: "Payant",
    location: "En ligne",
    language: "Français",
    thumbnail: "/images/learning.jpg",
  },
  {
    id: 4,
    title: "Marketing Digital",
    category: "Marketing",
    price: "Gratuit",
    location: "Présentiel",
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
          <h1 className="text-4xl font-bold mb-4">
            Apprenez avec Qlab
          </h1>
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
                layout === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Grille
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`px-4 py-2 rounded border ${
                layout === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              Liste
            </button>
          </div>
        </div>

        {/* Formations */}
        <div
          className={`md:col-span-3 ${
            layout === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }`}
        >
          {loading ? (
            <div className="text-center col-span-full text-gray-500">
              Chargement...
            </div>
          ) : (
            filteredFormations.map((formation, i) => (
              <motion.div
                key={formation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white shadow rounded-xl overflow-hidden ${
                  layout === "list" ? "flex gap-4" : ""
                }`}
              >
                <Image
                  src={formation.thumbnail}
                  alt={formation.title}
                  width={layout === "list" ? 180 : 400}
                  height={layout === "list" ? 120 : 200}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{formation.title}</h3>
                  <p className="text-sm text-gray-500">
                    {formation.category} • {formation.price} •{" "}
                    {formation.location}
                  </p>
                  <p className="text-sm text-gray-500">{formation.language}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
