import Avantage from "@/components/home/Avantage";
import Banner from "@/components/home/Banner";
import Empower from "@/components/home/empower";
import HorizontalCourseList from "@/components/home/HorizontalCoursList";
import InfoBanner from "@/components/home/Info";
import PartnerLearn from "@/components/home/Partner";
import SectionInfo from "@/components/home/SectionInfo";
const courses = [
  { id: 1, title: 'React.js Avancé', imageUrl: '/images/react.jpg' },
  { id: 2, title: 'Next.js & SSR', imageUrl: '/images/next.jpg' },
  { id: 3, title: 'Laravel & API', imageUrl: '/images/laravel.jpg' },
  { id: 4, title: 'UI Design Figma', imageUrl: '/images/figma.jpg' },
  { id: 5, title: 'Tailwind CSS', imageUrl: '/images/tailwind.jpg' },
];
function Home() {
  return (
    <>
      <Banner />
      <InfoBanner /> 
      <SectionInfo/> 
      <HorizontalCourseList courses={courses}/>
      {/* <Avantage/>  */}
      <PartnerLearn/>
      <Empower/>
    </>
  );
}

export default Home;
