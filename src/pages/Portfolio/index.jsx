import "./style.scss";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
// Api
import { Portfolio_data } from "../../api/Portfolio";

// component animate
import Mtion from "../../components/Animated/Motion";

export const Portfolio = () => {
  return (
    <Mtion>
      <section id="section-portfolio">
        <h1>Portfolio</h1>
        <div className="content-portfolio">
          {Portfolio_data.map((idp) => (
            <div className="item-portfolio" key={idp.id}>
              <div className="img-portfolio">
                <img src={idp.pImg} alt={idp.pTitle} />
              </div>
              <div className="item-content">
                <h2>{idp.pTitle}</h2>
                <p>{idp.pLang}</p>
                <a href={idp.pLink} target="_blank" rel="noopener">
                  <FaGithub /> Github
                </a>
                <a href={idp.pPrev} target="_blank" rel="noopener">
                  <FaExternalLinkSquareAlt /> Live Preview
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Mtion>
  );
};
