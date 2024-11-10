import Baner from "../Baner";
import CaseCard from "../CaseCard";

function Case() {
  const banersData = [
    {
      head: "Some of our SaaS clients",
      body: "We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients.",
      email: false,
    },
    {
      head: "Interested to work with us ?",
      body: "Send a line here get and update daily",
      email: true,
    },
  ];
  const caseData = [
    {
      head: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      body: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
    {
      head: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      body: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
    {
      head: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      body: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
    {
      head: "Lunar Strategy SaaS Marketing Agency - Rebranding of website",
      body: "We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.",
    },
  ];

  return (
    <div>
      <Baner
        head={banersData[0].head}
        body={banersData[0].body}
        email={banersData[0].email}
      />
      <div className="flex flex-col items-center gap-[130px] my-[130px]">
        {caseData.map((items) => (
          <CaseCard head={items.head} body={items.body} />
        ))}
      </div>
    </div>
  );
}

export default Case;
