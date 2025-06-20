import Link from "next/link";
import React from "react";

type MetierItems = {
  id: number;
  label: string;
  href: string;
};

const metiers: MetierItems[] = [
  { id: 1, label: "Joindre la communauté", href: "" },
  { id: 2, label: "Dévenir Formateur", href: "" },
  { id: 3, label: "Ambassadeurs", href: "" },
  { id: 4, label: "Monde Académique", href: "" },
  { id: 5, label: "Affiliés", href: "" },
];

function Communaute() {
  return (
    <div>
      <h1 className="font-bold mb-2">Communauté</h1> 
      {metiers.map((metier) =>{
        return <ul key={metier.id}>
          <Link href={metier.href} className="hover:text-purple-600 text-sm text-gray-600 font-semibold">{metier.label}</Link>
        </ul>
      })}
    </div>
  );
}

export default Communaute;
