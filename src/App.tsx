import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <HomePage  />
    </div>
  );
}

export default App;
