import { Button } from "@/components/ui/button";
import { FaGraduationCap} from "react-icons/fa"; 
import { FaPeopleGroup } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { MdRotate90DegreesCw } from "react-icons/md";





import Link from "next/link";
function Banner() {
  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-5 grid-cols-1 py-20 px-5 mt-5">
      <div className="md:px-10 ">
        <h1 className="xl:text-7xl font-bold text-xl">
          Encourager l'excellence en Tech
        </h1>
        <p className="mb-5">
          Notre laboratoire de formation offre un environnement d’apprentissage
          immersif et innovant, combinant expertise, technologies de pointe et
          pratique intensive pour assurer l’excellence en Tech.
        </p>
        <Link href="/formation">
          <Button>Explorer</Button>
        </Link>
      </div>
      <div className="xl:w-2/3 w-full md:ml-5 md:w-full  ">
        <FaGraduationCap size={200} className="text-5xl text-yellow-600" /> 
        <span className="grid grid-cols-3 gap-4">
        <FaPeopleGroup size={100} /> 
        <FaLayerGroup size={100}/>
        <MdRotate90DegreesCw size={100} />
        </span>
        <p>La connaissance est un pouvoir qui offre des opportunités, renforce l'autonomie et favorise l'innovation.</p>
      </div>
    </div>
  );
}

export default Banner;
