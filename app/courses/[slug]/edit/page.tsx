import EditCourseForm from "@/components/courses/EditCourseForm"; 
import api from "@/utils/api";
import { notFound } from "next/navigation";

export default async function EditCoursePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  try {
    const res = await api.get(`/api/courses/${slug}`);
    const course = res.data.data;

    const initialData = {
      title: course.title || "",
      description: course.description || "",
      category: course.category || "Développement",
      training_space: course.training_space || "Présentiel",
      language: course.language || "Français",
      duration: course.duration?.toString() || "",
      price: course.price?.toString() || "",
    };

    return <EditCourseForm slug={slug} initialData={initialData} />;
  } catch (err) {
    console.error("Erreur lors du chargement du cours :", err);
    return notFound();
  }
}
