import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Add this for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">ShopEase</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/predict">Price Prediction</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
