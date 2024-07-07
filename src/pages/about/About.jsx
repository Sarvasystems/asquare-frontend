import React, { useEffect, useRef } from "react";
import "./About.css";
import Testimonial from "../../components/testimonials/Testimonial";

const About = () => {
  const missionSectionRef = useRef(null);
  const whyChooseRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    });

    if (missionSectionRef.current) {
      observer.observe(missionSectionRef.current);
    }

    if (whyChooseRef.current) {
      observer.observe(whyChooseRef.current);
    }

    return () => {
      if (missionSectionRef.current) {
        observer.unobserve(missionSectionRef.current);
      }
      if (whyChooseRef.current) {
        observer.unobserve(whyChooseRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="about-section">
        <div className="about-hero">
          <div className="about-overlay">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">ASQUARED REAL ESTATE</p>
          </div>
        </div>
        <div className="mission-section" ref={missionSectionRef}>
          <h2 className="mission-title">Our Mission</h2>
          <div className="mission-content">
            <p className="mission-text-left">
              At Asquared Real Estate, our mission is to set the standard for
              excellence in the Dubai property market. We are dedicated to
              providing exceptional service and expert guidance to clients
              looking to buy, sell, or rent properties. Our goal is to make the
              real estate process as seamless and stress-free as possible.{" "}
              <br />
              <br /> We believe that finding the perfect home or investment
              should be an exciting and rewarding experience. Our team of
              experienced professionals is committed to understanding the unique
              needs and preferences of each client.
            </p>
            <p className="mission-text-right">
              We offer personalized solutions, tailored to meet individual
              requirements, ensuring that every client feels valued and
              understood. <br /> <br /> With an in-depth knowledge of the local
              market, we provide insightful advice and up-to-date information,
              helping clients make informed decisions. Transparency, integrity,
              and customer satisfaction are at the core of our business
              practices. We strive to build lasting relationships with our
              clients, based on trust and mutual respect.
            </p>
          </div>
        </div>
        <div className="why-choose-section" ref={whyChooseRef}>
          <h2 className="why-choose-title">Why Choose Asquared</h2>
          <p className="why-choose-description">
            Asquared Real Estate is an integrated real estate service provider
            offering a world-class real estate service to individuals and
            institutional clients.
            <br />
            <br />
            Our vision is to be the preferred partner for all your Dubai real
            estate needs. And the company's mission is to make your investment
            journey simple, seamless, and satisfying through an integrated
            approach.
          </p>
          <div className="why-choose-stats">
            <div className="stat">
              <h3>20 BILLION</h3>
              <p>Transactions (AED)</p>
            </div>
            <div className="stat">
              <h3>4.9/5</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Languages Spoken</p>
            </div>
            <div className="stat">
              <h3>5000+</h3>
              <p>Properties sold so far</p>
            </div>
          </div>
        </div>
        <Testimonial />
      </section>
    </>
  );
};

export default About;
