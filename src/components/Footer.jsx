function Footer() {
  return (
    <footer className=" px-40 py-[110px] flex bg-[#60E1CB]" >
      <div className="logoContainer">
        <h2 className="font-titre font-black text-[32px]" >Logo</h2>
        <p className="font-dm font-medium text-[16px] w-2/3" >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
      </div>
      <div className="listContaine font-titre font-medium text-[16px] text-[#292525] flex gap-[40px]">
        <ul>
            <li className="font-bold text-[19px]" >Work</li>
            <li>Blog</li>
            <li>How We Work</li>
            <li>Testimonials</li>
        </ul>
        <ul>
            <li className="font-bold text-[19px]" >Services</li>
            <li>Marketing Strategy</li>
            <li>Website Optimization</li>
            <li>Email Maerketing</li>
        </ul>
        <ul>
            <li className="font-bold text-[19px]" >Business Solution</li>
            <li>Partnership</li>
            <li>About Project</li>
            <li>Corporate</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
