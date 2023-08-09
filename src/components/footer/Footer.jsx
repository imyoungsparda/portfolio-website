import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        AYUSH RAJ
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="facebook">
          <AiOutlineFacebook />
        </a>
        <a href="facebook">
          <AiOutlineInstagram />
        </a>
        <a href="facebook">
          <AiOutlineTwitter />
        </a>
        <a href="facebook">
          <AiOutlineLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;2023 Ayush, copyrights resereved</small>
      </div>
    </footer>
  );
}

export default Footer;
