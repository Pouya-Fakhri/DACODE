import Baner from "./Baner";
import BlogCards from "./BlogCards";

function Blog() {
  const banerData = {
    head: "News & Articles",
    body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.",
    email: false,
  };
  const cardData = [
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
    {
      head: "Do millennials care about saving?",
      body: "Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.",
    },
  ];

  return (
    <div className="w-full" >
      <Baner
        head={banerData.head}
        body={banerData.body}
        email={banerData.email}
      />
      <div className="flex flex-wrap justify-center gap-5 my-[13px]">
        {cardData.map((items) => (
          <BlogCards head={items.head} body={items.body} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
