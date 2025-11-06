import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handlePost = () => {
    alert("Please login to post."); 
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "10px 20px",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "18px", color: "#000000" }}>
        DEV@Deakin
      </div>
      <input
        type="text"
        placeholder="Search..."
        style={{
          backgroundColor: "#f0f0f0",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          width: "300px",
          outline: "none",
        }}
      />
      <div>
        <button
          onClick={handlePost}
          style={{
            backgroundColor: "#f0f0f0",
            border: "none",
            padding: "8px 12px",
            marginRight: "10px",
            color: "#606060",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Post
        </button>
        <Link to="/login">
          <button
            style={{
              backgroundColor: "#f0f0f0",
              border: "none",
              padding: "8px 12px",
              color: "#606060",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;