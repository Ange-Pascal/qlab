"use client";

export default function CourseFilters({ filters, setFilters, layout, setLayout }: any) {
  const handleChange = (field: string, value: string) => {
    setFilters((prev: any) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="shadow p-6 rounded-xl space-y-4 md:col-span-1">
      <h2 className="text-lg font-semibold">Filtres</h2>
      <select onChange={(e) => handleChange("category", e.target.value)} className="w-full border rounded px-4 py-2">
        <option value="">Catégorie</option>
        <option value="Développement">Développement</option>
        <option value="Design">Design</option>
        <option value="Data">Data</option>
        <option value="Marketing">Marketing</option>
      </select>
      <select onChange={(e) => handleChange("price", e.target.value)} className="w-full border rounded px-4 py-2">
        <option value="">Prix</option>
        <option value="Gratuit">Gratuit</option>
        <option value="Payant">Payant</option>
      </select>
      <select onChange={(e) => handleChange("training_space", e.target.value)} className="w-full border rounded px-4 py-2">
        <option value="">Mode</option>
        <option value="En ligne">En ligne</option>
        <option value="Présentiel">Présentiel</option>
      </select>
      <select onChange={(e) => handleChange("language", e.target.value)} className="w-full border rounded px-4 py-2">
        <option value="">Langue</option>
        <option value="Français">Français</option>
        <option value="Anglais">Anglais</option>
      </select>
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => handleChange("search", e.target.value)}
        className="w-full border rounded px-4 py-2"
      />
      <div className="flex space-x-2">
        <button
          onClick={() => setLayout("grid")}
          className={`px-4 py-2 rounded border ${layout === "grid" ? "bg-violet-600 text-white" : "bg-yellow-600"}`}
        >
          Grille
        </button>
        <button
          onClick={() => setLayout("list")}
          className={`px-4 py-2 rounded border ${layout === "list" ? "bg-violet-600 text-white" : "bg-yellow-600"}`}
        >
          Liste
        </button>
      </div>
    </div>
  );
}
