import "./style.scss";
import { Outlet } from "react-router-dom";

// component
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Roots = () => {
  return (
    <>
      <nav className="header-container">
        <Header />
        <Navbar />
      </nav>
      <div className="in-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
