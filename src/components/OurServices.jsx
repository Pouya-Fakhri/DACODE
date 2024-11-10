import WordPress from "../assets/icons/WordPress.svg";
import webSite from "../assets/icons/webSite.svg";
import webDesign from "../assets/icons/webDesign.svg";
import magnifyingGlass from "../assets/icons/magnifyingGlass.svg";
import layers from "../assets/icons/layers.svg";
import startup from "../assets/icons/startup.svg";
import round from "../assets/icons/round.svg";
import ServicesCard from "./ServicesCard";

function OurServices() {
  const cardData = [
    {
      header: "WordPress Site",
      body: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
      icon: webSite,
    },
    {
      header: "WordPress Plugin",
      body: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
      icon: WordPress,
    },
    {
      header: "Website Redesign",
      body: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
      icon: webDesign,
    },
    {
      header: "WordPress Site Optimization",
      body: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
      icon: magnifyingGlass,
    },
    {
      header: "Search Engine Optimization",
      body: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
      icon: startup,
    },
    {
      header: "Cross Platform Mobile App",
      body: "Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ",
      icon: layers,
    },
  ];

  return (
    <div className="bg-[#E9FBF8] flex flex-col items-center py-[120px]">
      <h2 className="font-titre font-bold text-[48px] text-[#292525] ">
        Our Services
      </h2>
      <p className="font-dm font-medium text-[16px] text-black ">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et.
      </p>
      <div className="cardContainer mt-[50px] flex justify-center gap-[30px] flex-wrap relative z-20">
        {cardData.map((item) => (
          <ServicesCard title={item.header} body={item.body} icon={item.icon} />
        ))}
        <div className=" absolute w-[300px] -z-0 bottom-[-10%] right-10">
          <img src={round} alt="" />
        </div>
      </div>
    </div>
  );
}

export default OurServices;
