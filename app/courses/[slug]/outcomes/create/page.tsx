"use client";

import { useState } from "react";

export default function CourseOutcomesForm() {
  const [outcomes, setOutcomes] = useState([
    { title: "", description: "" }
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...outcomes];
    updated[index][field] = value;
    setOutcomes(updated);
  };

  const addOutcome = () => {
    setOutcomes([...outcomes, { title: "", description: "" }]);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6  shadow rounded">
      <h2 className="text-xl font-bold text-gray-800">Ajouter des Outcomes</h2>

      {outcomes.map((outcome, index) => (
        <div
          key={index}
          className="space-y-4 p-4 border rounded bg-gray-50 transition-all duration-300 ease-in-out"
        >
          <div className="text-gray-700 font-medium">Outcome #{index + 1}</div>

          <input
            type="text"
            placeholder="Titre"
            value={outcome.title}
            onChange={(e) => handleChange(index, "title", e.target.value)}
            className="w-full p-2 border rounded"
          />

          <textarea
            placeholder="Description"
            value={outcome.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}

      <button
        onClick={addOutcome}
        className="px-4 py-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition"
      >
        ➕ Ajouter un outcome
      </button>
    </div>
  );
}
