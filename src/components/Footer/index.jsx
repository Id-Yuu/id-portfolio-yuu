import "./style.scss";
import React from "react";
import { motion as mt } from "framer-motion";

// icon
import { RiSubtractLine } from "react-icons/ri";

// component social media
import { SocialMedia } from "../Social";

export const Footer = () => {
  return (
    <footer id="footer">
      <span>
        <RiSubtractLine />
      </span>
      <mt.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 2 }}
      >
        <SocialMedia />
      </mt.div>
    </footer>
  );
};
