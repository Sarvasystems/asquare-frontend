import React, { useState, useEffect } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { RentListingApi } from "../../services/ListingApis";
import { navbarFilterApi } from "../../services/filterApis";
import "./Rent.css";

const Rent = () => {
  const [rentListingData, setRentListingData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rentListing = await RentListingApi();
        setRentListingData(rentListing?.rentalListings);
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
      <SearchBar
        currentPageType="rent"
        onFilter={handleFilter}
        onClear={handleClearFilter}
      />
      <div className="rent-container">
        {(isFiltered ? filterData : rentListingData)?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </>
  );
};

export default Rent;
