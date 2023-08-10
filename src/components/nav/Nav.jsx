/* eslint-disable jsx-a11y/anchor-is-valid */
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
    <nav className="wrapper">
      <div className="icon home">
        <div className="tooltip">Home</div>
        <span className={activeNav === "#" ? "active" : ""}>
          <a
            href="#"
            className={activeNav === "#" ? "active" : ""}
            onClick={() => handleClickNav("#")}
          >
            <AiOutlineHome />
          </a>
        </span>
      </div>

      <div className="icon about">
        <div className="tooltip">About</div>
        <span className={activeNav === "#about" ? "active" : ""}>
          <a
            href="#about"
            className={activeNav === "#about" ? "active" : ""}
            onClick={() => handleClickNav("#about")}
          >
            <AiOutlineUser />
          </a>
        </span>
      </div>

      <div className="icon skill">
        <div className="tooltip">Skills</div>
        <span className={activeNav === "#skill" ? "active" : ""}>
          <a
            href="#skill"
            className={activeNav === "#skill" ? "active" : ""}
            onClick={() => handleClickNav("#skill")}
          >
            <AiOutlineBook />
          </a>
        </span>
      </div>

      <div className="icon portfolio">
        <div className="tooltip">Portfolio</div>

        <span className={activeNav === "#portfolio" ? "active" : ""}>
          <a
            href="#portfolio"
            className={activeNav === "#portfolio" ? "active" : ""}
            onClick={() => handleClickNav("#portfolio")}
          >
            <BsFillBagHeartFill />
          </a>
        </span>
      </div>

      <div className="icon contact">
        <div className="tooltip">Contact</div>
        <span className={activeNav === "#contact" ? "active" : ""}>
          <a
            href="#contact"
            className={activeNav === "#contact" ? "active" : ""}
            onClick={() => handleClickNav("#contact")}
          >
            <BiMessageDetail />
          </a>
        </span>
      </div>
    </nav>
  );
}

export default Nav;
