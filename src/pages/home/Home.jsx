import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import dummy_property from "../../assets/dummy_property.jpg";
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

const PropertyCard = ({ property }) => {
  return (
    <div className="propertycard">
      <img
        src={
          property.displayImages && property.displayImages.length > 0
            ? `http://localhost:5000${property.displayImages[0]}`
            : dummy_property
        }
        alt={property.title}
      />
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
  const [properties, setProperties] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Dubai");

  const fetchProperties = async (city) => {
    try {
      const response = await axios.get("http://localhost:5000/api/offplanlistings", {
        params: {
          limit: 6,
          page: 1,
          city: city
        },
      });
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const fetchDevelopers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/developers");
      setDevelopers(response.data);
    } catch (error) {
      console.error("Error fetching developers:", error);
    }
  };

  useEffect(() => {
    fetchProperties(selectedCity);
    fetchDevelopers();
  }, [selectedCity]);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

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
            {["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah"].map((city) => (
              <button
                key={city}
                className={`place ${selectedCity === city ? "active" : ""}`}
                onClick={() => handleCityChange(city)}
              >
                {city}
              </button>
            ))}
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
          <h2>DEVELOPERS PARTNERS</h2>
          <Slider {...settings}>
            {developers.length > 0 &&
              developers.map((developer, index) => (
                <div key={index} className="feature-card">
                  <img
                    src={developer.logo}
                    alt={`Developer ${index + 1}`}
                    className="feature-logo"
                  />
                  <div className="feature-content">
                    <h3>{developer.title}</h3>
                    <Link to="/buy">EXPLORE LISTINGS →</Link>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>
      <Testimonial />
    </>
  );
};

export default Home;
