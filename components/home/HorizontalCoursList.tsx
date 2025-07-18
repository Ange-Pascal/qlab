'use client'
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Composant Métier
function MetierCard({ title, description, image, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer"
    >
      <Image src={image} alt={title} width={400} height={240} className="object-cover w-full h-48" />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 flex-1">{description}</p>
        <Button className="mt-4 px-4 py-2  text-white rounded hover:bg-violet-900 transition">
          Voir plus
        </Button>
      </div>
    </div>
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
  {
    title: 'Développeur Front-End',
    description: 'Crée l’interface utilisateur des sites et applications web.',
    image: '/images/frontend.jpg',
    formations: ['HTML/CSS', 'JavaScript', 'Frameworks (React, Vue, Angular)']
  }
];

export default function MetiersPage() {
  const [selectedMetier, setSelectedMetier] = useState(null);

  return (
    <main className="min-h-screen pb-20 md:px-40">
      
      {/* Grille */}
      <section className="max-w-7xl mx-auto  px-8 md:px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metiersData.map((metier, i) => (
          <MetierCard
            key={i}
            {...metier}
            onClick={() => alert(`Voir plus sur le métier: ${metier.title}`)} // Action au clic
          />
        ))}
        
      </section> 
      <div className="flex justify-end mt-4">
        <Link
          href='/courses'
          className="text-sm font-medium text-yellow-600 hover:underline"
        >
          Voir plus →
        </Link>
      </div>
    </main>
  );
}
