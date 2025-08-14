import CourseHighlightsForm from "./CourseHighlightForm";

export default function AddCourseHighlightPage({ courseId }: { courseId: number }) {
  return <CourseHighlightsForm courseId={courseId} />;
}