import "./style.scss";

// api
import { Resume_Education, Resume_Experience } from "../../api/Resume_";

// component animate
import Mtion from "../../components/Animated/Motion";
import TypeText from "../../components/Animated/TypeAnimate";

export const Resumes = () => {
  return (
    <Mtion>
      <section id="section-resume">
        <h1>
          <TypeText content="Resume" content2="My Journey" />
        </h1>
        <div className="container-resume">
          <div className="left">
            <h2>Education</h2>
            <ul>
              {Resume_Education.map((ide) => (
                <li className="content" key={ide.id}>
                  <sup>{ide.reYear}</sup>
                  <p>
                    <span>{ide.reSchool}</span>
                    <span>{ide.reTopic}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="right">
            <h2>Experience</h2>
            <ul>
              {Resume_Experience.map((idf) => (
                <li className="content" key={idf.id}>
                  <sup>{idf.reYear}</sup>
                  <p>
                    <span>{idf.reTopic}</span>
                    <span>{idf.reSchool}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Mtion>
  );
};
