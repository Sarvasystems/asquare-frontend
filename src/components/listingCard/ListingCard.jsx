import React, { useState } from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEllipsisH,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  const [isWislist, setIsWislist] = useState(false);

  return (
    <div className="rent-buy-card">
      <div className="image-container">
        <img src={listing.image} alt="Property" className="property-image" />
      </div>
      <div className="information">
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
        <div className="location-info">
          <FaMapMarkerAlt /> <span>{listing.location}</span>
        </div>
        <div className="actions">
          <button className="action-button">
            <IoCall /> Call
          </button>
          <button className="action-button">
            <FaEnvelope /> Email
          </button>
          <button className="action-button">
            <IoLogoWhatsapp /> WhatsApp
          </button>
          <button
            className="action-button"
            onClick={() => setIsWislist(!isWislist)}
          >
            {isWislist ? <FaHeart /> : <FaRegHeart />}
          </button>
          <button className="action-button">
            <FaEllipsisH />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
