import React from "react";
import "./Footer.css";
import house from "../../assets/3d-house.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-content">
          <img src={house} alt="House" className="newsletter-image" />
          <div className="newsletter-text">
            <h3>Subscribe To Our Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, earum.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Email address..." />
              <button>→</button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-links-section">
        <div className="footer-links-container">
          <div className="footer-column">
            <h4>ASquared</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab harum explicabo illo, magnam vitae expedita.</p>
            <div className="social-icons">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li>Wishlist</li>
              <li>Terms of Use</li>
              <li>Contact Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Portfolio</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Business</h4>
            <ul>
              <li>Success</li>
              <li>Guide</li>
              <li>Mission</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Subscribe to our Newsletter</h4>
            <p>Subscribe to be the first one to know about updates. Enter your email</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Email address..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
