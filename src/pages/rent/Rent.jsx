import React from "react";
import { useState, useEffect } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { BuyListingApi } from "../../services/ListingApis";
import "./Rent.css";

const Rent = () => {
  const [rentListingData, setRentListingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const buyListing = await BuyListingApi();
        setRentListingData(buyListing?.rentalListings);
        console.log(buyListing?.rentalListings);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <SearchBar currentPageType="rent" />
      <div className="rent-container">
        {rentListingData.map((listing, index) => (
          <ListingCard key={index} listing={listing} />
        ))}
      </div>
    </>
  );
};

export default Rent;
