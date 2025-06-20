import Link from "next/link";
import React from "react";

type MetierItems = {
  id: number;
  label: string;
  href: string;
};

const metiers: MetierItems[] = [
  { id: 1, label: "Développeur Full-Stack", href: "" },
  { id: 2, label: "Développeur Back-End", href: "" },
  { id: 3, label: "Développeur IA", href: "" },
  { id: 4, label: "Ingénieur DevOps", href: "" },
  { id: 5, label: "Ingénieur Système", href: "" },
  { id: 6, label: "Data Ingénieur", href: "" },
  { id: 7, label: "Expert en Sécurité", href: "" },
];

function Metiers() {
  return (
    <div>
      <h1 className="font-bold mb-2">Metiers</h1> 
      {metiers.map((metier) =>{
        return <ul key={metier.id}>
          <Link href={metier.href} className="hover:text-purple-600 text-sm text-gray-600 font-semibold">{metier.label}</Link>
        </ul>
      })}
    </div>
  );
}

export default Metiers;
