import "./style.scss";
import { motion as mt } from "framer-motion";

// Api
import { SkillFrond, SkillOther } from "../../api/Skills_";

// component Animate
import Mtion from "../../components/Animated/Motion";
import TypeText from "../../components/Animated/TypeAnimate";

export const Skills = () => {
  return (
    <Mtion>
      <section id="section-skill">
        <div className="content-skill">
          <mt.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="left-skill"
          >
            <h2>
              <TypeText content="Other Skill" content2="My Expertise" />
            </h2>
            <ol>
              {SkillOther.map((idf, index) => (
                <li key={index}>{idf.other}</li>
              ))}
            </ol>
          </mt.div>
          <div className="right-skill">
            <h2>
              <TypeText content="Front-End" content2="Frameworks tools" />
            </h2>
            <ol>
              {SkillFrond.map((idf, index) => (
                <li key={index}>{idf.skill}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </Mtion>
  );
};
