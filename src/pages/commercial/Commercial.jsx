import React, { useState, useEffect } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { commercialListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";
import "./Commercial.css";

const Commercial = () => {
  const [commercialListingData, setCommercialListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

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
      <SearchBar onFilter={handleFilter} onClear={handleClearFilter} />
      <div className="commercial-container">
        {(isFiltered ? filterData : commercialListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </>
  );
};

export default Commercial;
