function ServicesCard({ title, body, icon }) {
  return (
    <div className="ServicesCard flex flex-col justify-between py-[90px] px-[47px] relative z-10 bg-[#FDFDFF] w-[360px] h-[380px] rounded-[12px] border-t-8	 border-[#60E1CB] ">
      <div className="iconContainer">
        <img src={icon} alt="" />
      </div>
      <h3 className="font-titre font-bold text-[20px]">{title}</h3>
      <p className="font-dm font-medium text-[16px]">{body}</p>
    </div>
  );
}
export default ServicesCard;
