import React from 'react';
import "./Newsletter.css";
import house from "../../assets/3d-house.png"

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
    
          <div className="newsletter-text">
            <h1>Sign up for exclusive updates!</h1>
            <p>Subscribe to our newsletter to be the first to know about exclusive deals, property market trends, and real estate news in the UAE.</p>
          </div>
          <div className="newsletter-form">
            <h2>SIGN UP NOW</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone no" />
            <button type="submit">Send</button>
          </div>
          <div className="newsletter-image">
            <img src={house} alt="Newsletter Preview" />
          </div>
       
      </div>
    </section>
  )
}

export default Newsletter
