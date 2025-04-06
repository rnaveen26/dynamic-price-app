import React, { useState } from "react";
import { auth } from "../firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail, 
  sendEmailVerification,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // 👇 Add persistence before login
        await setPersistence(auth, browserLocalPersistence);
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("Logged in successfully!");
        navigate("/profile");
      } else {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        await sendEmailVerification(user);
        setMessage("Account created! Please check your email for verification.");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };  

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage("Please enter your email first.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Reset link sent! Check your email.");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer", color: "blue" }}>
        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
      </p>

      {isLogin && (
        <p onClick={handleForgotPassword} style={{ cursor: "pointer", color: "red" }}>
          Forgot Password?
        </p>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default Auth;
