import React, { useState, useEffect, useRef } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { offPlanListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";
import "./OffPlan.css";

const OffPlan = () => {
  const offPlanSectionRef = useRef(null);
  const [offPlanListingData, setoffPlanListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const handleScroll = () => {
    if (offPlanSectionRef.current) {
      offPlanSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offPlanListing = await offPlanListingApi();
        setoffPlanListingData(offPlanListing?.rentalListings);
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
    <section className="offplan-section">
    <div className="offplan-hero">
          <div className="offplan-overlay">
            <h1 className="offplan-title">OFFPLAN</h1>
            <p className="offplan-subtitle">ASQUARED REAL ESTATE</p>
            <button className="explore-button" onClick={handleScroll}>
              Explore Now
            </button>
          </div>
        </div>
      <SearchBar onFilter={handleFilter} onClear={handleClearFilter} />
      <div className="offPlan-container" ref={offPlanSectionRef}>
        {(isFiltered ? filterData : offPlanListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
      </section>
    </>
  );
};

export default OffPlan;
