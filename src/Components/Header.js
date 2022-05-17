import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">Home</Link>
      <Link to="/who-we-are">Who We Are</Link>
      <Link to="/what-we-do">What We Do</Link>
      <Link to="/get-in-touch">Get In Touch</Link>
    </nav>
  );
}

export default Header;
