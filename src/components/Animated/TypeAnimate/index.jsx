import React from "react";
import { TypeAnimation } from 'react-type-animation';

const TypeText = ({ content, content2 }) => {
  return (
    <>
      <TypeAnimation sequence={[`${content}`, 800, `${content2}`, 900]} speed={50} repeat={2} />
    </>
  );
};
export default TypeText;
