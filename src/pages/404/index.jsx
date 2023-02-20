import "./style.scss";
import { Link } from "react-router-dom";

// Animate
import Mtion from "../../components/Animated/Motion";

const NotFound = () => {
  return (
    <>
      <Mtion>
        <section id="not-found">
          <h1>404</h1>
          <p>Page Not Found</p>
          <Link to="/">Back To Homepage</Link>
        </section>
      </Mtion>
    </>
  );
};

export default NotFound;
