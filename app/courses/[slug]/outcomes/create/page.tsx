"use client";

import { useState } from "react";
import api from "@/utils/api";
export default function CourseOutcomesForm() {
  const MAX_OUTCOMES = 5;
 
  const [outcomes, setOutcomes] = useState([{ title: "", description: "" }]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...outcomes];
    updated[index][field] = value;
    setOutcomes(updated);
  };

  const addOutcome = () => {
    if (outcomes.length >= MAX_OUTCOMES) return;
    setOutcomes([...outcomes, { title: "", description: "" }]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await api.post(`/api/courses/${slug}/outcomes`, {
        outcomes,
      });

      setMessage("✅ Outcomes ajoutés avec succès !");
      setOutcomes([{ title: "", description: "" }]); // reset form

    } catch (error: any) {
      const msg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Erreur lors de l’envoi.";
      setMessage(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

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
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}

      <div className="space-x-4">
        <button
          onClick={addOutcome}
          disabled={outcomes.length >= MAX_OUTCOMES}
          className={`px-4 py-2 text-blue-800 rounded transition
            ${outcomes.length >= MAX_OUTCOMES
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-blue-100 hover:bg-blue-200"}
          `}
        >
          ➕ Another Outcome
        </button>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          {loading ? "Envoi..." : "✅ Valider"}
        </button>
      </div>

      {message && (
        <p className="text-sm text-center text-red-500 mt-2">{message}</p>
      )}

      {outcomes.length >= MAX_OUTCOMES && (
        <p className="text-sm text-red-500">Outcome limit reached.</p>
      )}
    </div>
  );
}
