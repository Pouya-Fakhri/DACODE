

function GreatWorkCoard({image ,text}) {
  return (
    <div className=" flex flex-col gap-[30px]" >
      <img src={image} alt="" className="w-[350px] rounded-[16px]" />
      <p className="font-dm font-medium text-[18px]" >
        {text}
      </p>
    </div>
  );
}

export default GreatWorkCoard;
