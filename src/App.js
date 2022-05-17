import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

// Pages
import Home from "./Pages/Home";
import WhatWeDo from "./Pages/WhatWeDo";
import WhoWeAre from "./Pages/WhoWeAre";
import GetInTouch from "./Pages/GetInTouch";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/who-we-are" element={<WhoWeAre />} />

        <Route path="/what-we-do" element={<WhatWeDo />} />

        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
