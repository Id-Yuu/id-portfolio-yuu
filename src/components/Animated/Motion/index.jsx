import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Mtion = ({ children }) => {
  const [show, setShow] = useState(true);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: "calc(100vw + 50%)" }}
          animate={{ opacity: 1, y: "0" }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, width: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mtion;
