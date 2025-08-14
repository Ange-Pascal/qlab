import { useState } from "react";
import api from "@/utils/api";

type Highlight = { title: string; description: string };

export function useCourseHighlights(courseId: number, max = 5) {
  const [highlights, setHighlights] = useState<Highlight[]>([
    { title: "", description: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (index: number, field: keyof Highlight, value: string) => {
    const updated = [...highlights];
    updated[index][field] = value;
    setHighlights(updated);
  };

  const addHighlight = () => {
    if (highlights.length >= max) return;
    setHighlights([...highlights, { title: "", description: "" }]);
  };

  const submit = async () => {
    setLoading(true);
    setMessage("");

    try {
      await api.get("/sanctum/csrf-cookie"); // pour Sanctum
      await api.post(`/api/courses/${courseId}/outcomes`, { highlights });

      setMessage("✅ Outcomes ajoutés avec succès !");
      setHighlights([{ title: "", description: "" }]);
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

  return {
    highlights,
    loading,
    message,
    handleChange,
    addHighlight,
    submit,
    maxReached: highlights.length >= max,
  };
}
