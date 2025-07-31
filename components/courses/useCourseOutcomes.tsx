import { useState } from "react";
import api from "@/utils/api";

type Outcome = { title: string; description: string };

export function useCourseOutcomes(slug: string, max = 5) {
  const [outcomes, setOutcomes] = useState<Outcome[]>([
    { title: "", description: "" },
  ]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (index: number, field: keyof Outcome, value: string) => {
    const updated = [...outcomes];
    updated[index][field] = value;
    setOutcomes(updated);
  };

  const addOutcome = () => {
    if (outcomes.length >= max) return;
    setOutcomes([...outcomes, { title: "", description: "" }]);
  };

  const submit = async () => {
    setLoading(true);
    setMessage("");

    try {
      await api.get("/sanctum/csrf-cookie"); // pour Sanctum
      await api.post(`/api/courses/${slug}/outcomes`, { outcomes });

      setMessage("✅ Outcomes ajoutés avec succès !");
      setOutcomes([{ title: "", description: "" }]);
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
    outcomes,
    loading,
    message,
    handleChange,
    addOutcome,
    submit,
    maxReached: outcomes.length >= max,
  };
}
