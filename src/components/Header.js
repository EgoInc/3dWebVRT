// src/components/Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">VeraRealty</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#invest">Invest</a></li>
          <li><a href="#learn">Learn</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
