import React from "react";
import { Button } from "../ui/button";
import { IoMdArrowRoundForward } from "react-icons/io";
import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/web-job.png",
    alt: " Développeur Full-Stack",
    title: "Développement Full-Stack",
  },
  {
    id: 2,
    src: "/images/mobile-job.png",
    alt: "Développemeur Mobile",
    title: "Développement Mobile",
  },
  {
    id: 3,
    src: "/images/devops-job.png",
    alt: "Ingénieur DevOps",
    title: "Ingénieur DevOps",
  },
  {
    id: 4,
    src: "/images/ia-job.png",
    alt: "Développeur IA ",
    title: "Développeur IA",
  },
  {
    id: 5,
    src: "/images/security-job.png",
    alt: "Expert en Sécurité",
    title: "Expert en Sécurité",
  },
];

function Empower() {
  return (
    <section className="grid grid-cols-1 gap-5 xl:mx-20 md:mx-16 py-5">
      <div className="mt-5 xl:mt-10">
        <p>Le triomphe de demain commence aujourd'hui.</p>
        <h1 className="xl:text-7xl md:text-7xl text-xl  font-bold shadow-sm text-gray-600 ">
          Donnez-vous les moyens de réussir avec Qlab
        </h1>
      </div>
      <div className=" xl:mt-5 grid grid-cols-5 gap-6">
        {images.map((image) => {
          return ( 
            <div key={image.id} className="py-2 flex flex-col items-center justify-center">
              <Image src={image.src} alt={image.alt} width={60} height={70} objectFit="cover"/>
              <p className="mt-10 text-gray-600 text-center hidden lg:block xl:block md:block">{image.title}</p>
            </div>
          );
        })}
      </div>
      <div className="">
        <Button className="mt-5 xl:w-1/3 md:w-1/3">
          Commence ton apprentissage
          <span>
            <IoMdArrowRoundForward className="text-yellow-600" />
          </span>
        </Button>
      </div>
    </section>
  );
}

export default Empower;
