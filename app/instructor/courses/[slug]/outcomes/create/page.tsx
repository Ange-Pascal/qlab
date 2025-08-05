import CourseOutcomesForm from "@/components/courses/CourseOutcomesForm";

export default function Page({ params }: { params: { slug: string } }) {
  return <CourseOutcomesForm slug={params.slug} />;
}