'use client'
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/home/ContactForm';

// Composant Métier
function MetierCard({ title, description, image, onClick }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
    >
      <Image src={image} alt={title} width={400} height={240} className="object-cover w-full h-48" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        <Button
          onClick={onClick}
          className="mt-4 px-4 py-2  text-white rounded hover:bg-violet-900 transition"
        >
          Voir plus
        </Button>
      </div>
    </motion.div>
  );
}

// Composant Modale
function Modal({ metier, onClose }: any) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 py-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-6 relative overflow-auto max-h-[90vh] flex flex-col md:flex-row gap-6"
          >
            {/* Bouton Fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
  
            {/* Partie gauche : infos */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3">{metier.title}</h2>
              <p className="text-gray-700 mb-4">{metier.description}</p>
  
              {/* Formations liées */}
              {metier.formations && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Formations associées :</h3>
                  <ul className="list-disc list-inside space-y-2 text-blue-600">
                    {metier.formations.map((formation: string, i: number) => (
                      <li key={i}>
                        <a
                          href={`/formations/${encodeURIComponent(formation.toLowerCase().replace(/\s+/g, '-'))}`}
                          className="hover:underline"
                        >
                          {formation}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
  
              {/* Bouton d'inscription */}
              <div className="text-left">
                <Button
                  onClick={() => alert("Inscription à venir...")}
                  className="px-6 py-2  text-white rounded-lg hover:bg-violet-900 transition"
                >
                  S'inscrire à une formation
                </Button>
              </div>
            </div>
  
            {/* Partie droite : image */}
            <div className="w-full md:w-[40%]">
              <Image
                src={metier.image}
                alt={metier.title}
                width={100}
                height={50}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence> 
    );
  }
  
  

// Données métiers
const metiersData = [
    {
      title: 'Développeur Web',
      description: 'Conçoit et développe des sites et applications web.',
      image: '/images/learning.jpg',
      formations: ['HTML, CSS, JS', 'React / Laravel', 'Base de données', 'Git et GitHub']
    },
    {
      title: 'UX/UI Designer',
      description: 'Crée des interfaces utilisateurs attractives et intuitives.',
      image: '/images/learning.jpg',
      formations: ['Figma & Adobe XD', 'Design Thinking', 'Accessibilité', 'Ergonomie digitale']
    },
    {
      title: 'Data Analyst',
      description: 'Analyse les données pour en tirer des insights.',
      image: '/images/learning.jpg',
      formations: ['Excel avancé', 'SQL', 'Python', 'Power BI / Tableau']
    },
    {
      title: 'Community Manager',
      description: 'Anime les réseaux sociaux et gère l’image de marque.',
      image: '/images/learning.jpg',
      formations: ['Stratégie réseaux sociaux', 'Outils de gestion (Hootsuite, Buffer)', 'Création de contenu']
    },
    // ... autres métiers
  ];
  
export default function MetiersPage() {
  const [selectedMetier, setSelectedMetier] = useState(null);

  return (
    <main className=" min-h-screen pb-20">
      {/* Bannière */}
      <section className=" py-16 px-8 md:px-20 shadow">
        <h1 className="text-4xl font-bold mb-4">Les métiers du digital</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Découvrez les métiers les plus en demande dans le domaine du numérique et trouvez celui qui vous inspire.
        </p>
      </section>

      {/* Grille */}
      <section className="max-w-7xl mx-auto mt-10 px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metiersData.map((metier, i) => (
          <MetierCard
            key={i}
            {...metier}
            onClick={() => setSelectedMetier(metier)}
          />
        ))}
      </section>

      {/* Modale */}
      {selectedMetier && <Modal metier={selectedMetier} onClose={() => setSelectedMetier(null)} />} 
      <ContactForm/>
    </main>
  );
}
