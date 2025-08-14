type Title = {
  title: string;
};

export default function StepTitle({ title }: Title) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Create a course</h1>
      <p className="text-gray-500 mb-6">{title}</p>
    </div>
  );
}
