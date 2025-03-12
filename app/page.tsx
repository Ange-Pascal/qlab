import Avantage from "@/components/home/Avantage";
import Banner from "@/components/home/Banner";
import Empower from "@/components/home/empower";
import InfoBanner from "@/components/home/Info";
import PartnerLearn from "@/components/home/Partner";
import SectionInfo from "@/components/home/SectionInfo";

function Home() {
  return (
    <>
      <Banner />
      <InfoBanner /> 
      <SectionInfo/>
      <Avantage/> 
      <PartnerLearn/>
      <Empower/>
    </>
  );
}

export default Home;
