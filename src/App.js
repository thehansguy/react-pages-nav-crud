import { Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

// Pages
import Home from "./Pages/Home";
import WhatWeDo from "./Pages/WhatWeDo/WhatWeDo";
import WhoWeAre from "./Pages/WhoWeAre";
import GetInTouch from "./Pages/GetInTouch";
import NotFound from "./Pages/NotFound";

import Service1 from "./Pages/WhatWeDo/Service1";
import Service2 from "./Pages/WhatWeDo//Service2";
import Service3 from "./Pages/WhatWeDo/Service3";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/who-we-are" element={<WhoWeAre />} />

        <Route path="/what-we-do/*" element={<WhatWeDo />}>
          <Route path=":service-1" element={<Service1 />} />
          <Route path=":service-2" element={<Service2 />} />
          <Route path=":service-3" element={<Service3 />} />
        </Route>

        <Route path="/get-in-touch" element={<GetInTouch />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
