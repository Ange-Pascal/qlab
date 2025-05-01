'use client'

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import ContactForm from '@/components/home/ContactForm';

const metiersData = [
  {
    title: 'Developpeur Web',
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
  },
  {
    title: 'Développeur Back-End',
    description: 'Gère la logique serveur, les bases de données et les API.',
    image: '/images/backend.jpg',
    formations: ['PHP/Laravel', 'Node.js', 'Bases de données (MySQL, MongoDB)']
  },
  {
    title: 'Développeur Full-Stack',
    description: 'Maîtrise le développement à la fois côté client et serveur.',
    image: '/images/learning.jpg',
    formations: ['HTML/CSS/JS', 'Node.js / PHP', 'Bases de données', 'Frameworks Full-Stack']
  },
  {
    title: 'Développeur CMS',
    description: 'Crée et personnalise des sites à l’aide de CMS comme WordPress.',
    image: '/images/learning.jpg',
    formations: ['WordPress', 'Thèmes & plugins', 'SEO et optimisation']
  }
];

function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, '-');
}

export default function MetierSinglePage({ params }: { params: { slug: string } }) {
  const metier = metiersData.find(m => generateSlug(m.title) === params.slug);

  if (!metier) return notFound();

  return (
    <main className="min-h-screen">
      {/* Image en bannière */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={metier.image}
          alt={metier.title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{metier.title}</h1>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-0">
        <p className="text-lg text-gray-700 mb-6">{metier.description}</p>

        {metier.formations?.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Formations associées</h2>
            <ul className="list-disc list-inside space-y-2 text-blue-700">
              {metier.formations.map((formation, index) => (
                <li key={index}>
                  <a
                    href={`/formations/${formation.toLowerCase().replace(/\s+/g, '-')}`}
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
        <div className="mb-16">
          <Button
            className="px-6 py-3 text-white text-lg rounded-lg hover:bg-violet-900 transition"
            onClick={() => alert("Inscription à venir...")}
          >
            S'inscrire à ce métier
          </Button>
        </div>

        {/* Formulaire de contact */}
        <ContactForm />
      </section>
    </main>
  );
}
