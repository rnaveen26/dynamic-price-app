import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="page">
    <h1 style={{ fontWeight: "850", fontSize: "4rem" }}>
        Shop Smart. Predict Prices. Save More.
      </h1>
      <div className="home-buttons">
        <Link
        to="/about"
        style={{
          textDecoration: "none",
          background: "black",
          color: "white",
          fontWeight: 500,
          padding: "12px 24px",
          borderRadius: "10px",
          transition: "all 0.3s ease",
          border: "none",
          display: "inline-block"
        }}
        onMouseOver={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "black";
          e.target.style.color = "white";
        }}
      >
        About Us
      </Link>

      <Link
        to="/Predict"
        style={{
          textDecoration: "none",
          background: "black",
          color: "white",
          fontWeight: 500,
          padding: "12px 24px",
          borderRadius: "10px",
          transition: "all 0.3s ease",
          border: "none",
          display: "inline-block",
          marginLeft: "1rem"
        }}
        onMouseOver={(e) => {
          e.target.style.background = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.background = "black";
          e.target.style.color = "white";
        }}
      >
        Predict Price
      </Link>
    </div>
  </div>
);

export default Home;
