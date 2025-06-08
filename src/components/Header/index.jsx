import "./style.scss";
import { Link } from "react-router-dom";
// icon
import { RiTerminalLine } from "react-icons/ri";

// component animate
import TypeText from "../Animated/TypeAnimate";

export const Header = () => {
  return (
    <header id="header-container">
      <h1>
        <RiTerminalLine />
        <Link to="/" aria-label="header">
          <TypeText content="Hi, There" content2="I'm Yuu" />
        </Link>
      </h1>
    </header>
  );
};
