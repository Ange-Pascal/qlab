"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CourseInfoTabs from "@/components/courses/CourseInfoTabs";
// import DeleteCourseButton from "@/components/courses/DeleteCourseButton";

interface Course {
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

export default function CourseClient({ course }: { course: Course }) {
  return (
    <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 px-20">
      {/* Colonne gauche : Texte centré bloc par bloc */}
      <div className="flex flex-col space-y-6">
        <p className="max-w-md">
          <span className="bg-slate-800 text-violet-600 italic px-3 py-1 rounded-lg text-sm">
            {course.category}
          </span>
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>

        <p className="max-w-md">{course.description.slice(0, 130)}...</p>

        <div className="flex gap-6">
          <Link href={`/courses/${course.slug}/edit`} className="text-blue-600 hover:underline">
            Modifier
          </Link>
          {/* <DeleteCourseButton slug={course.slug} /> */}
        </div>

        <Button
          className="bg-violet-600 hover:bg-violet-800 text-white px-6 py-3 text-lg rounded-lg"
          onClick={() => alert("Inscription en cours...")}
        >
          S'inscrire à ce cours
        </Button>
      </div>

      {/* Colonne droite : Image */}
      <div className="relative w-full h-40 md:h-[225px] border rounded-lg overflow-hidden shadow-md">
        <Image src={course.course_image} alt={course.title} fill className="object-cover" />
      </div>

      {/* Tabs dynamiques */}
      <CourseInfoTabs />
    </div>
  );
}
