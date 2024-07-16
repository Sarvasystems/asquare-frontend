import React, { useState } from "react";
import "./PropertyPage.css";
import offplanimage from "../../assets/offplan_image.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import map from "../../assets/map.png";
import MortgageCalculator from "../../components/mortgageCalculator/MortgageCalculator";

const UpfrontCostModal = ({ onClose }) => (
  <div className="modal-overlay">
    <div className="upfrontmodal-content">
      <div className="upfrontmodal-header">
        <h2>Estimated payment breakdown</h2>
        <button className="close-btn" onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="modal-body">
        <div className="modal-row">
          <span>Annual rent</span>
          <span>AED 270,000</span>
        </div>
        <div className="modal-row">
          <span>Real estate agency fee</span>
          <span>AED 14,175</span>
        </div>
        <div className="modal-row">
          <span>Security deposit</span>
          <span>AED 13,500</span>
        </div>
        <div className="modal-row">
          <span>DEWA deposit</span>
          <span>AED 2,130</span>
        </div>
        <div className="modal-row">
          <span>Ejari Fee</span>
          <span>AED 220</span>
        </div>
        <div className="modal-total">
          <span>Total upfront costs</span>
          <span>AED 30,025</span>
        </div>
        <div className="modal-info">
          <p>
            In addition to the upfront costs, prospective renters should note
            the total annual rent may increase when paying with multiple cheques
            throughout the year.
          </p>
        </div>
        
      </div>
    </div>
  </div>
);

const PropertyPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="property-section">
      <div className="containerr">
        <div className="propertyy-container">
          <div className="property-left-container">
            <img src={offplanimage} alt="Property" />
          </div>
          <div className="property-right-container">
            <img
              src={offplanimage}
              alt="Small Property"
              className="small-image"
            />
            <img
              src={offplanimage}
              alt="Small Property"
              className="small-image"
            />
          </div>
        </div>
        <div className="buttons">
          <button className="show-photos-btn">Show photos</button>
          <button className="view-map-btn">View on map</button>
        </div>
        <div className="propertyy-info-container">
          <div className="propertyy-left-container">
            <div className="property-details">
              <div className="price">
                <div className="price-cost">
                  <div>
                    <h1>1,699,999 AED</h1>
                  </div>
                  <div>
                    <button className="upfrontcost-button" onClick={openModal}>See UpFront Cost</button>
                  </div>
                </div>
                <div className="details">
                  <div className="detail-icon">
                    <FaBed /> 1 Bedrooms
                  </div>
                  <div className="detail-icon">
                    <FaBath /> 1 Bathrooms
                  </div>
                  <div className="detail-icon">
                    <BiArea /> 842 sqft
                  </div>
                </div>
              </div>
            </div>

            <div className="offplan-horizontal-line"></div>

            <div className="property-type">
              <div className="type">
                <div className="type-place">
                  <h1>APARTMENT FOR RENT IN GOLFVILLE, DUBAI HILLS ESTATE</h1>
                  <div className="type-description">
                    Golf Course + Burj View | High Floor | Brand New
                  </div>
                  <div className="type-availabel">
                    <div>
                      <FaBed /> Property Type: Apartment
                    </div>
                    <div>
                      <FaBed /> Property Type: Apartment
                    </div>
                  </div>
                  <div>
                    <FaBed /> Available From: 11 Jun
                  </div>
                </div>
              </div>
            </div>

            <div className="offplan-horizontal-line"></div>

            <div className="property-location">
              <div className="location-container">
                <div className="location-heading">
                  <h1>Location</h1>
                  <div className="map-information">
                    <div className="map-img">
                      <img src={map} alt="map" />
                    </div>
                    <div className="map-description">
                      <div>Golf Villa</div>
                      <div>Dubai, Dubai Hills Estate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="offplan-horizontal-line"></div>

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
                    <FaBed /> Central A/C
                  </div>
                </div>
                <div className="amenities-detail-icon">
                  <FaBed /> Central A/C
                </div>
              </div>
            </div>

            <div className="offplan-horizontal-line"></div>

            <div className="actual-details">
              <div className="actual-features">
                <h2>Description</h2>
                <p>Property Details:</p>
                <div class="description-container">
                  <p>
                    - 2 Bedroom - 3 Bathrooms - 2 Parking Space - Private Garden
                    - Open Kitchen
                  </p>
                </div>
                <CSSTransition
                  in={showMore}
                  timeout={300}
                  classNames="feature"
                  unmountOnExit
                >
                  <div className="transition-features">
                    <h3>Features:</h3>
                    <ul>
                      - Gym and swimming pool - Kids nursery and play area -
                      Mosque - Restaurants - Public Transport - 24 Hour video
                      security - Bicycle track - Tennis court - Shopping mall -
                      Indoor health club - kids pool
                    </ul>
                  </div>
                </CSSTransition>

                <button onClick={toggleShowMore} className="toggle-button">
                  {showMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>

            <div className="offplan-horizontal-line"></div>
            <MortgageCalculator />
            <div className="offplan-horizontal-line"></div>

            <div className="regulatory-info-container">
              <h2 className="regulatory-info-heading">
                Regulatory Information
              </h2>
              <div className="regulatory-info-content">
                <div className="regulatory-info-list-container">
                  <ul>
                    <li>Reference</li>
                    <li>Listed</li>
                    <li>Broker ORN</li>
                    <li>Zone name</li>
                    <li>DLD Permit Number</li>
                  </ul>
                </div>
                <div className="regulatory-info-values-container">
                  <ul>
                    <li>agco-9229478</li>
                    <li>14 days ago</li>
                    <li>26074</li>
                    <li>Madinat Hind 4</li>
                    <li>
                      <a href="https://example.com">65489540484</a>
                    </li>
                  </ul>
                </div>
                <div className="regulatory-info-qr-container">
                  <img src="" alt="QR Code" />
                  <p>DLD Permit Number</p>
                </div>
              </div>
            </div>
            <div className="offplan-horizontal-line"></div>
          </div>
          <div className="offplan-right-ad-container">
            <img
              src={offplanimage}
              alt="Small Property"
              className="small-image"
            />
          </div>
        </div>
      </div>
      {isModalOpen && <UpfrontCostModal onClose={closeModal} />}
    </section>
  );
};

export default PropertyPage;
