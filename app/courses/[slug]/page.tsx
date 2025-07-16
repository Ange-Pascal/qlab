"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import api from "@/utils/api";
import CourseInfoTabs from "@/components/courses/CourseInfoTabs";

interface Courses {
  id: number;
  title: string;
  slug: string;
  category: string;
  price: number;
  language: string;
  training_space: string;
  course_image: string;
  description: string;
  duration: number;
}

export default function FormationSinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const [courses, setCourses] = useState<Courses | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await api.get(`/api/courses/${params.slug}`);
        setCourses(response.data.data);
      } catch (error) {
        console.error("Erreur lors du chargement du cours :", error);
        setCourses(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [params.slug]);

  if (loading) return <div className="text-center py-20">Chargement...</div>;
  if (!courses) return notFound();

  return (
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 px-20">
        {/* Colonne gauche : Texte centré bloc par bloc */}

        <div className="flex flex-col space-y-6">
          {/* course category */}
          <p className=" max-w-md ">
            <span className="bg-slate-800 text-violet-600 italic px-3 py-1 rounded-lg text-sm">
              {courses.category}
            </span>
          </p>
          {/* Titre */}
          <h1 className="text-3xl md:text-4xl font-bold">{courses.title}</h1>

          {/* Description */}
          <p className=" max-w-md">{courses.description.slice(0, 130)}...</p>

          {/* Détails */}
          {/* <div className="space-y-2  text-sm md:text-base">
            <p><strong className="text-gray-500 font-semibold italic">Catégorie :</strong> {courses.category}</p>
            <p><strong className="text-gray-500 font-semibold italic">Durée :</strong> {courses.duration} heures</p>
            <p><strong className="text-gray-500 font-semibold italic">Langue :</strong> {courses.language}</p>
            <p><strong className="text-gray-500 font-semibold italic">Mode :</strong> {courses.training_space}</p>
            <p><strong className="text-gray-500 font-semibold italic">Prix :</strong> {courses.price === 0 ? "Gratuit" : `${courses.price} €`}</p>
          </div> */}

          {/* Liens : update et delete */}
          <div className="flex gap-6">
            <Link
              href={`/courses/${courses.slug}/edit`}
              className="text-blue-600 hover:underline"
            >
              Modifier
            </Link>
            <Link
              href={`/courses/${courses.slug}/delete`}
              className="text-red-600 hover:underline"
            >
              Supprimer
            </Link>
          </div>

          {/* Bouton */}
          <Button
            className="bg-violet-600 hover:bg-violet-800 text-white px-6 py-3 text-lg rounded-lg"
            onClick={() => alert("Inscription en cours...")}
          >
            S'inscrire à ce cours
          </Button>
        </div>
        {/* Colonne droite : Image */}
        <div className="relative w-full h-40 md:h-[225px] border rounded-lg overflow-hidden shadow-md">
          <Image
            src={courses.course_image}
            alt={courses.title}
            fill
            className="object-cover"
          />
        </div> 

      {/* course info toggle */}
      <CourseInfoTabs/>
      </div>
  );
}
