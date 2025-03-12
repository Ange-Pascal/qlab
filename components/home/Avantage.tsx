import React from "react";
import avantageImg1 from "@/images/avantage1.jpg";
import Image from "next/image";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import items from "@/utils/learnItem";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoMdArrowRoundForward } from "react-icons/io"; 
import { FaLaptopFile } from "react-icons/fa6";


function Avantage() {
  return (
    <section className="grid grid-cols-1 xl:mx-20 md:mx-16 gap-5">
      <h1 className="xl:text-7xl md:text-7xl text-xl text-center font-bold m-10">
        Qavaa Innovate Lab avantage
      </h1>
      <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-1">
        <div className="relative border rounded-2xl p-10 w-full  h-screen">
          <Image
            src={avantageImg1}
            alt="avantage image 1"
            layout="fill"
            objectFit="cover"
            className="z-[-1] rounded-2xl opacity-5"
          />
          <div className="relative z-10 flex items-center justify-center h-full flex-col">
            <MdOutlineTipsAndUpdates size={250} className="text-yellow-600" />
            <h1 className="font-bold xl:text-3xl mb-10">
              Nous nous efforçons d'être toujours à jour
            </h1>
            <p>
              Nous assurons une mise à jour continue de nos connaissances et
              technologies afin de suivre les dernières avancées du secteur.
              Cette approche nous permet de proposer des solutions innovantes et
              adaptées aux évolutions du marché.
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-bold mb-5 text-purple-600 text-xl md:text-3xl xl:text-3xl">
            Les cours de Qavaa Innovate sont conçus pour être accessibles,
            faciles à comprendre et simples à mettre en œuvre.
          </h1>
          <p className="mt-5">
            Avec Qlab, vous apprenez par la pratique, dans un environnement
            contrôlé qui simule des scénarios réels sans aucun risque ni
            conséquence.
          </p>
          <p className="mt-5">
            Que vous cherchiez des conseils, partagiez des connaissances ou ayez
            besoin d'une aide rapide pour un problème complexe, notre communauté
            est là pour vous soutenir.
          </p>
          <p className="mt-5">
            {items.map((item) => {
              return (
                <li key={item.id} className="flex flex-row mr-2">
                  <span className="flex gap-2 mb-2 ">
                    <IoCheckmarkDoneCircleSharp
                      className="text-yellow-600"
                      size={25}
                    />
                    <span className="text-gray-600"> {item.title}</span>
                  </span>
                </li>
              );
            })}
          </p>
        </div>
      </div>

      <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-1 xl:mt-20 md:mt-20">
        <div className=" justify-center items-center mt-20">
          <p className="mt-5">
            Nos parcours guidés sont conçus pour simplifier votre apprentissage
            des complexités du développement logiciel. En proposant une feuille
            de route structurée et une orientation experte, nous visons à rendre
            votre expérience d'apprentissage plus fluide et efficace
          </p>
          <p className="mt-5">
            Avec nos parcours d'apprentissage guidés, vous ne faites pas que
            découvrir les concepts et fonctionnalités de la programmation ; vous
            développez les compétences dont vous avez besoin pour vos projets
            dès maintenant.
          </p>
          <Button className="mt-5">
            Commencer
            <span>
              <IoMdArrowRoundForward className="text-yellow-600" />
            </span>
          </Button>
        </div>
        <div className="relative border rounded-2xl p-10 w-full  h-screen">
          <Image
            src={avantageImg1}
            alt="avantage image 1"
            layout="fill"
            objectFit="cover"
            className="z-[-1] rounded-2xl opacity-5"
          />
          <div className="relative z-10 flex items-center justify-center h-full flex-col">
            <FaLaptopFile size={250} className="text-yellow-600" />
            <h1 className="font-bold xl:text-3xl mb-10">
              Embarquez pour un parcours guidé avec les chemins d'apprentissage
              de Qlab.
            </h1>
            <p>
              Maîtrisez les compétences technologiques essentielles en
              développement d'application web, mobile, en DevOps, Kubernetes,
              Docker et CI/CD, sécurité informatique grâce à un apprentissage
              pratique et en temps réel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avantage;
