// src/components/ListingCard.js
import React from "react";
import {
  FaCheckCircle,
  FaStar,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={listing.image} alt="Property" className="property-image" />
        <div className="badge verified">
          <FaCheckCircle /> VERIFIED
        </div>
        <div className="badge superagent">
          <FaStar /> SUPERAGENT
        </div>
      </div>
      <div className="content">
        <h3>{listing.price} AED</h3>
        <p>{listing.description}</p>
        <div className="info">
          <div className="info-item">
            <FaBed /> {listing.bedrooms}
          </div>
          <div className="info-item">
            <FaBath /> {listing.bathrooms}
          </div>
          <div className="info-item">
            <FaRulerCombined /> {listing.size} sqft
          </div>
        </div>
      </div>
      <div className="actions">
        <button className="action-button">
          <FaPhone /> Call
        </button>
        <button className="action-button">
          <FaEnvelope /> Email
        </button>
        <button className="action-button">
          <FaWhatsapp /> WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
