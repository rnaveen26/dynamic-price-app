import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import PricePrediction from "./pages/PricePrediction";
import Auth from "./pages/Auth";
import "./styles/App.css";
import ForgotPassword from "./pages/ForgetPassword";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/prediction" element={<PricePrediction />} />
        <Route path="/auth" element={<Auth />} /> 
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/predict" element={<PricePrediction />} />
      </Routes>
    </Router>
  );
};

export default App;
