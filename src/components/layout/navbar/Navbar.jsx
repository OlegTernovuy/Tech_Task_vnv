import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./navbar.scss";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header>
      <img src={logo} alt="logo_VNV" width={150} />
      <ul className="nav-ul">
        <Link to="advantages" spy={true} smooth={true} duration={800}>
          <li className="nav-li">Чому ми!</li>
        </Link>
        <Link to="services" spy={true} smooth={true} duration={800}>
          <li className="nav-li">Послуги</li>
        </Link>
        <Link to="portfolio" spy={true} smooth={true} duration={800}>
          <li className="nav-li">Портфоліо</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={800}>
          <li className="nav-li">Зв'яжіться з нами</li>
        </Link>
      </ul>
      <div className="phone-menu" onClick={handleNav}>
        <AiOutlineMenu size={20} />
      </div>
      <div className={nav ? "show-menu" : "hide-menu"}>
        <div className="close-button">
          <img src={logo} alt="logo_VNV" width={150} />
          <AiOutlineClose
            size={25}
            className="AiOutlineClose"
            onClick={handleNav}
          />
        </div>
        <ul className="phone-nav-ul">
          <Link to="advantages" spy={true} smooth={true} duration={800}>
            <li className="phone-nav-li" onClick={handleNav}>
              Чому ми!
            </li>
          </Link>
          <Link to="services" spy={true} smooth={true} duration={800}>
            <li className="phone-nav-li" onClick={handleNav}>
              Послуги
            </li>
          </Link>
          <Link to="portfolio" spy={true} smooth={true} duration={800}>
            <li className="phone-nav-li" onClick={handleNav}>
              Портфоліо
            </li>
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={800}>
            <li className="phone-nav-li" onClick={handleNav}>
              Зв'яжіться з нами
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
