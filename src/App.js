import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import QuoteApi from "./components/QuoteApi";

function App() {
  return (
    <div>
      <Navbar />
      <QuoteApi />
    </div>
  );
}

export default App;
