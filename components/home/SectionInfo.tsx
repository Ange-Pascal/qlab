import React from "react";
import icons from "@/utils/infoIcon";
// import reactImg from "@/images/react.jpg";
// import Image from "next/image";

function SectionInfo() {
  return (
    <section className="md:p-40">
      <h1 className="xl:text-7xl font-bold text-xl">
        Nous croyons fermement au pouvoir de l'apprentissage par l'expérience.
      </h1>
      <p className="md:mt-10 m-5">
        Notre plateforme propose un laboratoire pratique et des scénarios réels,
        vous permettant d'approfondir les applications concrètes des principes
        d'ingénierie informatique. Vous pourrez travailler sur des projets
        réels, mettre vos nouvelles compétences à l’épreuve et acquérir une
        expérience pertinente et spécialisée dans l'industrie.
      </p>
      <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-4 gap-2 m-5">
        {icons.map((icon) => {
          return (
            <li key={icon.id} className=" flex grid-cols-2 gap-3 ">
              <span className="text-yellow-600">{icon.icon}</span>
              <span className="text-gray-600">{icon.titre}</span>
            </li>
          );
        })}
      </div>
      
    </section>
  );
}

export default SectionInfo;
