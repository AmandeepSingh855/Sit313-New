import React from "react";
import { auth } from "./firebase";  // Import auth
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");  // Redirect to login after sign-out
    } catch (error) {
      console.error("Sign-out error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Welcome to DEV@Deakin, You are logged in successfully</h1>
        <button
          onClick={handleSignOut}
          style={{
            backgroundColor: "#007bff",
            color: "#ffffff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Home;