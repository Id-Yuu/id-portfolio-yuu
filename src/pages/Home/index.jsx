import "./style.scss";
import { motion as mt } from "framer-motion";

// api
import { Home_data } from "../../api/Home_";

// component img and animate
import intro from "../../assets/img/into_.png";
import Mtion from "../../components/Animated/Motion";

export const Homepage = () => {
  return (
    <Mtion>
      <section id="section-home">
        <mt.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 300 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="img-section"
        >
          <img src={intro} alt="intro" />
          <mt.div
            initial={{ opacity: 0, borderWidth: 0 }}
            animate={{ opacity: 1, borderWidth: 1 }}
            transition={{ duration: 0.5, delay: 2 }}
            className="square"
          ></mt.div>
        </mt.div>
        <div className="intro-section">
          {Home_data.map((dt) => (
            <div key={dt.id} className="intro-content">
              <sup>{dt.Htitle}</sup>
              <h1>{dt.Hname}</h1>
              <p>{dt.Hcontent}</p>
            </div>
          ))}
        </div>
      </section>
    </Mtion>
  );
};
