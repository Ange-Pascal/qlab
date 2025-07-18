"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CourseFilters from "./CourseFilters";
import CourseCard from "./CourseCard";
import CoursesContext from "@/contexts/CourseContext";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function CoursesListClient({ courses }: { courses: any[] }) {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState({
    category: "",
    price: "",
    training_space: "",
    language: "",
    search: "",
  });

  const filteredCourses = useMemo(() => {
    return courses.filter(
      (f) =>
        (!filters.category || f.category === filters.category) &&
        (!filters.price || f.price === filters.price) &&
        (!filters.training_space || f.training_space === filters.training_space) &&
        (!filters.language || f.language === filters.language) &&
        (!filters.search || f.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  }, [filters, courses]);

  return (
    <CoursesContext.Provider value={filteredCourses}>
      <main className="pb-20">
        {/* 🎥 Bannière */}
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
                height="260px"
              />
            </div>
          </div>
        </section>

        {/* 🧩 Filtres + Liste de cours */}
        <section className="max-w-7xl mx-auto mt-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <CourseFilters
            filters={filters}
            setFilters={setFilters}
            layout={layout}
            setLayout={setLayout}
          />
          <div className="md:col-span-3">
            {filteredCourses.length === 0 ? (
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
                {filteredCourses.map((course) => (
                  <CoursesContext.Provider key={course.id} value={course}>
                    <CourseCard/>
                  </CoursesContext.Provider>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>
    </CoursesContext.Provider>
  );
}
