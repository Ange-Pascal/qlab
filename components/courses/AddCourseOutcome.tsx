import CourseOutcomesForm from "@/components/courses/CourseOutcomesForm";

export default function AddCourseOutcomePage({ courseId }: { courseId: number }) {
  return <CourseOutcomesForm courseId={courseId} />;
}