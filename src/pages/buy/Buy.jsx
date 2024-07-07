import React, { useState, useEffect } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import "./Buy.css";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { BuyListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";

const Buy = () => {
  const [buyListingData, setBuyListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

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
      <SearchBar
        currentPageType="buy"
        onFilter={handleFilter}
        onClear={handleClearFilter}
      />
      <div className="buy-container">
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
    </>
  );
};

export default Buy;
