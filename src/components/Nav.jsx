import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className=" flex justify-between items-center px-40 py-[40px]">
      <div className="logo text-[30px] font-dm font-bold">
        DACODE
      </div>
      <ul className="flex items-center gap-12 font-titre text-[18px] text-[#60E1CB] font-light ">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/Services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/Case"}>Case</NavLink>
        </li>
        <li>
          <NavLink to={"/DaCode"}>DaCode Spasialists</NavLink>
        </li>
        <li>
          <NavLink to={"/Blog"}>Blog</NavLink>
        </li>
        <button className="font-medium text-white bg-[#7BC0E3] w-[180px] h-[50px] rounded-full flex justify-center items-center">
          Request a quote
        </button>
      </ul>
    </nav>
  );
}
export default Nav;
