import React, { useState, useEffect } from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import "./Buy.css";
import SearchBar from "../../components/filterNavbar/FilterNavbar";
import { BuyListingApi } from "../../services/ListingApis";

const Buy = () => {
  const [buyListingData, setBuyListingData] = useState([]);

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

  return (
    <>
      <SearchBar currentPageType="buy" />
      <div className="buy-container">
        {buyListingData?.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </>
  );
};

export default Buy;
