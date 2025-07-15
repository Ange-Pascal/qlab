"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// ❗ Copie-colle ici les mêmes données formationsData que dans la page principale
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
function generateSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function FormationSinglePage({ params }: { params: { slug: string } }) {
  const formation = formationsData.find(
    (f) => generateSlug(f.title) === params.slug
  );

  if (!formation) return notFound();

  return (
    <main className="min-h-screen">
      {/* Image bannière */}
      <section className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={formation.thumbnail}
          alt={formation.title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
            {formation.title}
          </h1>
        </div>
      </section>

      {/* Détails de la formation */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-0 space-y-6">
        <div className="space-y-2 text-gray-800 text-lg">
          <p><strong>Catégorie :</strong> {formation.category}</p>
          <p><strong>Prix :</strong> {formation.price}</p>
          <p><strong>Langue :</strong> {formation.language}</p> 
          <p><strong>Localisation :</strong> {formation.location}</p>
        </div>

        <Button
          className="bg-violet-600 hover:bg-violet-900 text-white px-6 py-3 rounded-lg text-lg"
          onClick={() => alert("Inscription en cours...")}
        >
          S'inscrire à ce cours
        </Button>
      </section>
    </main>
  );
}
