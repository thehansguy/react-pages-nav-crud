import React from "react";
import { Link } from "react-router-dom";

function ServicesSubHeader() {
  return (
    <nav className="header">
      <Link to="service-1">Service 1</Link>
      <Link to="service-2">Service 2</Link>
      <Link to="service-3">Service 3</Link>
    </nav>
  );
}

export default ServicesSubHeader;
