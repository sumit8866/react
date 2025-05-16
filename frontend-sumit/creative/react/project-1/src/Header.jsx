import React, { useState } from "react";
import logo from "./logo.png";
import saladImg from "./first-slider.png";
import call from "./call.png";
import play_button from "./play_button.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      {/* Header Top Navigation */}
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Cafeu Logo" />
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {["Home", "Pages", "Menu", "Blog", "About Us", "Contact"].map((item, idx) => (
              <li key={idx} className="nav-item">
                <a href={`#${item.toLowerCase().replace(/\s+/g, "")}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <li className="nav-item number">
              <a href="tel:+919714051182" className="call-link" onClick={() => setMobileMenuOpen(false)}>
                <img src={call} alt="Call" /> +91 9714051182
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Left Side */}
        <div className="hero-left">
          <h4>Best In Cafeu</h4>
          <h1>
            <span className="highlight">Different Spice</span>
            <br />
            <span>For A Different Taste</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Quis.
          </p>

          <div className="hero-buttons">
            <button className="order-button">Place Order</button>
            <button className="video-button">
              <div className="video-icon">
                <img src={play_button} alt="Play" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <img src={saladImg} alt="Special Salad" />
          <div className="discount-badge">
            SPECIAL MENU <br />
            <span>25% OFF</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
