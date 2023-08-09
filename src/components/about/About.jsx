import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import ME from "../../assets/me-about.png";
import "./about.css";

function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="user-pic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>20+ frontend Projects</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Open Source</h5>
              <small>
                60+ Commits, 21+ PR, 15+ Issues, Hacktoberfest Winner
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Collaboration</h5>
              <small>3+ Real projects</small>
            </article>
          </div>
          <p>
            Passionate and driven frontend developer with a strong foundation in
            HTML, CSS, and JavaScript and their libraries. Eager to transform
            creative designs into engaging user experiences. A quick learner who
            thrives in collaborative environments, I'm excited to contribute
            fresh ideas and bring them to life through clean and responsive web
            interfaces. With a keen eye for detail and a commitment to staying
            updated with the latest industry trends, I'm dedicated to creating
            visually appealing and user-friendly websites that leave a lasting
            impression.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
