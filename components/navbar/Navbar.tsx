import Container from "../global/Container";
import DarkMode from "./DarkMode";
import { NavigationMenuDemo } from "./LinksDropdown";
// import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
// import NavSearch from "./NavSearch";
import SearchCourseModal from "./SearchModal";
import { SmMenu } from "./SmMenu"; 

const courses = [
  {
    id: 1,
    title: 'Développement Web avec Next.js',
    description: 'Maîtrisez SSR, API routes et plus avec Next.js 13+',
    imageUrl: '/images/next.jpg',
  },
  {
    id: 2,
    title: 'Design UI/UX moderne',
    description: 'Apprenez à créer des interfaces élégantes avec Figma',
    imageUrl: '/images/uiux.jpg',
  },
  {
    id: 3,
    title: 'Laravel & APIs REST',
    description: 'Construisez des backends solides avec Laravel 10',
    imageUrl: '/images/laravel.jpg',
  },
];

function Navbar() {
  return (
    <nav className="border-b fixed left-0 right-0 bg-white dark:bg-slate-950 z-50">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-5 ">
        <Logo /> 
        {/* Le probleme est ici mais je ferai un roolback sur git */}
        <span className="hidden xl:block md:block "><NavigationMenuDemo /></span> 
        
        <div className="flex gap-4 items-center"> 
          {/* <NavSearch /> */}
           <span className=""><SmMenu/></span>
          <DarkMode /> 
          <span><SearchCourseModal courses={courses}/></span>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
