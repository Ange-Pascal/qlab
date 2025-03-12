import Container from "../global/Container";
import DarkMode from "./DarkMode";
import { NavigationMenuDemo } from "./LinksDropdown";
// import LinksDropdown from "./LinksDropdown";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import { SmMenu } from "./SmMenu";

function Navbar() {
  return (
    <nav className="border-b fixed left-0 right-0 bg-white dark:bg-slate-950 z-50">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-5 ">
        <Logo />
        <span className="hidden xl:block md:block "><NavigationMenuDemo /></span>
        <div className="flex gap-4 items-center">
          <NavSearch />
          <DarkMode />
          <span className="xl:hidden md:hidden"><SmMenu/></span>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
