import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import call from "./call.png";
import burger from "./burger_01.png";
import g_1 from "./g_1.png";
import g_2 from "./g_2.png";
import g_3 from "./g_3.png";
import g_4 from "./g_4.png";
import g_5 from "./g_5.png";
import g_6 from "./g_6.png";

const Cartpage = () => {
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

      <section className="cartpage">
        <div className="cart-page">
          <div className="breadcrumb">
            <a href="/" className="breadcrumb-link">
              Home
            </a>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current ">Cart</span>
          </div>
          <h1 className="cart-title">Cart</h1>
        </div>
      </section>

      <section>
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="remove">×</td>
                <td className="product-info">
                  <img src={burger} alt="Hard White Wheat" />
                  <span>Hard White Wheat</span>
                </td>
                <td>$12.00</td>
                <td>
                  <input type="number" defaultValue="1" />
                </td>
                <td>$12.00</td>
              </tr>
            </tbody>
          </table>

          <div className="cart-actions">
            <button className="update-btn">Update Cart</button>
            <div className="coupon-section">
              <input type="text" placeholder="Coupon code" />
              <button className="apply-btn">Apply coupon</button>
            </div>
          </div>

          <div className="cart-totals">
            <h2>Cart Totals</h2>
            <div className="totals-line">
              <span>Subtotal</span>
              <span>$12.00</span>
            </div>
            <div className="totals-line total-bold">
              <span>Total</span>
              <span>$12.00</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
        <div className="cart-480p">
          <div className="uper">
            <div className="cart-item">
              <div className="cart-remove">×</div>

              <div className="cart-label">Product:</div>
              <div className="cart-value product">
                <img src={burger} alt="Hard White Wheat" />
                <span>Hard White Wheat</span>
              </div>

              <div className="cart-label">Price:</div>
              <div className="cart-value">$12.00</div>

              <div className="cart-label">Quantity:</div>
              <div className="cart-value">
                <input type="number" defaultValue={1} />
              </div>

              <div className="cart-label">Subtotal:</div>
              <div className="cart-value">$12.00</div>
            </div>
            <div className="Flex-Cloume">
              <div className="cart-actions">
                <button className="update-btn">Update Cart</button>
                <div className="coupon-section">
                  <input type="text" placeholder="Coupon code" />
                  <button className="apply-btn">Apply coupon</button>
                </div>
              </div>

              <div className="cart-totals">
                <h2>Cart Totals</h2>
                <div className="totals-line">
                  <span>Subtotal</span>
                  <span>$12.00</span>
                </div>
                <div className="totals-line total-bold">
                  <span>Total</span>
                  <span>$12.00</span>
                </div>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="farm-gallery">
          <img src={g_1} alt="img-1" />
          <img src={g_2} alt="img-1" />
          <img src={g_3} alt="img-1" />
          <img src={g_4} alt="img-1" />
          <img src={g_5} alt="img-1" />
          <img src={g_6} alt="img-1" />
        </div>
      </section>

      <div className="footer" id="footer">
        <footer>
          <div class="footer_main">
            <div class="footer_tag">
              <h2>Location</h2>
              <p>Sri Lanka</p>
              <p>USA</p>
              <p>India</p>
            </div>

            <div class="footer_tag">
              <h2>Quick Link</h2>
              <p>Home</p>
              <p>About</p>
              <p>Menu</p>
              <p>Gallary</p>
              <p>Order</p>
            </div>

            <div class="footer_tag">
              <h2>Contact</h2>
              <p>+91 87635 56583</p>
              <p>johndeo123@gmail.com</p>
              <p>foodshop123@gmail.com</p>
            </div>

            <div class="footer_tag">
              <h2>Our Service</h2>
              <p>Fast Delivery</p>
              <p>Easy Payments</p>
              <p>24 x 7 Service</p>
            </div>

            <div class="footer_tag">
              <h2>Follows</h2>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>

          <p class="end">
            Thank You For Visit
            <span>
              <i class="fa-solid fa-face-grin"></i>
            </span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default Cartpage;
