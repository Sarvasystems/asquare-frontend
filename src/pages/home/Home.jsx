import React from 'react';
import "./home.css";
import video from "../../assets/home_video.mp4";

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
    </>
  )
}

export default Home;