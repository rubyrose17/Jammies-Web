// Import necessary components and modules
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Main from "./pages/Main";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  });
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Forms />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
