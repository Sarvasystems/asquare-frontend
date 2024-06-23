import React from "react";
import ListingCard from "../../components/listingCard/ListingCard";
import "./Rent.css";

const listings = [
  {
    image:
      "https://www.propertyfinder.ae/property/b8a5415d6ab…a/416/272/MODE/47baff/11805976-e16deo.webp?ctr=ae",
    price: "1,475,000",
    description: "Fully Furnished | Vacant | Prime Location",
    bedrooms: 1,
    bathrooms: 1,
    size: 854,
    agentImage: "path/to/agent1.jpg",
    listedDate: "2 days",
  },
  {
    image:
      "https://www.propertyfinder.ae/property/b8a5415d6ab…a/416/272/MODE/47baff/11805976-e16deo.webp?ctr=ae",
    price: "1,350,000",
    description: "3BR | Corner | Single Row | Road View Next Pool",
    bedrooms: 3,
    bathrooms: 3,
    size: 1901,
    agentImage: "path/to/agent2.jpg",
    listedDate: "3 days",
  },
];

const Rent = () => {
  return (
    <div className="rent-container">
      {listings.map((listing, index) => (
        <ListingCard key={index} listing={listing} />
      ))}
    </div>
  );
};

export default Rent;
