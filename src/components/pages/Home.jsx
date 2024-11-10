import heroImag from "../../assets/images/heroImage.png";
import ideaImage from "../../assets/images/ideaImage.png";
import cardImage1 from "../../assets/images/cardimage1.jpg";
import cardImage2 from "../../assets/images/cardimage2.jpg";
import cardImage3 from "../../assets/images/cardimage3.jpg";
import round from "../../assets/icons/round.svg";
import GreatWorkCoard from "../GreatWorkCoard";
import Baner from "../Baner";
import OurServices from "../OurServices";

function Home() {
  const greateWork = [
    {
      image: cardImage1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      image: cardImage2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
    {
      image: cardImage3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum ",
    },
  ];
  const banerData = {
    head: "Interested to work with us ?",
    body: "Send a line here get and update daily",
    email: true,
  };

  return (
    <div className=" w-full overflow-x-hidden ">
      <div className="hero  flex items-center pl-40  mt-[50px] relative overflow-hidden">
        <div className="textContainer w-1/2  flex flex-col gap-[20px]">
          <h1 className="font-titre font-black text-[58px] text-[#292525] leading-[112%] ">
            We help you create your{" "}
            <span className="text-[#60E1CB]">website</span>
          </h1>
          <p className="font-dm font-normal text-[20px] leading-[157%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut
            turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit
            quis leo non. At donec egestas cras in libero pellentesque. Donec
            amet phasellus
          </p>
          <div className="btnContainer flex gap-3 font-titre font-bold text-[20px]">
            <button className="w-[188px] h-[68px] bg-[#60E1CB] rounded-full  text-white">
              Get Started
            </button>

            <button className="w-[188px] h-[68px] border border-[#07003B]/20 rounded-full  text-[#60E1CB]">
              Contact Us
            </button>
          </div>
        </div>
        <div className="imageContainer w-1/2">
          <img src={heroImag} alt="" />
        </div>
        <div className="svgContainer z-0 absolute top-[50%] left-[-5%]">
          <img src={round} alt="" />
        </div>
      </div>
      <div className="ServicesContainer   ">
        <OurServices />
      </div>
      <div className="greatWork gap-[80px] relative py-[130px] px-[150px] flex flex-col justify-evenly items-center">
        <h2 className="font-titre font-bold text-[48px] text-[#292525]">
          Our Great Work
        </h2>
        <div className="cardContainer flex gap-[36px]">
          {greateWork.map((items) => (
            <GreatWorkCoard image={items.image} text={items.text} />
          ))}
        </div>
        <div className="bg-[#60E1CB] w-full h-[46%] absolute -z-10 bottom-0"></div>
      </div>
      <div className="idea w-full py-[200px] pl-40 relative overflow-hidden">
        <div className="textContainer overflow-x-hidden">
          <h2 className="font-titre font-bold text-[48px] text-[#292525]">
            Your idea into <span className="text-[#60E1CB]">reality</span>
          </h2>
          <p className="font-dm font-medium text-[20px] w-2/3">
            We start every web development project with a project manager from
            daCode interviewing you about the goal with the project. This is for
            us to be able to come up with a solution for your SaaS business,
            estimate a timeline, and come up with a budget.
          </p>
          <div className="stepsContainer mt-[50px] flex flex-col gap-7">
            <div className="step">
              <h3 className="font-titre font-bold text-[24px] text-[#60E1CB]">
                Your Idea
              </h3>
              <p className="font-dm font-medium text-[16px] w-1/2">
                In order for us at daCode to know that we are a good fit for
                your project we always start with screening questions in order
                to make sure that we are a suitable match for your company.
              </p>
            </div>
            <div className="step">
              <h3 className="font-titre font-bold text-[24px] text-[#60E1CB]">
                Strategy meeting
              </h3>
              <p className="font-dm font-medium text-[16px] w-1/2">
                This meeting will be a meeting where we together go over our
                proposed strategy on how we can reach your website goals. Here
                we will establish a project update system where you will be able
                to follow the whole process from start to finish.
              </p>
            </div>
            <div className="step">
              <h3 className="font-titre font-bold text-[24px] text-[#60E1CB]">
                Agile and Scrum framework
              </h3>
              <p className="font-dm font-medium text-[16px] w-1/2">
                In this step we will have a team meeting with the project
                manager and the lead developer and designer. Then we will be
                working using and agile and scrum framework in order to make
                sure to deliver your project on time and within budget.
              </p>
            </div>
            <div className="step">
              <h3 className="font-titre font-bold text-[24px] text-[#60E1CB]">
                Your website goes live
              </h3>
              <p className="font-dm font-medium text-[16px] w-1/2">
                The final checks of the website will happen, we will make sure
                that all tracking pixels, links and user interface is compatible
                with all different devices. We will also perform a few different
                tests to make sure that the website is optimised for user
                experience.
              </p>
            </div>
          </div>
        </div >
        <img
          src={ideaImage}
          alt=""
          className=" absolute bottom-[-5%] right-[1%] w-[700px] "
        />
      </div>
      <Baner
        head={banerData.head}
        body={banerData.body}
        email={banerData.email}
      />
    </div>
  );
}

export default Home;
