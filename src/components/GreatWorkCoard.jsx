

function GreatWorkCoard({image ,text}) {
  return (
    <div className=" flex flex-col gap-[30px]" >
      <img src={image} alt="" className="w-full rounded-[16px]" />
      <p className="font-dm font-medium text-[18px] text-justify" >
        {text}
      </p>
    </div>
  );
}

export default GreatWorkCoard;
