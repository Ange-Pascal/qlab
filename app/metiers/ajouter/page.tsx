"use client"

import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function AddMetier() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    metier_image: null,
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as calling an API
    console.log("Submitted:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6  shadow-xl rounded-2xl">
      <div className="flex items-center mb-6">
        <PlusCircle className="w-6 h-6 text-blue-600 mr-2" />
        <h1 className="text-2xl font-bold ">Ajouter un métier</h1>
      </div>
      <p className=" mb-8">
        Remplissez les informations ci-dessous pour ajouter un nouveau métier à la plateforme.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium ">Titre</label>
          <Input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: Développeur Web"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrivez ce métier en quelques lignes..."
            rows={4}
          />
        </div>

        <div>
          <label className=" text-sm font-medium ">Image du metier</label>
          <Input
            type="file" 
            name="metier_image"
            accept="image/*"
            onChange={handleChange} 
          />
        </div>

        <div>
          <label className="block text-sm font-medium ">Montant (en FCFA)</label>
          <Input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Ex: 250 000"
            min="0"
          />
        </div>

        <Button type="submit" className="w-full">
          Enregistrer le métier
        </Button>
      </form>
    </div>
  );
}