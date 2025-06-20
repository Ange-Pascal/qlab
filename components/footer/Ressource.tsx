import Link from "next/link";
import React from "react";

type MetierItems = {
  id: number;
  label: string;
  href: string;
};

const metiers: MetierItems[] = [
  { id: 1, label: "Articles de Blog", href: "" },
  { id: 2, label: "Librairie de Formation", href: "" },
  { id: 3, label: "Nouvelles", href: "" },
];

function Ressource() {
  return (
    <div>
      <h1 className="font-bold mb-2">Ressources</h1> 
      {metiers.map((metier) =>{
        return <ul key={metier.id}>
          <Link href={metier.href} className="hover:text-purple-600 text-sm text-gray-600 font-semibold">{metier.label}</Link>
        </ul>
      })}
    </div>
  );
}

export default Ressource;
