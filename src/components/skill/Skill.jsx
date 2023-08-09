import { BsFillPatchCheckFill } from "react-icons/bs";

import "./skill.css";

function Skill() {
  return (
    <section id="skill">
      <h5>My</h5>
      <h2>Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
          <div className="skill__content">
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>ReactJS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>CSS</h4>
            </article>

            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>Git VCS</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>API</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>GitHub</h4>
            </article>
            <article className="skill__details">
              <BsFillPatchCheckFill className="skill__details-icon" />
              <h4>JQuery</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
