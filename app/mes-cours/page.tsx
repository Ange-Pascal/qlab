"use client";
import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  // ... autres formations
];

export default function FormationPage() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <main className="pb-20">
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

      {/* Switch layout */}
      <div className="max-w-7xl mx-auto mt-6 px-8 md:px-20 flex justify-end mb-6">
        <div className="flex space-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={`px-4 py-2 rounded border ${
              layout === "grid"
                ? "bg-violet-600 text-white"
                : "bg-yellow-600 text-black"
            }`}
          >
            Grille
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`px-4 py-2 rounded border ${
              layout === "list"
                ? "bg-violet-600 text-white"
                : "bg-yellow-600 text-black"
            }`}
          >
            Liste
          </button>
        </div>
      </div>

      {/* Liste des formations */}
      <section className="max-w-7xl mx-auto px-8 md:px-20">
        {formationsData.length === 0 ? (
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
            {formationsData.map((formation) => {
              const slug = generateSlug(formation.title);
              return (
                <motion.div
                  key={formation.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Link href={`/cours/${slug}`}>
                    <div className="relative h-48 cursor-pointer">
                      <div className="absolute top-2 left-2 z-10 text-black bg-white/80 text-xs px-3 py-1 rounded-full shadow">
                        {formation.category}
                      </div>
                      <div className="absolute top-2 right-2 z-10 text-black bg-white/80 text-xs px-3 py-1 rounded-full shadow">
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
                    {/* Bouton d'inscription */}
                    <div className="px-5 pb-5">
                      <Button className="mt-2 w-full bg-violet-600 text-white py-2 px-4 rounded-xl hover:bg-violet-900 transition">
                        Consulter
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </section>
    </main>
  );
}
