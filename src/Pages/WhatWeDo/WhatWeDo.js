import React from "react";
import { Outlet } from "react-router-dom";
import ServicesSubHeader from "../../Components/ServicesSubHeader";

function WhatWeDo() {
  return (
    <div className="page">
      <div>
        <ServicesSubHeader />
        <h2>What We Do!</h2>
        <Outlet />
      </div>
    </div>
  );
}

export default WhatWeDo;
