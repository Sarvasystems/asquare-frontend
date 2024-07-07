import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { CSSTransition } from "react-transition-group";
import MortgageCalculator from "../../components/mortgageCalculator/MortgageCalculator";
import map from "../../assets/map.png";
import MapComponent from "../../components/MapComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyPage.css";
import { useParams } from "react-router-dom";

const PropertyPage = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [showSlider, setShowSlider] = useState(false);
  const { propertyId } = useParams();

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/rentalListings/${propertyId}`
        );
        setPropertyData(response.data);
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    };

    fetchPropertyData();
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  if (!propertyData) {
    return <div>Loading...</div>;
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="property-section">
      <div className="containerr">
        <div className="buttons">
          <button className="show-photos-btn" onClick={toggleSlider}>
            Show {propertyData.displayImages.length - 3} photos
          </button>
          <button className="view-map-btn">View on map</button>
        </div>
        <div className="propertyy-container">
          <div className="large-image">
            <img
              src={`http://localhost:5000${propertyData.displayImages[0]}`}
              alt="Large Property"
            />
          </div>
          <div className="small-images">
            {propertyData.displayImages.slice(1, 3).map((img, index) => (
              <img
                src={`http://localhost:5000${img}`}
                alt={`Small Property ${index + 1}`}
                className="small-image"
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="property-details">
          <div className="price">
            <div className="price-cost">
              <h1>{propertyData.price} AED</h1>
            </div>
            <div className="details">
              <div className="detail-icon">
                <FaBed /> {propertyData.beds} Bedrooms
              </div>
              <div className="detail-icon">
                <FaBath /> {propertyData.baths} Bathrooms
              </div>
              <div className="detail-icon">
                <BiArea /> {propertyData.area} sqft
              </div>
            </div>
          </div>
          <div className="ad"></div>
        </div>
        <div className="horizontal-line"></div>

        <div className="property-type">
          <div className="type">
            <div className="type-place">
              <h1>{propertyData.title}</h1>
              <div className="type-description">{propertyData.tagline}</div>
              <div className="type-availabel">
                <div>
                  <FaBed /> Property Type: {propertyData.propertyType}
                </div>
              </div>
              <div>
                <FaBed /> Available From:{" "}
                {new Date(propertyData.availableFrom).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="ad"></div>
        </div>
        <div className="horizontal-line"></div>

        <div className="property-location">
          <div className="location-container">
            <div className="location-heading">
              <h1>Location</h1>
              <div className="map-information">
                <div className="map-img">
                  <img src={map} alt="map" />
                </div>
                <div className="map-description">
                  <div>{propertyData.location}</div>
                  <div>{propertyData.community}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="ad"></div>
        </div>
        <div className="horizontal-line"></div>

        <div className="amenities-details">
          <div className="amenities">
            <div className="amenities-heading">
              <h1>Amenities</h1>
            </div>
            <div className="amenities-details">
              {propertyData.amenities.map((amenity, index) => (
                <div className="amenities-detail-icon" key={index}>
                  <FaBed /> {amenity}
                </div>
              ))}
            </div>
          </div>
          <div className="ad"></div>
        </div>

        <div className="horizontal-line"></div>

        <div className="actual-details">
          <div className="actual-features">
            <h2>Description</h2>
            <p>Property Details:</p>
            {propertyData.description}

            <CSSTransition
              in={showMore}
              timeout={300}
              classNames="feature"
              unmountOnExit
            >
              <div className="transition-features">
                <h3>Features:</h3>
                <ul>
                  {propertyData.description.split("\n").map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            </CSSTransition>

            <button onClick={toggleShowMore} className="toggle-button">
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>
          <div className="ad"></div>
        </div>
        <div className="horizontal-line"></div>

        <div className="mortage-details">
          <div className="mortage">
            <MortgageCalculator />
          </div>
          <div className="ad"></div>
        </div>

        <div className="property-location">
          <div className="map-container">
            <MapComponent
              location={propertyData.location}
              community={propertyData.community}
            />
          </div>
          <div className="ad"></div>
        </div>
        <div className="horizontal-line"></div>
      </div>

      {showSlider && (
        <div className="slider-overlay">
          <div className="slider-popup">
            <button className="close-button" onClick={toggleSlider}>
              X
            </button>
            <Slider {...sliderSettings}>
              {propertyData.displayImages.slice(3).map((img, index) => (
                <div key={index}>
                  <img
                    src={`http://localhost:5000${img}`}
                    alt={`Property ${index + 4}`}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyPage;
