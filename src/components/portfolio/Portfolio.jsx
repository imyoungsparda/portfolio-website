/* eslint-disable react/jsx-no-target-blank */
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
// import IMG5 from "../../assets/portfolio5.png";

import "./portfolio.css";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="portfolio-1" />
          </div>
          <h3>Pizza Ordering Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/imyoungsparda/order-pizza"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://fast-order-pizza.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="portfolio-2" />
          </div>
          <h3>University Website</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/imyoungsparda/Eduford-University-Sample-Website"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://imyoungsparda.github.io/Eduford-University-Sample-Website/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="portfolio-3" />
          </div>
          <h3>treatPopcorn-Movie Search App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/imyoungsparda/treatPopcorn"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://treat-popcorn.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="portfolio-4" />
          </div>
          <h3>Bank Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/imyoungsparda/bank-application"
              className="btn"
              target="_blank"
            >
              Source Code
            </a>
            <a
              href="https://netbanking-app.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="portfolio-5" />
          </div>
          <h3>This is Portfolio Item Title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target="_blank">
              Source Code
            </a>
            <a
              href="https://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
}

export default Portfolio;
