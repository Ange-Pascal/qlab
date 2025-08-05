import api from "@/utils/api";
import CoursesListClient from "@/components/courses/CoursesListClient"; 


export default async function FormationPage() {
  const response = await api.get("/api/courses");
  const courses = response.data.data;

  return <CoursesListClient courses={courses} />;
}
