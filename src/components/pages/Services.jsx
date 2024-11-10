import Baner from "../Baner";
import OurServices from "../OurServices";


function Services() {
  const banersData = [
    {
      head: "What we can offer your SaaS Business",
      body: "We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns.",
      email: false,
    },
    {
      head: "Interested to work with us ?",
      body: "Send a line here get and update daily",
      email: true,
    },
  ];

  return (
    <div>
      <Baner
        head={banersData[0].head}
        body={banersData[0].body}
        email={banersData[0].email}
      />
      <OurServices />
      <Baner
        head={banersData[1].head}
        body={banersData[1].body}
        email={banersData[1].email}
      />
    </div>
  );
}

export default Services;
