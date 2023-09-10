// Import necessary components and modules
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
