import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"; 
import Navbar from "./Navbar";
import "./Auth.css"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      console.log("Attempting to sign in with email:", email); 
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Sign-in successful, redirecting to /home");
      navigate("/home");
    } catch (err) {
      console.error("Sign-in error:", err.code, err.message); 
      let errorMsg = "Invalid email or password. Please try again.";
      if (err.code === "auth/user-not-found") errorMsg = "No account found with this email.";
      else if (err.code === "auth/wrong-password") errorMsg = "Incorrect password.";
      else if (err.code === "auth/network-request-failed") errorMsg = "Network error. Check your connection.";
      setError(errorMsg);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <form onSubmit={handleSubmit} className="auth-form">
            <label>Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Your password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
          {error && <p className="error-msg">{error}</p>}
          <p className="switch-text">
            <Link to="/register" className="switch-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;