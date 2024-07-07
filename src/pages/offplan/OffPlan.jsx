import React, { useState, useEffect } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { offPlanListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";
import "./OffPlan.css";

const OffPlan = () => {
  const [offPlanListingData, setoffPlanListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

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
      <SearchBar onFilter={handleFilter} onClear={handleClearFilter} />
      <div className="offPlan-container">
        {(isFiltered ? filterData : offPlanListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </>
  );
};

export default OffPlan;
