import "./style.scss";
import { motion as mt } from "framer-motion";

// api
import { About_ } from "../../api/About_";

// component img and animate
import AImg from "../../assets/img/into_.png";
import Mtion from "../../components/Animated/Motion";

export const About = () => {
  return (
    <Mtion>
      <section id="section-about">
        <div className="about-img">
          <img src={AImg} alt="" />
        </div>
        <mt.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="about-content"
        >
          <h2>About Me</h2>
          <ul>
            {About_.map((idx, index) => (
              <li key={index}>
                <span>{idx.values}</span>
                {idx.data}
              </li>
            ))}
          </ul>
        </mt.div>
      </section>
    </Mtion>
  );
};
