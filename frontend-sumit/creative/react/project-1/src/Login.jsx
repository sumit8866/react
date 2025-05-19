import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import call from "./call.png";
const Login = () => {
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

      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <h1>Welcome Back!</h1>
            <p className="subtitle">Log in to order your favorite meals</p>
            <form>
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

              <button type="submit" className="login-btn">
                Log In
              </button>
            </form>
            <p className="signup-text">
              New here? <a href="/signup">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
