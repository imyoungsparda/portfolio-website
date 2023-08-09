import "./header.css";

import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ayush Raj</h1>
        <div className="text-light">Frontend Developer</div>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="profile pic" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
