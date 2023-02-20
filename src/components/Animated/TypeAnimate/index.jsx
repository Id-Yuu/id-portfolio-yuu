import React from "react";
import TypingTextAnimation from "react-typing-text-animation";
import "react-typing-text-animation/dist/index.css";

const TypeText = ({ content }) => {
  return (
    <>
      <TypingTextAnimation text={content} delay={200} />
    </>
  );
};
export default TypeText;
