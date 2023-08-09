import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/theayushraj/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/imyoungsparda" target="_blank">
        <BiLogoGithub />
      </a>
      <a href="https://twitter.com/imyoungSparda" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
