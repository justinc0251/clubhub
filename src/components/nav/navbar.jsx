import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
