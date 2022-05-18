import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ServicesSubHeader from "../../Components/ServicesSubHeader";

import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";

function WhatWeDo() {
  return (
    <div className="page">
      <div>
        <h2>What We Do!</h2>
        <ServicesSubHeader />
        <Outlet />
      </div>
    </div>
  );
}

export default WhatWeDo;
