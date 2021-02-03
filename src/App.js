import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Men, { LaunchIndex, LaunchShoe } from "./Components/Men.jsx";
import NotFound from "./Components/NotFound.jsx";
import Header from "./Components/Header";
import Women, { WomenShoe, WomenShoeDetail } from "./Components/Women";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/men" element={<Men />}>
            <Route path="/" element={<LaunchIndex />} />
            <Route path="/:slug" element={<LaunchShoe />} />
          </Route>
          <Route path="/women" element={<Women />}>
            <Route path="/" element={<WomenShoe />} />
            <Route path="/:slug" element={<WomenShoeDetail />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
