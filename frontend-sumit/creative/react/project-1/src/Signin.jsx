import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import call from "./call.png";

const Signin = () => {
  const [isMobileMenuOpens, setMobileMenuOpens] = useState(false);

  const toggleMobileMenus = () => {
    setMobileMenuOpens(!isMobileMenuOpens);
  };
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="Cafeu Logo" />
          </div>

          <div className="hamburger" onClick={toggleMobileMenus}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <nav className={`nav-menu ${isMobileMenuOpens ? "active" : ""}`}>
            <ul className="nav-list">
              {["Home", "Pages", "Menu", "Blog", "About Us", "Contact"].map(
                (item, idx) => (
                  <li key={idx} className="nav-item">
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={() => setMobileMenuOpens(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="nav-item number">
                <a
                  href="tel:+919714051182"
                  className="call-link"
                  onClick={() => setMobileMenuOpens(false)}
                >
                  <img src={call} alt="Call" /> +91 9714051182
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="signin-page">
        <div className="signup-container">
          <div className="signup-box">
            <h1>Create Account</h1>
            <p className="subtitle">Sign up to order your favorite meals</p>
            <form>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Jane Doe" required />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                required
              />

              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="••••••••"
                required
              />

              <button type="submit" className="signup-btn">
                Sign Up
              </button>
            </form>
            <p className="login-text">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
