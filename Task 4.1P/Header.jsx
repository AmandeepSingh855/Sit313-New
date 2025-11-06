import React from "react";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">DEV@Deakin</h1>
      <input type="text" placeholder="Search..." className="search" />
      <div className="buttons">
        <button>Post</button>
        <button>Login</button>
      </div>
    </header>
  );
}