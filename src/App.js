// src/App.js
import React from "react";
import Header from "./components/Header";
import EthereumButton from './components/EthereumButton';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="hero-section">
        <h1>Unlock the Future of Real Estate Investment</h1>
        <p>Exclusive Real Estate, Powered by Blockchain.</p>
        <button className="cta-button">Join the Future of Real Estate</button>
      </main>
      <EthereumButton />
    </div>
  );
}

export default App;
