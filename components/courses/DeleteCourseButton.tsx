import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import api from "@/utils/api";
type DeleteCourseButtonProps = {
  slug: string;
};

export default function DeleteCourseButton({ slug }: DeleteCourseButtonProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await api.post(`/api/courses/${slug}?_method=DELETE`, null, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Cours supprimé avec succès !");
      router.push("/courses"); // Redirige après suppression
    } catch (error: any) {
      console.error("Erreur lors de la suppression :", error);
      toast.error(
        error?.response?.data?.error || "Une erreur est survenue lors de la suppression."
      );
    } finally {
      setLoading(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setShowConfirm(true)}
        className="text-red-600 hover:underline"
      >
        Supprimer
      </button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">
              Confirmer la suppression
            </h2>
            <p className="mb-6">
              Êtes-vous sûr de vouloir supprimer ce cours ? Cette action est
              irréversible.
            </p>
            <div className="flex justify-end gap-4">
              <button
                disabled={loading}
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                Annuler
              </button>
              <button
                disabled={loading}
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                {loading ? "Suppression..." : "Supprimer"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
