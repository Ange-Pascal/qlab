import { JSX } from "react";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook, FaLinkedin} from "react-icons/fa";

type IconList = {
  id: number;
  icon: JSX.Element;
  titre: string;
  href: string
};

const icons: IconList[] = [
  {
    id: 1,
    icon: <FaFacebook />,
    titre: "Facebook",
    href: ""
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    titre: "Linkedin", 
    href: ""
  },
  {
    id: 3,
    icon: <AiFillYoutube />,
    titre: "Youtube",
    href: ""
  },
  {
    id: 4,
    icon: <AiFillTikTok />    ,
    titre: "TikTok",
    href: ""
  },
];

export default icons;
