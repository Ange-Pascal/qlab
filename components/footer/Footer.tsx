import React from "react";
import Metiers from "./Metiers";
import Ressource from "./Ressource";
import Communaute from "./Communaute";
import Aide from "./Aide";
import Logo from "../navbar/Logo";
import icons from "@/utils/socialIcon";
import Link from "next/link";
function Footer() {
  return (
    <section className="grid grid-cols-1 gap-5 border-t">
      <div className="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-4 gap-5 xl:px-20 xl:py-5 mx-10 mt-5">
        <Metiers />
        <Ressource />
        <Communaute />
        <Aide />
      </div>
      <div className="flex flex-col xl:flex-row md:flex-row justify-between items-end xl:px-20 xl:mx-20 mb-10 mx-10 mt-5">
        <p className="font-bold">@2025 qlab.com || Tous droits réservés.</p>
        <div className="grid xl:grid-cols-1 md:grid-cols-1 gap-2 justify-center items-center">
          <Logo />
          <div className="grid grid-cols-4 gap-5 ">
            {icons.map((icon) => {
              return (
                <div key={icon.id} className="mt-2">
                  <Link href={icon.href} className="hover:text-purple-600 flex">{icon.icon}</Link>
                </div>
              );
            })}
          </div> 
        </div>
      </div>
    </section>
  );
}

export default Footer;
