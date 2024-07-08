import React, { useState, useEffect, useRef } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { commercialListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";
import "./Commercial.css";

const Commercial = () => {
  const commercialSectionRef = useRef(null);
  const [commercialListingData, setCommercialListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleScroll = () => {
    if (commercialSectionRef.current) {
      commercialSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const commercialListing = await commercialListingApi();
        setCommercialListingData(commercialListing?.rentalListings);
        console.log(rentListing?.rentalListings);
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
    <section className="commercial-section">
    <div className="commercial-hero">
          <div className="commercial-overlay">
            <h1 className="commercial-title">COMMERCIAL</h1>
            <p className="commercial-subtitle">ASQUARED REAL ESTATE</p>
            <button className="explore-button" onClick={handleScroll}>
              Explore Now
            </button>
          </div>
        </div>
      <SearchBar onFilter={handleFilter} onClear={handleClearFilter} />
      <div className="commercial-container" ref={commercialSectionRef}>
        {(isFiltered ? filterData : commercialListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
      </section>
    </>
  );
};

export default Commercial;
