import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Mtion = ({ children, duration = 0.5, initialY = "100vh" }) => {
  const [isVisible, setIsVisible] = useState(true);

  const animationConfig = {
    initial: { 
      opacity: 0, 
      y: initialY 
    },
    animate: { 
      opacity: 1, 
      y: 0 
    },
    exit: { 
      opacity: 0, 
      width: 0 
    },
    transition: { 
      duration,
      ease: "easeOut"
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div {...animationConfig}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mtion;
