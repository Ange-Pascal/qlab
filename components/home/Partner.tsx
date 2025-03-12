import React from "react";
import icons from "@/utils/icon";
import { Button } from "../ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";

function PartnerLearn() {
  return (
    <section className="xl:mx-20 xl:mt-20 md:mt-16">
      <h1 className="xl:text-7xl md:text-7xl text-xl text-center font-bold xl:m-10 xl:py-10 py-5">
        Qlab excelle dans l'art de vous aider à mieux apprendre.
      </h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-3">
        <div className="">
          {icons.map((icon) => {
            return (
              <div key={icon.id} className="grid grid-cols-1">
                <div className="flex gap-5 mt-5">
                  <span className="text-3xl text-yellow-600">{icon.icon}</span>
                  <h1 className="font-bold"> {icon.titre}</h1>
                </div>
                <p className="text-gray-600">{icon.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className="font-bold mb-5 text-purple-600 text-xl md:text-3xl xl:text-3xl">
            Notre équipe d'instructeurs dévoués est composée d'experts de
            l'industrie ayant des années d'expérience dans le domaine du Front
            End, du Back End, du DevOps, de la sécurité, de l'IA...
          </h1>
          <p>
            Ils sont passionnés par le partage de leurs connaissances et
            veillent à ce que vous receviez une formation de la plus haute
            qualité. Grâce à leur accompagnement, vous acquerrez une
            compréhension approfondie des technologies les plus pertinentes et
            des meilleures pratiques
          </p>
          <Button className="mt-5">
            Commencer
            <span>
              <IoMdArrowRoundForward className="text-yellow-600" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PartnerLearn;
