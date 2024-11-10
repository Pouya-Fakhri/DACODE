import cardImage2 from "../assets/images/cardimage2.jpg";


function BlogCards({head , body}) {
    
    return(
        <div className="w-[300px] h-[425px] rounded-[12px]  flex flex-col items-center gap-5 border border-[#60E1CB]" >
            <img src={cardImage2} alt="" className="" />
            <h2 className="font-titre font-bold text-[18px]" >{head}</h2>
            <p className="font-dm font-medium text-center text-[16px]" >{body}</p>
            <button className="w-[135px] h-[45px] bg-[#60E1CB] text-white font-dm font-bold text-[15px] rounded-full" >Read More</button>
        </div>
    )
}

export default BlogCards