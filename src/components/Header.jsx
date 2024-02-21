import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  return (
    <nav>
      <h1>TECHMYTE</h1>
      <main>
        <HashLink to={"/#home"}>home</HashLink>
        <Link to={"/contact"}>contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <HashLink to={"/#brands"}>Brands</HashLink>
        <Link to={"/services"}>Services</Link>
      </main>
    </nav>
  );
};

export default Header;
