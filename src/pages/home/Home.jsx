import React from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import villa from "../../assets/villaa.jpg";
import dummy_property from "../../assets/dummy_property.jpg";
import video from "../../assets/home_video.mp4";
import { Link } from "react-router-dom";
import Newsletter from "../../components/newsletter/Newsletter";
import Testimonial from "../../components/testimonials/Testimonial";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const partners = [
  villa,
  villa,
  villa,
  villa,
  villa,
  villa,
  villa,
  villa,
  villa,
  villa,
];
const properties = [
  {
    id: 1,
    image: villa,
    title: "Villa On Washington Avenue",
    location: "Oregon, Homeland Street, plot 345",
    price: "450,000 AED",
    beds: 3,
    baths: 2,
    area: "3000 sq ft",
  },
  {
    id: 2,
    image: villa,
    title: "Awesome Family Home",
    location: "Oregon, Homeland Street, plot 345",
    price: "450,000 AED",
    beds: 3,
    baths: 2,
    area: "3000 sq ft",
  },
  {
    id: 3,
    image: villa,
    title: "Agile Real Estate Group",
    location: "Oregon, Homeland Street, plot 345",
    price: "450,000 AED",
    beds: 3,
    baths: 2,
    area: "3000 sq ft",
  },
  {
    id: 4,
    image: villa,
    title: "Villa On Washington Avenue",
    location: "Oregon, Homeland Street, plot 345",
    price: "450,000 AED",
    beds: 3,
    baths: 2,
    area: "3000 sq ft",
  },
  {
    id: 5,
    image: villa,
    title: "Awesome Family Home",
    location: "Oregon, Homeland Street, plot 345",
    price: "450,000 AED",
    beds: 3,
    baths: 2,
    area: "3000 sq ft",
  },
  {
    id: 6,
    image: villa,
    title: "Agile Real Estate Group",
    location: "Oregon, Homeland Street, plot 345",
    price: "450,000 AED",
    beds: 3,
    baths: 2,
    area: "3000 sq ft",
  },
];

const PropertyCard = ({ property }) => {
  return (
    <div className="propertycard">
      <img src={property.image} alt={property.title} />
      <div className="card-info">
        <h4 className="card-title">{property.title}</h4>
        <p className="location">{property.location}</p>
        <div className="card-details">
          <div className="detail">
            <FaBed /> {property.beds} Beds
          </div>
          <div className="detail">
            <FaBath /> {property.baths} Bathrooms
          </div>
          <div className="detail">
            <FaRulerCombined /> {property.area}
          </div>
        </div>
        <div className="card-price">
          <span>{property.price}</span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <section className="hero">
        <video
          className="background-video"
          src="https://ggfx-whiteandco.s3.eu-west-2.amazonaws.com/i.prod/home_banner_video_a736cf348b.mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="container">
          <h1>We Open Doors</h1>
          <form className="flex-form">
            <div className="tabs">
              <button className="tab">Rent</button>
              <button className="tab">Buy</button>
              <button className="tab">New projects</button>
              <button className="tab">Commercial</button>
            </div>
            <div className="fields">
              <div className="box">
                <input type="text" placeholder="City, community or building" />
              </div>
              <div className="box">
                <select>
                  <option value="">Property type</option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="compound">Compound</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>
              <div className="box">
                <select>
                  <option value="">Beds & Baths</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className="search-btn">
                <i className="fa fa-search"></i> Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="property-container">
        <div className="secTitle">
          <h3 className="title">Explore new projects in the UAE</h3>
          <p className="subtitle">
            Discover the latest off-plan properties and be informed.
          </p>
          <div className="places">
            <button className="place active">Dubai</button>
            <button className="place">Abu Dhabi</button>
            <button className="place">Sharjah</button>
            <button className="place">Ras Al Khaimah</button>
          </div>
        </div>

        <div className="secContent">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <div className="choose-container">
          <h2 className="heading">Why Asquared Real Estate?</h2>
          <p className="description">
            Choose Asquared Real Estate for unparalleled expertise and
            personalized service in the dynamic Dubai property market. With a
            commitment to excellence, transparency, and client satisfaction, we
            strive to make your real estate journey seamless and successful.
            Trust us to guide you through every step, whether buying, selling,
            or renting properties in Dubai.
          </p>
          <div className="features">
            <div className="feature-card">
              <img src={dummy_property} alt="Better Peoples" />
              <div className="feature-content">
                <h3>Better Peoples</h3>
                <p>
                  250+ community specialists Excellent 4.3/5 rating on Google
                  Reviews
                </p>
                <Link to="/buy">EXPLORE LISTINGS →</Link>
              </div>
            </div>
            <div className="feature-card">
              <img src={dummy_property} alt="Better exposure" />
              <div className="feature-content">
                <h3>Better exposure</h3>
                <p>
                  UAE’s highest leads generator Largest active database of
                  750,000+
                </p>
                <Link to="/buy">EXPLORE LISTINGS →</Link>
              </div>
            </div>
            <div className="feature-card">
              <img src={dummy_property} alt="Better results" />
              <div className="feature-content">
                <h3>Better results</h3>
                <p>30,000+ properties sold 8,500+ managed units</p>
                <Link to="/buy">EXPLORE LISTINGS →</Link>
              </div>
            </div>
            <div className="feature-card">
              <img src={dummy_property} alt="Better insights" />
              <div className="feature-content">
                <h3>Better insights</h3>
                <p>38 years of market experience Unrivalled market knowledge</p>
                <Link to="/buy">EXPLORE LISTINGS →</Link>
              </div>
            </div>
          </div>
          <button className="list-property-button">List Your Property</button>
        </div>
      </section>
      <Newsletter />

      <section className="partners-carousel">
        <div className="partners-container">
          <h2>PARTNERS WITH DUBAI’S LEADING DEVELOPERS</h2>
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="partner-slide">
                <img
                  src={partner}
                  alt={`Partner ${index + 1}`}
                  className="partner-logo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Testimonial/>
    </>
  );
};

export default Home;
