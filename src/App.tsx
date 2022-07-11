import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import LoginPage from "./components/Login/LoginPage/LoginPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/electronics"
            element={<ProductPage category="electronics" id="1" />}
          />
          <Route
            path="/jewelery"
            element={<ProductPage category="jewelery" id="1" />}
          />
          <Route
            path="/mans"
            element={<ProductPage category="men's clothing" id="1" />}
          />
          <Route
            path="/womans"
            element={<ProductPage category="women's clothing" id="1" />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
