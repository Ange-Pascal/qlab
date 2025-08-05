import CourseClient from "@/components/courses/CourseClient";
import api from "@/utils/api"; 


//Faire des recherches sur l'objet params

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const response = await api.get(`/api/courses/${slug}`);
  const course = response.data.data;

  return <CourseClient course={course} />;
}
