import React, { useRef, useEffect } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { TbMessagePlus } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import "./Contact.css";

const Contact = () => {
  const informationSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    });

    if (informationSectionRef.current) {
      observer.observe(informationSectionRef.current);
    }

    return () => {
      if (informationSectionRef.current) {
        observer.unobserve(informationSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="contact-section">
        <div className="contact-hero">
          <div className="contact-overlay">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtitle">ASQUARED REAL ESTATE</p>
          </div>
        </div>
        <div className="information-section" ref={informationSectionRef}>
          <div className="information-stats">
            <div className="info-stats">
              <div className="icon">
                <FiPhoneCall className="svg" />
                <p>Call Us</p>
                <span>(+971) 55 558 1554</span>
              </div>
            </div>
            <div className="info-stats">
              <div className="icon">
                <TbMessagePlus className="svg" />
                <p>Message Us</p>
                <span>info@asquaredre.com</span>
              </div>
            </div>
            <div className="info-stats">
              <div className="icon">
                <SlLocationPin className="svg" />
                <p>Stay connected</p>
                <span>Office No 2154 - Business Bay - Dubai</span>
              </div>
            </div>
          </div>
        </div>
        <div className="formm-section">
          <div className="form-container">
            <div className="form-content">
              <div className="contact-info">
                <h2>Contact us</h2>
                <span>
                  Get in touch with Asquared Real Estate for expert assistance
                  with buying, selling, or renting properties in Dubai. We're
                  here to help. Reach us via phone, email, or our contact form.
                </span>
                <p>
                  <strong>Contact us</strong>
                </p>
                <p>(+971) 55 558 1554</p>
              </div>
              <form>
                <div className="form-row">
                  <select className="form-select">
                    <option>Select</option>
                  </select>
                  <input
                    type="text"
                    placeholder="First name"
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="form-input flex-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="form-input flex-1"
                  />
                </div>
                <div className="form-row">
                  <select className="form-select">
                    <option>Property Type</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Zip code"
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="form-input"
                  />
                </div>
                <div className="form-row">
                  <input
                    type="number"
                    placeholder="N. of bedrooms"
                    className="form-input"
                  />
                  <input
                    type="number"
                    placeholder="N. of bathrooms"
                    className="form-input"
                  />
                  <input
                    type="text"
                    placeholder="Your budget"
                    className="form-input"
                  />
                </div>
                <button type="submit" className="form-submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
