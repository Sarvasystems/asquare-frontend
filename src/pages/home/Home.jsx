import React from "react";
import "./Home.css";
import video from "../../assets/home_video.mp4";

const Home = () => {
  return (
    <>
      <section className="hero">
        <video
          className="background-video"
          src={video}
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
                <input type="text" placeholder="Property type" />
              </div>
              <div className="box">
                <input type="text" placeholder="Beds & Baths" />
              </div>
              <button className="search-btn">
                <i className="fa fa-search"></i> Search
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
