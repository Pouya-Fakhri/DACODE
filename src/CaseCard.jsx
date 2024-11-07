
function CaseCard({head , body}) {
    

    return(
        <div className="w-[870px] h-[270px] flex flex-col justify-center items-center rounded-[12px] border-t-8	bg-[#FDFDFF] border border-[#60E1CB] p-[50px]" >
        <h2 className="font-titre font-bold text-[22px]" >{head}</h2>
            <p className="font-dm font-medium text-[18px] text-center text-[#292525]" >{body}</p>
        </div>
    )
}

export default CaseCard