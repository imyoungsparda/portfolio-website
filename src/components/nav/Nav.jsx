import { useState } from "react";

import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

import "./nav.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  function handleClickNav(id) {
    setActiveNav(id);
  }
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => handleClickNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => handleClickNav("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skill"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => handleClickNav("#experience")}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => handleClickNav("#services")}
      >
        <BsFillBagHeartFill />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => handleClickNav("#contact")}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
}

export default Nav;
