import React from 'react';
import { FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import "./home.css";
import dummy_property from "../../assets/dummy_property.jpg";
import video from "../../assets/home_video.mp4";

const properties = [
  {
    id: 1,
    image: dummy_property,
    distance: '1.2km Away',
    status: 'For Sale',
    title: 'Villa On Washington Avenue',
    location: 'Oregon, Homeland Street, plot 345',
    price: '$450,000',
    beds: 3,
    baths: 2,
    area: '3000 sq ft',
  },
  {
    id: 2,
    image: dummy_property,
    distance: '1.2km Away',
    status: 'For Sale',
    title: 'Awesome Family Home',
    location: 'Oregon, Homeland Street, plot 345',
    price: '$450,000',
    beds: 3,
    baths: 2,
    area: '3000 sq ft',
  },
  {
    id: 3,
    image: dummy_property,
    distance: '1.2km Away',
    status: 'For Rent',
    title: 'Agile Real Estate Group',
    location: 'Oregon, Homeland Street, plot 345',
    price: '$450,000',
    beds: 3,
    baths: 2,
    area: '3000 sq ft',
  },
  {
    id: 4,
    image: dummy_property,
    distance: '1.2km Away',
    status: 'For Sale',
    title: 'Villa On Washington Avenue',
    location: 'Oregon, Homeland Street, plot 345',
    price: '$450,000',
    beds: 3,
    baths: 2,
    area: '3000 sq ft',
  },
  {
    id: 5,
    image: dummy_property,
    distance: '1.2km Away',
    status: 'For Sale',
    title: 'Awesome Family Home',
    location: 'Oregon, Homeland Street, plot 345',
    price: '$450,000',
    beds: 3,
    baths: 2,
    area: '3000 sq ft',
  },
  {
    id: 6,
    image: dummy_property,
    distance: '1.2km Away',
    status: 'For Rent',
    title: 'Agile Real Estate Group',
    location: 'Oregon, Homeland Street, plot 345',
    price: '$450,000',
    beds: 3,
    baths: 2,
    area: '3000 sq ft',
  }
];

const PropertyCard = ({ property }) => {
  return (
    <div className='propertycard'>
      <img src={property.image} alt={property.title} />
      <div className='card-info'>
        <div className='card-status'>
          <span className='distance'>{property.distance}</span>
          <span className='status'>{property.status}</span>
        </div>
        <h4 className='card-title'>{property.title}</h4>
        <p className='location'>{property.location}</p>
        <div className='card-details'>
          <div className='detail'>
            <FaBed /> {property.beds} Beds
          </div>
          <div className='detail'>
            <FaBath /> {property.baths} Bathrooms
          </div>
          <div className='detail'>
            <FaRulerCombined /> {property.area}
          </div>
        </div>
        <div className='card-price'>
          <span>{property.price}</span>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <section className='hero'>
        <video className='background-video' src={video} autoPlay muted loop></video>
        <div className='container'>
          <h1>We Open Doors</h1>
          <form className='flex-form'>
            <div className='tabs'>
              <button className='tab'>Rent</button>
              <button className='tab'>Buy</button>
              <button className='tab'>New projects</button>
              <button className='tab'>Commercial</button>
            </div>
            <div className='fields'>
              <div className='box'>
                <input type='text' placeholder='City, community or building' />
              </div>
              <div className='box'>
                <select>
                  <option value=''>Property type</option>
                  <option value='apartment'>Apartment</option>
                  <option value='villa'>Villa</option>
                  <option value='townhouse'>Townhouse</option>
                  <option value='penthouse'>Penthouse</option>
                  <option value='compound'>Compound</option>
                  <option value='duplex'>Duplex</option>
                </select>
              </div>
              <div className='box'>
                <select>
                  <option value=''>Beds & Baths</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
              </div>
              <button className='search-btn'>
                <i className='fa fa-search'></i> Search
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className='property-container'>
      <div className='secTitle'>
          <h3 className='title'>Explore new projects in the UAE</h3>
          <p className='subtitle'>Discover the latest off-plan properties and be informed.</p>
          <div className='places'>
            <button className='place active'>Dubai</button>
            <button className='place'>Abu Dhabi</button>
            <button className='place'>Sharjah</button>
            <button className='place'>Ras Al Khaimah</button>
          </div>
        </div>

        <div className='secContent'>
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home;