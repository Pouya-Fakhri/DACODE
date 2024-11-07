
function Baner({ head ,  body , email}) {
    return (
        <div className="w-screen h-[500px] bg-[#60E1CB] flex flex-col justify-center items-center" >
            <h2 className="font-titre font-bold text-[48px]" >{head}</h2>
            <p className="font-dm font-medium text-[24px] mt-[27px] text-center w-2/3" >{body}</p>
            <button className={` ${email ? "flex" : "hidden"} justify-center items-center font-dm font-semibold text-[22px] text-white w-[410px] h-[85px] bg-[#292525] mt-[60px] rounded-full`}>DaCode@example.com</button>
        </div>
    )
}
export default Baner