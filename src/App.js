import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Men, { LaunchIndex, LaunchShoe } from "./Components/Men.jsx";
import NotFound from "./Components/NotFound.jsx";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />}>
            <Route path="/" element={<LaunchIndex />} />
            <Route path="/:slug" element={<LaunchShoe />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
