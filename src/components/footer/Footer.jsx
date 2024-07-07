import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="main">
        <div className="footer">
          <div className="single-footer">
            <h4>About Us</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              eius omnis incidunt nisi error minima amet iusto aperiam ipsam
              assumenda?
            </p>
            <div className="footer-social">
            <Link to="/" className="footer_social_link">
               <CiFacebook />
              </Link>
              <Link to="/" className="footer_social_link">
               <CiFacebook />
              </Link>
              <Link to="/" className="footer_social_link">
               <CiFacebook />
              </Link>
              <Link to="/" className="footer_social_link">
               <CiFacebook />
              </Link>
            </div>
          </div>
          <div className="single-footer">
            <h4>Main Menu</h4>
            <ul>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons" /> Home</Link></li>
              <li><Link to="/buy" className="footer_menu_link"><FaChevronRight className="icons"/> Buy</Link></li>
              <li><Link to="/rent" className="footer_menu_link"><FaChevronRight className="icons"/> Rent</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Commercial</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Residential</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Off Plan</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> About</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Contact</Link></li>
            </ul>
          </div>
          <div className="single-footer">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Privacy Policy</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Terms & Conditions</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaChevronRight className="icons"/> Disclaime</Link></li>
            </ul>
          </div>
          <div className="single-footer">
            <h4>Contact Us</h4>
            <ul>
              <li><Link to="/" className="footer_menu_link"><FaLocationDot className="icons"/>Office No 2154 - Business Bay - Dubai</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaLocationDot className="icons"/>(+971) 55 558 1554</Link></li>
              <li><Link to="/" className="footer_menu_link"><FaLocationDot className="icons"/>info@asquaredre.com</Link></li>
            </ul>
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
