import React from "react";
import { Link } from "react-router-dom";

function ServicesSubHeader() {
  return (
    <nav className="header">
      <Link to="what-we-do/service-1">Service 1</Link>
      <Link to="what-we-do/service-2">Service 2</Link>
      <Link to="what-we-do/service-3">Service 3</Link>
    </nav>
  );
}

export default ServicesSubHeader;
