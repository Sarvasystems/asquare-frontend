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
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
  },
  {
    image:
      "https://www.propertyfinder.ae/property/b8a5415d6ab…a/416/272/MODE/47baff/11805976-e16deo.webp?ctr=ae",
    price: "1,650,000",
    description: "Brand New | Downtown View | Vacant | High Floor",
    bedrooms: 1,
    bathrooms: 1,
    size: 716,
    agentImage: "path/to/agent2.jpg",
    listedDate: "4 days",
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
  },
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
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
  },
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
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
  },
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
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
  },
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
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
  },
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
    location: "The Crest - Sobha Hartland - Mohammed Bin Rashid City - Dubai",
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
