"use client";

import { useCourseOutcomes } from "./useCourseOutcomes";

export default function CourseOutcomesForm({ courseId }: {courseId: number}) {
  const {
    outcomes,
    loading,
    message,
    handleChange,
    addOutcome,
    submit,
    maxReached,
  } = useCourseOutcomes(courseId);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6 shadow rounded">
      <h2 className="text-xl font-bold">Add course outcome</h2>

      {outcomes.map((outcome, index) => (
        <div
          key={index}
          className="space-y-4 p-4 border rounded bg-gray-50 transition-all duration-300 ease-in-out"
        >
          <div className="text-gray-700 font-medium">Outcome #{index + 1}</div>

          <input
            type="text"
            placeholder="Title"
            value={outcome.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="w-full p-2 border rounded"
          />

          <textarea
            placeholder="Description"
            value={outcome.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
            className="w-full p-2 border rounded"
          />
        </div>
      ))}

      <div className="space-x-4">
        <button
          onClick={addOutcome}
          disabled={maxReached}
          className={`px-4 py-2 text-blue-800 rounded transition ${
            maxReached
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-blue-100 hover:bg-blue-200"
          }`}
        >
          ➕ Another Outcome
        </button>

        <button
          onClick={submit}
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          {loading ? "Creating..." : "✅ Create"}
        </button>
      </div>

      {message && (
        <p className="text-sm text-center text-red-500 mt-2">{message}</p>
      )}

      {maxReached && (
        <p className="text-sm text-red-500">Outcome limit reached.</p>
      )}
    </div>
  );
}
