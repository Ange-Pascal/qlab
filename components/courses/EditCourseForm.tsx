"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import api from "@/utils/api";
import { toast } from "react-toastify";

type Props = {
  slug: string;
  initialData: {
    title: string;
    description: string;
    category: string;
    training_space: string;
    language: string;
    duration: string;
    price: string;
  };
};

export default function EditCourseForm({ slug, initialData }: Props) {
  const router = useRouter();

  const [formData, setFormData] = useState(initialData);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    if (imageFile) {
      form.append("course_image", imageFile);
    }

    try {
      await api.post(`/api/courses/${slug}?_method=PUT`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess("Cours mis à jour avec succès !");
      toast.info("Cours mis à jour avec succès !");
    } catch (err: any) {
      console.log("Erreur update :", err);
      setError(err?.response?.data?.error || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-xl shadow space-y-6">
      <h2 className="text-2xl font-bold text-violet-700">Modifier le cours</h2>
      {success && <p className="text-green-600 font-semibold">{success}</p>}
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* même HTML que dans ton code actuel */}

        <input
          type="text"
          name="title"
          placeholder="Titre du cours"
          value={formData.title}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded"
          rows={4}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          >
            <option value="Développement">Développement</option>
            <option value="Design">Design</option>
            <option value="Data">Data</option>
            <option value="IA">IA</option>
            <option value="Marketing">Marketing</option>
            <option value="Architecture">Architecture</option>
            <option value="Innovation">Innovation</option>
            <option value="Sécurité">Sécurité</option>
            <option value="Gestion Projet">Gestion Projet</option>
          </select>

          <select
            name="training_space"
            value={formData.training_space}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          >
            <option value="Présentiel">Présentiel</option>
            <option value="En ligne">En ligne</option>
            <option value="Hybride">Hybride</option>
          </select>

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          >
            <option value="Français">Français</option>
            <option value="Anglais">Anglais</option>
          </select>

          <input
            type="number"
            name="duration"
            placeholder="Durée (heures)"
            value={formData.duration}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            type="number"
            step="0.01"
            name="price"
            placeholder="Prix (FCFA)"
            value={formData.price}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Image du cours (laisser vide si inchangée)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full border px-4 py-2 rounded"
          />
        </div>

        <Button
          type="submit"
          className="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-800"
          disabled={loading}
        >
          {loading ? "Course Updated..." : "Update Course"}
        </Button>
      </form>
    </div>
  );
}
