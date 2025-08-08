import CourseOutcomesForm from "@/components/courses/CourseOutcomesForm";

export default function AddCourseOutcomePage({ params }: { params: { slug: string } }) {
  return <CourseOutcomesForm slug={params.slug} />;
}