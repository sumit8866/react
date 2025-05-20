import React from "react";
import review_bg from "./reviews_bg.jpg";
import review_1 from "./review_1.png";
import review_2 from "./review_2.png";
import review_3 from "./review_3.png";
import review_4 from "./review_4.png";
const Userreview = () => {
  return (
    <>
      <div className="review_main">
        <div class="review" id="Review">
          <h1 className="titleStyle">
            Customer<span className="subtitlestyle">Review</span>
          </h1>

          <div class="review_box">
            <div class="review_card">
              <div class="review_profile">
                <img src={review_1} alt="1" />
              </div>

              <div class="review_text">
                <h2 class="name">John Deo</h2>

                <div class="review_icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="review_social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus quam facere blanditiis in fugiat tempore
                  necessitatibus aliquid. Id adipisci, rem corrupti asperiores
                  distinctio delectus quae quia tenetur totam laboriosam quam.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores soluta ullam ipsa voluptates repudiandae dignissimos
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="review_profile">
                <img src={review_2} alt="1" />
              </div>

              <div class="review_text">
                <h2 class="name">John Deo</h2>

                <div class="review_icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="review_social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus quam facere blanditiis in fugiat tempore
                  necessitatibus aliquid. Id adipisci, rem corrupti asperiores
                  distinctio delectus quae quia tenetur totam laboriosam quam.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores soluta ullam ipsa voluptates repudiandae dignissimos
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="review_profile">
                <img src={review_3} alt="1" />
              </div>

              <div class="review_text">
                <h2 class="name">John Deo</h2>

                <div class="review_icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="review_social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus quam facere blanditiis in fugiat tempore
                  necessitatibus aliquid. Id adipisci, rem corrupti asperiores
                  distinctio delectus quae quia tenetur totam laboriosam quam.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores soluta ullam ipsa voluptates repudiandae dignissimos
                </p>
              </div>
            </div>

            <div class="review_card">
              <div class="review_profile">
                <img src={review_4} alt="1" />
              </div>

              <div class="review_text">
                <h2 class="name">John Deo</h2>

                <div class="review_icon">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                </div>

                <div class="review_social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus quam facere blanditiis in fugiat tempore
                  necessitatibus aliquid. Id adipisci, rem corrupti asperiores
                  distinctio delectus quae quia tenetur totam laboriosam quam.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolores soluta ullam ipsa voluptates repudiandae dignissimos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="contact">
        <div class="contact-container container">
          <div class="contact-img">
            <img src="https://i.postimg.cc/1XvYM67V/restraunt2.jpg" alt="" />
          </div>

          <div class="form-container">
            <h2>Contact Us</h2>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea
              cols="30"
              rows="6"
              placeholder="Type Your Message"
            ></textarea>
            <a href="#" class="btn btn-primary">
              Submit
            </a>
          </div>
        </div>
      </section>


<div>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4798.641847482605!2d-74.43219252080083!3d40.55511173436224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b86c9db667e9%3A0x72b8da0ab98d48e6!2sA2B%20Indian%20Veg%20Restaurant%20-%20South%20Plainfield!5e0!3m2!1sen!2sin!4v1747643250706!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
</div>
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

export default Userreview;
