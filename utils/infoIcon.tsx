import { JSX } from "react";
import { AiFillEnvironment } from "react-icons/ai"; 
import { BsBrowserChrome } from "react-icons/bs";
import { MdOutlineRowing, MdOutlineFollowTheSigns } from "react-icons/md";



type IconList = {
  id: number;
  icon: JSX.Element;
  titre: string;
};

const icons: IconList[] = [
  {
    id: 1,
    icon: <AiFillEnvironment />,
    titre: "Environnement Physique",
  },
  {
    id: 2,
    icon: <BsBrowserChrome />,
    titre: "Environnement Virtuelle",
  },
  {
    id: 3,
    icon: <MdOutlineRowing />,
    titre: "Challenge",
  },
  {
    id: 4,
    icon: <MdOutlineFollowTheSigns />    ,
    titre: "Suivis",
  },
];

export default icons;
