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
