// app/components/TeamTraining.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function TeamTraining() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-8 md:p-16 rounded-2xl shadow-lg max-w-6xl mx-auto mt-1">
      {/* Texte à gauche */}
      <div className="md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Se former avec une équipe entièrement dédiée à la formation
        </h3>
        <p className="text-gray-600 text-lg">
          Chez Qlab, notre équipe pédagogique vous accompagne à chaque étape
          pour garantir un apprentissage de qualité et personnalisé.
        </p>
      </div>

      {/* Image à droite */}
      <div className="md:w-1/2">
        <Image
          src="/images/learning.jpg" // à adapter selon ton chemin d’image
          alt="Équipe de formation"
          width={500}
          height={350}
          className="rounded-xl object-cover w-full"
        />
        <div className="flex justify-end mt-4">
          <Link
            href="/"
            className="text-sm font-medium text-yellow-600 hover:underline"
          >
            Voir plus →
          </Link>
        </div>
      </div>
    </div>
  );
}
