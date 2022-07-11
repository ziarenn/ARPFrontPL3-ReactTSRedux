import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ElectronicsPage from "./components/ElectronicsPage/ElectronicsPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/electronics" element={<ElectronicsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
