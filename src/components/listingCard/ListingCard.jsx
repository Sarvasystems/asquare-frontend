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
import { Link } from "react-router-dom";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <Link
      to={"/property-details/" + listing._id}
      className="property-detail-link"
    >
      <div className="rent-buy-card">
        <div className="image-container">
          <img
            src="https://www.propertyfinder.ae/property/b8a5415d6ab…a/416/272/MODE/47baff/11805976-e16deo.webp?ctr=ae"
            alt="Property"
            className="property-image"
          />
        </div>
        <div className="information">
          <div className="content">
            <h3>{listing.price} AED</h3>
            <p>{listing.tagline}</p>
            <div className="info">
              <div className="info-item">
                <FaBed /> {listing.beds}
              </div>
              <div className="info-item">
                <FaBath /> {listing.baths}
              </div>
              <div className="info-item">
                <FaRulerCombined /> {listing.area} sqft
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
              onClick={() => setIsWishlist(!isWishlist)}
            >
              {isWishlist ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button className="action-button">
              <FaEllipsisH />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
