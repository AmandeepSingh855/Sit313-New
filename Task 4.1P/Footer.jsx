import React, { useState } from "react";
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css';


export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ email })
      });
      const result = await response.text();
      alert(result);
      setEmail("");
    } catch (err) {
      alert("Failed to send email");
    }
  };

  return (
    <footer className="footer">
      <div className="subscribe">
        <p>SIGN UP FOR OUR DAILY INSIDER</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="links">
        <div>
          <h4>Explore</h4>
          <p>Home</p>
          <p>Questions</p>
          <p>Articles</p>
          <p>Tutorials</p>
        </div>

        <div>
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Help</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h4>Stay connected</h4>
          <p>What's up?</p>
          <p>What's new?</p>
          <p>What's hot?</p>
          <p>WhatsApp</p>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div> {/* ✅ properly close the links div */}

      <p className="copyright">
        DEV@Deakin 2022 • Privacy Policy • Terms • Code of Conduct
      </p>
    </footer>
  );
}
