import React from "react";
import { Link } from "react-router-dom";
import "./../stylesheets/Header.scss";

const Header = () => {
  return (
    <Link to="/">
      <img
        className="home-logo"
        src="./official-logo.png"
        alt="Evaluación final"
      />
    </Link>
  );
};

export default Header;
