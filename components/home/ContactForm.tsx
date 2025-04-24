// app/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function ContactForm() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    espace: "",
    niveau: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simuler envoi, ex: fetch('/api/contact', { ... })
    console.log("Formulaire soumis :", form);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center rounded-2xl shadow-lg overflow-hidden max-w-7xl mx-auto mt-20">
      {/* Formulaire à gauche */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-6">
          Contactez-nous
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              className="w-1/2 border rounded-lg px-4 py-2"
              value={form.nom}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              className="w-1/2 border rounded-lg px-4 py-2"
              value={form.prenom}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            name="espace"
            className="w-full border rounded-lg px-4 py-2"
            value={form.espace}
            onChange={handleChange}
            required
          >
            <option value="">Lieu de formation</option>
            <option value="Développement Web">En Présentiel</option>
            <option value="Design UI/UX">En ligne</option>
            <option value="Marketing Digital">Ligne + Présentiel</option>
          </select>

          <select
            name="niveau"
            className="w-full border rounded-lg px-4 py-2"
            value={form.niveau}
            onChange={handleChange}
            required
          >
            <option value="">Niveau actuel</option>
            <option value="Débutant">Débutant</option>
            <option value="Intermédiaire">Intermédiaire</option>
            <option value="Avancé">Avancé</option>
          </select>

          <textarea
            name="message"
            placeholder="Autres informations ou besoins spécifiques"
            className="w-full border rounded-lg px-4 py-2 min-h-[120px]"
            value={form.message}
            onChange={handleChange}
          />

          {/* <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Envoyer
          </button>  */}
          <Button type="submit">Envoyer </Button>
        </form>
      </div>

    </div>
  );
}
