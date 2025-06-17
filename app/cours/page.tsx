"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // à importer
import api from "@/utils/api";

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function FormationPage() {
  const [coursesData, setCoursesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    trainingSpace: "",
    language: "",
    search: "",
  });
  // charger les formations Via l'api

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get("api/courses"); 
        console.log("Réponse API :", response.data);
        setCoursesData(response.data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des cours:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // const [loading, setLoading] = useState(false);

  const handleFilterChange = (field: string, value: string) => {
    setLoading(true);
    setTimeout(() => {
      setFilters((prev) => ({ ...prev, [field]: value }));
      setLoading(false);
    }, 300); // simulate loading delay
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(
      (f) =>
        (!filters.category || f.category === filters.category) &&
        (!filters.price || f.price === filters.price) &&
        (!filters.trainingSpace || f.location === filters.trainingSpace) &&
        (!filters.language || f.language === filters.language) &&
        (!filters.search ||
          f.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  }, [filters, coursesData]); 

//   if (loading || !coursesData || coursesData.length === 0) {
//   return (
//     <main className="py-20 text-center text-gray-500">
//       {loading ? "Chargement..." : "Aucune formation disponible."}
//     </main>
//   );
// }

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

        {/* Cours */}
        {/* Liste des cours */}
        <div className="md:col-span-3">
          {loading ? (
            <div className="text-center py-20">Chargement...</div>
          ) : filteredCourses.length === 0 ? (
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
              {filteredCourses.map((course) => {
                const slug = generateSlug(course.title);
                return (
                  <motion.div
                    key={course.id}
                    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Lien sur image + contenu sauf bouton */}
                    <Link href={`/cours/${slug}`}>
                      <div className="relative h-48 cursor-pointer">
                        {/* Badge catégorie */}
                        <div className="absolute top-2 left-2 z-10 text-black bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow">
                          {course.category}
                        </div>
                        {/* Badge localisation */}
                        <div className="absolute top-2 right-2 z-10 text-black bg-white/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full shadow">
                          {course.trainingSpace}
                        </div>
                        <Image
                          src={course.course_image}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="text-lg font-semibold text-black line-clamp-2">
                          {course.title}
                        </h3>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Prix :</span>{" "}
                          {course.price}
                        </div>
                        <div className="text-sm text-gray-700">
                          <span className="font-medium">Langue :</span>{" "}
                          {course.language}
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
