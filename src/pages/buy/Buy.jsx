import React, { useState, useEffect, useRef } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import "./Buy.css";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { BuyListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";

const Buy = () => {
  const buySectionRef = useRef(null);
  const [buyListingData, setBuyListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleScroll = () => {
    if (buySectionRef.current) {
      buySectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyListing = await BuyListingApi();
        setBuyListingData(buyListing?.rentalListings);
        console.log(buyListing?.rentalListings);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleFilter = async (filterCriteria) => {
    try {
      const filterData = await navbarFilterApi(filterCriteria);
      setFilterData(filterData?.rentalListings);
      setIsFiltered(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClearFilter = () => {
    setIsFiltered(false);
    setFilterData([]);
  };

  return (
    <>
    <section className="buy-section">
    <div className="buy-hero">
          <div className="buy-overlay">
            <h1 className="buy-title">BUY</h1>
            <p className="buy-subtitle">ASQUARED REAL ESTATE</p>
            <button className="explore-button" onClick={handleScroll}>
              Explore Now
            </button>
          </div>
        </div>
      <SearchBar
        currentPageType="buy"
        onFilter={handleFilter}
        onClear={handleClearFilter}
      />
      <div className="buy-container" ref={buySectionRef}>
        {(isFiltered ? filterData : buyListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
        {(isFiltered ? filterData : buyListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
        {(isFiltered ? filterData : buyListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
        {(isFiltered ? filterData : buyListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
      </section>
    </>
  );
};

export default Buy;
