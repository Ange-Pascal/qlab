import React from "react";
import { Button } from "@/components/ui/button";
import icons from "@/utils/icon";
// import { Button } from "../ui/button";
// import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import TeamTraining from "./TeamTraining";

function PartnerLearn() {
  return (
    <div className="bg-black py-12 px-6 md:px-12 rounded-2xl shadow-lg text-center max-w-4xl mx-auto mt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Qlab excelle dans l'art de vous aider à mieux apprendre
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Découvrez des formations interactives, pratiques et conçues pour vous
        faire progresser rapidement, quel que soit votre niveau.
      </p>
      {/* <Link href="/formation">
        <Button>Nos formations</Button>
      </Link>  */}
      <TeamTraining/>
    </div>
  );
}

export default PartnerLearn;
