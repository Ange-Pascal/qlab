import Link from "next/link";
import React from "react";

type AideItems = {
  id: number;
  label: string;
  href: string;
};

const aides: AideItems[] = [
  { id: 1, label: "Nous contactez", href: "" },
  { id: 2, label: "Support", href: "" },
  { id: 3, label: "Feedback", href: "" },
];

function Aide() {
  return (
    <div>
      <h1 className="font-bold mb-2">Aide</h1> 
      {aides.map((aide) =>{
        return <ul key={aide.id}>
          <Link href={aide.href} className="hover:text-purple-600 text-sm text-gray-600 font-semibold">{aide.label}</Link>
        </ul>
      })}
    </div>
  );
}

export default Aide;
