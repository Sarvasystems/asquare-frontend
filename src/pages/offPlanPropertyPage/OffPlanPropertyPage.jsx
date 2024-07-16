import React, { useState } from "react";
import "./OffPlanPropertyPage.css";
import offplanimage from "../../assets/offplan_image.jpg";
import masterplan from "../../assets/offplan-masterplan-img.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import map from "../../assets/map.png";
import UnitAccordion from "../../components/accordion/UnitAccordion";
import MapComponent from "../../components/MapComponent";
import Footer from "../../components/footer/Footer";

const OffPlanPropertyPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
    <section className="offplan-property-section">
      <div className="offplan-containerr">
        <div className="offplan-propertyy-container">
          <div className="offplan-left-container">
            <img src={offplanimage} alt="Property" />
          </div>
          <div className="offplan-right-container">
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
        <div className="offplan-propertyy-info-container">
          <div className="offplan-left-container">
            <h1 className="offplan-heading">One B Tower</h1>
            <h3 className="offplan-sub-heading">Starting from 1,600,000 AED</h3>
            <h3 className="offplan-developer-name">
              Developer <br />
              Wasl Properties
            </h3>
            <div className="offplan-horizontal-line"></div>

            <div className="key-info-container">
              <h2 className="key-info-heading">Key information</h2>
              <div className="key-info-details">
                <div className="key-info-detail">
                  <p className="key-info-title">Delivery date</p>
                  <p>September 2028</p>
                  <p className="key-info-title">Payment plan</p>
                  <p>40/60</p>
                  <p className="key-info-title">Property types</p>
                  <p>Apartment, Duplex, Penthouse</p>
                </div>
                <div className="key-info-detail">
                  <p className="key-info-title">Number of buildings</p>
                  <p>1</p>
                  <p className="key-info-title">Government fee</p>
                  <p>4%</p>
                </div>
                <div className="key-info-detail">
                  <p className="key-info-title">Location</p>
                  <p>Dubai, Business Bay, One B Tower</p>
                  <img src={map} alt="Map" className="key-info-map" />
                </div>
              </div>
            </div>
            <div className="offplan-horizontal-line"></div>
            <div className="payment-plan-container">
              <h2 className="payment-plan-heading">Payment plan</h2>
              <div className="payment-plan-flex">
                <div className="payment-plan-box">
                  <h3>5%</h3>
                  <p>Down payment</p>
                </div>

                <div className="payment-plan-box">
                  <h3>35%</h3>
                  <p>During construction</p>
                </div>

                <div className="payment-plan-box">
                  <h3>60%</h3>
                  <p>On handover</p>
                </div>
              </div>
            </div>
            <div className="offplan-horizontal-line"></div>

            <div className="timeline-container">
              <h2>Project timeline</h2>
              <div className="timeline">
                <div className="timeline-item">
                  <FaCheckCircle className="icon" />
                  <div className="timeline-date">
                    <p>Project announcement</p>
                    <p>-</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <FaCheckCircle className="icon" />
                  <div className="timeline-date">
                    <p>Construction Started</p>
                    <p>14/05/2024</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <FaCheckCircle className="notcomp-icon" />
                  <div className="timeline-date">
                    <p>Expected Completion</p>
                    <p>14/05/2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="offplan-horizontal-line"></div>

            <UnitAccordion />

            <div className="offplan-horizontal-line"></div>

            <div className="offplan-about-details">
              <div className="offplan-about-description">
                <h2>About the Project</h2>
                <div class="offplan-about-description-container">
                  <p>
                    The Heights Country Club & Wellness by Emaar Properties is
                    an exquisite resort enclave nestled within the burgeoning
                    Dubailand district, adjacent to Al Yasayil Street.
                    Emphasizing opulence and resident well-being, The Heights
                    provides unparalleled luxury and holistic experiences within
                    this vibrant community. <br />
                    The Heights Country Club & Wellness will boast an expansive
                    landscape of 81 million sq. ft., offering a mix of luxurious
                    villas and townhouses complemented by many recreational and
                    entertainment amenities. This project promises an
                    unparalleled experience in upscale living and leisure. Step
                    into a realm of sophistication with exquisitely crafted
                    residences. From generous layouts to premium finishes, each
                    detail is thoughtfully curated to elevate your living
                    experience.
                  </p>
                  <CSSTransition
                    in={showMore}
                    timeout={300}
                    classNames="feature"
                    unmountOnExit
                  >
                    <div className="offplan-transition-features">
                      <p>
                        Conveniently positioned near Expo Road and Emirates
                        Road, The Heights Country Club & Wellness offers easy
                        access to key destinations. Al Maktoum International
                        Airport (DWC) is a brief 10-minute drive, while Jebel
                        Ali, a bustling center of economic and commercial
                        endeavors, is only 15 minutes away. Moreover, Dubai
                        Marina’s picturesque coastline is reachable within a
                        20-minute drive.
                      </p>
                    </div>
                  </CSSTransition>
                  <button onClick={toggleShowMore} className="toggle-button">
                    {showMore ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
            <div className="offplan-horizontal-line"></div>

            <div className="offplan-project-masterplan">
              <h2>Project masterplan</h2>
              <div className="masterplan-img">
                <img src={masterplan} alt="masterplan" />
              </div>
            </div>
            <div className="offplan-horizontal-line"></div>

            {/* <MapComponent/> */}

            <div className="offplan-amenities">
              <h2>Amenities</h2>
              <div className="offplan-amenities-container">
                <ul className="offplan-list">
                  <li>CCTV Security</li>
                  <li>Indoor Swimming Pool</li>
                  <li>Restaurants</li>
                </ul>
                <ul className="offplan-list">
                  <li>Gymnasium</li>
                  <li>Landscaped Gardens</li>
                  <li>Children's Play Area</li>
                </ul>
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
    </section>
    </>
  );
};

export default OffPlanPropertyPage;
