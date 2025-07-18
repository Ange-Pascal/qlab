"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useCourse } from "@/contexts/CourseContext";
export default function CourseCard() {
  const course = useCourse(); // ✅ récupération du contexte

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/courses/${course.slug}`}>
        <div className="relative h-48 cursor-pointer">
          <div className="absolute top-2 left-2 z-10 text-black bg-white/80 text-xs px-3 py-1 rounded-full shadow">
            {course.category}
          </div>
          <div className="absolute top-2 right-2 z-10 text-black bg-white/80 text-xs px-3 py-1 rounded-full shadow">
            {course.training_space}
          </div>
          <Image
            src={course.course_image}
            alt={course.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-semibold text-black line-clamp-2">{course.title}</h3>
          <p className="text-sm text-gray-700"><strong>Prix :</strong> {course.price}</p>
          <p className="text-sm text-gray-700"><strong>Langue :</strong> {course.language}</p>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <Button className="mt-2 w-full bg-violet-600 text-white rounded-xl hover:bg-violet-900 transition">
          S'inscrire
        </Button>
      </div>
    </motion.div>
  );
}
