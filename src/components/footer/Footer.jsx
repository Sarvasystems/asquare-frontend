import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaChevronRight, FaBitcoin, FaCcVisa, FaCcMastercard, FaGooglePay, FaPaypal, FaCcStripe, FaCcAmazonPay } from "react-icons/fa";
import { FaXTwitter, FaLocationDot, FaMoneyCheckDollar } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import footerlogo from "../../assets/logo-Asquared.png"

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="main">
        <div className="footer">
          <div className="single-footer">
            <img src={footerlogo} alt="footerlogo" className="footer-logo"/>
            <div className="footer-social">
              <Link to="/" className="footer_social_link">
                <FaXTwitter />
              </Link>
              <Link to="/" className="footer_social_link">
                <FaFacebook />
              </Link>
              <Link to="/" className="footer_social_link">
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className="single-footer">
            <h4>Main Menu</h4>
            <ul>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Home</Link></li>
              <li><Link to="/buy" className="footer_menu_link"><FaChevronRight className="icons" /> Buy</Link></li>
              <li><Link to="/rent" className="footer_menu_link"><FaChevronRight className="icons" /> Rent</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Commercial</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Off Plan</Link></li>
            </ul>
          </div>
          <div className="single-footer">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> About</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Contact</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Privacy Policy</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Terms & Conditions</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Disclaimer</Link></li>
            </ul>
          </div>
          <div className="single-footer">
            <h4>Contact Us</h4>
            <ul>
              <li><Link to="/" className="footer_menu_link"><FaLocationDot className="icons" />Office No 2154 - Business Bay - Dubai</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaLocationDot className="icons" />(+971) 55 558 1554</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaLocationDot className="icons" />info@asquaredre.com</Link></li>
            </ul>
          </div>
        </div>
        <div className="payment-options">
          <div className="payment-heading">
            <p>We accept all types of payments</p>
          </div>
          <div className="payment-icon">
            <FaBitcoin className="payment-icon-item" />
            <FaCcVisa className="payment-icon-item" />
            <FaCcMastercard className="payment-icon-item" />
            <FaGooglePay className="payment-icon-item" />
            <FaPaypal className="payment-icon-item" />
            <FaCcStripe className="payment-icon-item" />
            <BsBank className="payment-icon-item" />
            <FaMoneyCheckDollar className="payment-icon-item" />
            <FaCcAmazonPay className="payment-icon-item" />
          </div>
        </div>
        <div className="copy">
          <p>&copy; 2024 all rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;