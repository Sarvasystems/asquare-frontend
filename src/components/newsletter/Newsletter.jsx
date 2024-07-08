import React, { useState } from 'react';
import axios from 'axios';
import "./Newsletter.css";
import house from "../../assets/3d-house.png";

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'countryCode':
        setCountryCode(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/newsletter', {
        name,
        email,
        phone,
        countryCode
      });
      alert('Subscription successful!');
      setName('');
      setEmail('');
      setPhone('');
      setCountryCode('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      alert('Failed to subscribe to newsletter. Please try again later.');
    }
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h1>Sign up for exclusive updates!</h1>
          <p>Subscribe to our newsletter to be the first to know about exclusive deals, property market trends, and real estate news in the UAE.</p>
        </div>
        <div className="newsletter-form">
          <h2>SIGN UP NOW</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
            <input
              type="tel"
              placeholder="Phone no"
              name="phone"
              value={phone}
              onChange={onChange}
              required
            />
            <input
              type="text"
              placeholder="Country Code"
              name="countryCode"
              value={countryCode}
              onChange={onChange}
              required
            />
            <button className='btn' type="submit">
              <span>Send</span></button>
          </form>
        </div>
        <div className="newsletter-image">
          <img src={house} alt="Newsletter Preview" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
