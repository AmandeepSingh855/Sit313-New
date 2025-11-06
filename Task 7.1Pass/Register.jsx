import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";   
import { auth, db } from "./firebase";
import Navbar from "./Navbar";
import "./Auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      console.log("Creating user with Firebase Auth:", email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("Auth user created. UID:", user.uid);

      console.log("Saving user profile to Firestore...");
      await setDoc(doc(db, "users", user.uid), {   // ✅ store document with UID as ID
        name,
        lastName,
        email,
        createdAt: new Date(),
      });

      console.log("Firestore profile created successfully");

      navigate("/login");
    } catch (err) {
      console.error("Error:", err.code, err.message);
      let errorMsg = "Registration failed. Please try again.";
      if (err.code === "auth/email-already-in-use") errorMsg = "Email already in use.";
      else if (err.code === "auth/weak-password") errorMsg = "Password must be at least 6 characters.";
      else if (err.code === "permission-denied") errorMsg = "Firestore permission denied. Check rules.";
      else if (err.code === "network-error") errorMsg = "Network error. Try again.";
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <h3 className="auth-title">Create a DEV@Deakin Account</h3>
          <form onSubmit={handleSubmit} className="auth-form">
            <label>Name*</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required disabled={loading} />

            <label>Last Name*</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required disabled={loading} />

            <label>Email*</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={loading} />

            <label>Password*</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} disabled={loading} />

            <label>Confirm password*</label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required disabled={loading} />

            <button type="submit" className="auth-btn" disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </button>
          </form>

          {error && <p className="error-msg">{error}</p>}

          <p className="switch-text">
            Already have an account?{" "}
            <Link to="/login" className="switch-link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
