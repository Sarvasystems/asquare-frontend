import React, { useState } from "react";
import "./PropertyPage.css";
import dummyproperty from "../../assets/dummy_property.jpg"; // Update this with the correct image paths
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import map from "../../assets/map.png";
import { CSSTransition } from "react-transition-group";
import MortgageCalculator from "../../components/mortgageCalculator/MortgageCalculator";


const PropertyPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="property-section">
      <div className="containerr">
        <div className="buttons">
          <button className="show-photos-btn">Show 10 photos</button>
          <button className="view-map-btn">View on map</button>
        </div>
        <div className="propertyy-container">
          <div className="large-image">
            <img src={dummyproperty} alt="Large Property" />
          </div>
          <div className="small-images">
            <img
              src={dummyproperty}
              alt="Small Property 1"
              className="small-image"
            />
            <img
              src={dummyproperty}
              alt="Small Property 2"
              className="small-image"
            />
          </div>
        </div>
        <div className="property-details">
          <div className="price">
            <div className="price-cost">
              <h1>1,130,000 AED</h1>
              <p>
                Own this from just <strong>4,742 AED/month</strong>
              </p>
            </div>
            <div className="details">
              <div className="detail-icon">
                <FaBed /> 2 Bedrooms
              </div>
              <div className="detail-icon">
                <FaBath /> 3 Bathrooms
              </div>
              <div className="detail-icon">
                <BiArea /> 1,208 sqft / 112 sqm
              </div>
            </div>
          </div>
          <div className="ad"></div>
        </div>
        <div className="horizontal-line"></div>

        <div className="property-type">
          <div className="type">
            <div className="type-place">
              <h1>TOWNHOUSE FOR SALE IN AKNAN VILLAS, VARDON</h1>
              <div className="type-description">
                3 Bedrooms | Middle Unit | Good Deal
              </div>
              <div className="type-availabel">
                <div>
                  <FaBed /> Property Type: Townhouse
                </div>
                <div>
                  <FaBed /> Service Charges: 4.37 AED per sqft
                </div>
              </div>
              <div>
                <FaBed /> Availabel From: 29 Jun 2024
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
                  <div>Aknan Villa</div>
                  <div>Dubai, Damac Hills 2, Vardon</div>
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
              <div className="amenities-detail-icon">
                <FaBed /> Central A/C
              </div>
              <div className="amenities-detail-icon">
                <FaBath /> Balcony
              </div>
            </div>
            <div className="amenities-detail-icon">
              <BiArea /> Security
            </div>
          </div>
          <div className="ad"></div>
        </div>

        <div className="horizontal-line"></div>

        <div className="actual-details">
          <div className="actual-features">
            <h2>Description</h2>
            <p>Property Details:</p>
            <ul>
              <li>- 2 Bedroom</li>
              <li>- 3 Bathrooms</li>
              <li>- 2 Parking Space</li>
              <li>- Private Garden</li>
              <li>- Open Kitchen</li>
            </ul>

            <CSSTransition
              in={showMore}
              timeout={300}
              classNames="feature"
              unmountOnExit
            >
              <div className="transition-features">
                <h3>Features:</h3>
                <ul>
                  <li>- Gym and swimming pool</li>
                  <li>- Kids nursery and play area</li>
                  <li>- Mosque</li>
                  <li>- Restaurants</li>
                  <li>- Public Transport</li>
                  <li>- 24 Hour video security</li>
                  <li>- Bicycle track</li>
                  <li>- Tennis court</li>
                  <li>- Shopping mall</li>
                  <li>- Indoor health club</li>
                  <li>- kids pool</li>
                </ul>
                <br />
                <p>
                  DAMAC Hills 2 is a completely self-contained community that
                  balances tranquil with active, away from the bustle of the
                  city and yet with easy access to its business and leisure
                  hubs. In addition to the new and exciting upcoming features,
                  the community plays host to a community center with a
                  supermarket, state-of-the-art gymnasium, food trucks and more.
                  <br />
                  Company Name: AGCO Properties <br />
                  RERA ORN: 939893
                </p>
                <br />
                <p>
                  Office Address: P. O. Box 118322, Office 707 Damac Smart
                  Heights Building, Barsha Heights – TECOM, Dubai.
                </p>
                <p>
                  Company Profile: AGCO Properties had been built on years of
                  passion in real estate business and uncompromised adherence to
                  professionalism. Our in-house team is made up of
                  representatives that know engaging and distinct group
                  specializing in business and family residential property and
                  in development land and capital markets in Dubai to be a top
                  choice for real estate services. Our core values shall consist
                  of giving real and factual information and recommendations to
                  our clients as a way of embracing the fact that they have
                  different needs which should be met professionally.
                </p>
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
            <MortgageCalculator/>
          </div>
          <div className="ad"></div>
        </div>

        <div className="horizontal-line"></div>
      </div>
    </section>
  );
};

export default PropertyPage;
