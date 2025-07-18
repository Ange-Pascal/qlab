// /app/courses/[slug]/page.tsx
import { notFound } from "next/navigation";
import CourseClient from "@/components/courses/CourseClient"; 
import api from "@/utils/api";

export default async function Page({ params }: { params: { slug: string } }) {
  try {
    const response = await api.get(`/api/courses/${params.slug}`);
    const course = response.data.data;
    return <CourseClient course={course} />;
  } catch (error) {
    return notFound();
  }
}
