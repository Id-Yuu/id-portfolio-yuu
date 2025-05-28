import { useEffect, useState } from "react";
import intro from "../../assets/img/into_.png";

// CSS
import "./style.scss";

// Components Animation
import { motion as mt } from "framer-motion";
import Mtion from "../../components/Animated/Motion";

// Data
import { Home_data } from "../../api/Home_";

export const Homepage = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    // Prioritize content loading
    setIsContentLoaded(true);
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <Mtion>
      <section id="section-home">
        <mt.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 300 }}
          transition={{ duration: 0.4 }}
          className="img-section"
        >
          <img
            src={intro}
            alt="Intro hero image"
            loading="lazy"
          />
          <mt.div
            initial={{ opacity: 0, borderWidth: 0 }}
            animate={{ opacity: 1, borderWidth: 1 }}
            transition={{ duration: 0.5 }}
            className="square"
          />
        </mt.div>
        <div className="intro-section">
          {isContentLoaded &&
            Home_data.map((dt) => (
              <div key={dt.id} className="intro-content">
                <sup>{dt.Htitle}</sup>
                <mt.h1
                  variants={headingVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-4xl font-bold"
                >
                  {dt.Hname}
                </mt.h1>
                <p>{dt.Hcontent}</p>
              </div>
            ))}
        </div>
      </section>
    </Mtion>
  );
};
