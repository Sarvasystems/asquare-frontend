import React, { useState } from 'react';
import axios from 'axios';
import './AddRentalListing.css'; 

const AddRentalListing = () => {
  const [listingData, setListingData] = useState({
    displayImages: [],
    title: '',
    price: 0,
    propertyType: '',
    furnishing: '',
    tagline: '',
    developer: {
      title: '',
      logo: ''
    },
    availableFrom: new Date().toISOString().split('T')[0],
    location: '',
    community: '',
    baths: '',
    beds: '',
    area: 0,
    soldType: '',
    description: '',
    amenities: [],
    transaction: {
      soldFor: [],
      rentedFor: []
    },
    priceTrends: [],
    regulatoryInformation: {
      reference: '',
      listed: '',
      brokerOrn: '',
      zoneName: '',
      dldPermitNumber: '',
      barcode: ''
    }
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedId, setUploadedId] = useState(null);
  const [showUploadFields, setShowUploadFields] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.');
    if (child) {
      setListingData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value
        }
      }));
    } else {
      setListingData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);
  };

  const handleAddListing = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/rentalListings/', listingData);
      const { _id } = response.data;
      setUploadedId(_id);
      setShowUploadFields(true); // Show upload fields after ID is received
    } catch (error) {
      console.error('Error adding listing:', error);
    }
  };

  const handleUploadImages = async () => {
    try {
      const formData = new FormData();
      imageFiles.forEach(file => {
        formData.append('images', file);
      });

      const response = await axios.post(`http://localhost:5000/api/rentalListings/upload/${uploadedId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Images uploaded successfully:', response.data);
      // Optionally clear the file input after successful upload
      setImageFiles([]);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  return (
    <div className="main-container">
      <h2>Add Rental Listing</h2>
      <div className="listing-form">
        {/* Flexbox layout for form */}
        <div className="form-section-container">
          {/* Basic Information */}
          <div className="form-section">
            <h3>Basic Information</h3>
            <label>Title:</label>
            <input type="text" name="title" value={listingData.title} onChange={handleInputChange} placeholder="Title" />

            <label>Price:</label>
            <input type="number" name="price" value={listingData.price} onChange={handleInputChange} placeholder="Price" />

            <label>Property Type:</label>
            <input type="text" name="propertyType" value={listingData.propertyType} onChange={handleInputChange} placeholder="Property Type" />

            <label>Furnishing:</label>
            <input type="text" name="furnishing" value={listingData.furnishing} onChange={handleInputChange} placeholder="Furnishing" />

            <label>Tagline:</label>
            <input type="text" name="tagline" value={listingData.tagline} onChange={handleInputChange} placeholder="Tagline" />

            <label>Developer Title:</label>
            <input type="text" name="developer.title" value={listingData.developer.title} onChange={handleInputChange} placeholder="Developer Title" />

            <label>Developer Logo:</label>
            <input type="text" name="developer.logo" value={listingData.developer.logo} onChange={handleInputChange} placeholder="Developer Logo URL" />

            <label>Available From:</label>
            <input type="date" name="availableFrom" value={listingData.availableFrom} onChange={handleInputChange} />
          </div>

          {/* Location and Property Details */}
          <div className="form-section">
            <h3>Location and Property Details</h3>
            <label>Location:</label>
            <input type="text" name="location" value={listingData.location} onChange={handleInputChange} placeholder="Location" />

            <label>Community:</label>
            <input type="text" name="community" value={listingData.community} onChange={handleInputChange} placeholder="Community" />

            <label>Baths:</label>
            <input type="text" name="baths" value={listingData.baths} onChange={handleInputChange} placeholder="Baths" />

            <label>Beds:</label>
            <input type="text" name="beds" value={listingData.beds} onChange={handleInputChange} placeholder="Beds" />

            <label>Area:</label>
            <input type="number" name="area" value={listingData.area} onChange={handleInputChange} placeholder="Area" />
          </div>

          {/* Transaction Details */}
          <div className="form-section">
            <h3>Transaction Details</h3>
            <label>Sold Type:</label>
            <input type="text" name="soldType" value={listingData.soldType} onChange={handleInputChange} placeholder="Sold Type" />

            <label>Description:</label>
            <textarea name="description" value={listingData.description} onChange={handleInputChange} placeholder="Description"></textarea>

            <label>Amenities:</label>
            <input type="text" name="amenities" value={listingData.amenities} onChange={handleInputChange} placeholder="Amenities (comma-separated)" />
          </div>

          {/* Regulatory Information */}
          <div className="form-section">
            <h3>Regulatory Information</h3>
            <label>Reference:</label>
            <input type="text" name="regulatoryInformation.reference" value={listingData.regulatoryInformation.reference} onChange={handleInputChange} placeholder="Reference" />

            <label>Listed:</label>
            <input type="text" name="regulatoryInformation.listed" value={listingData.regulatoryInformation.listed} onChange={handleInputChange} placeholder="Listed" />

            <label>Broker ORN:</label>
            <input type="text" name="regulatoryInformation.brokerOrn" value={listingData.regulatoryInformation.brokerOrn} onChange={handleInputChange} placeholder="Broker ORN" />

            <label>Zone Name:</label>
            <input type="text" name="regulatoryInformation.zoneName" value={listingData.regulatoryInformation.zoneName} onChange={handleInputChange} placeholder="Zone Name" />

            <label>DLD Permit Number:</label>
            <input type="text" name="regulatoryInformation.dldPermitNumber" value={listingData.regulatoryInformation.dldPermitNumber} onChange={handleInputChange} placeholder="DLD Permit Number" />

            <label>Barcode:</label>
            <input type="text" name="regulatoryInformation.barcode" value={listingData.regulatoryInformation.barcode} onChange={handleInputChange} placeholder="Barcode" />
          </div>

          {/* Conditional rendering for file upload */}
          {showUploadFields && (
            <span>{uploadedId}</span>
          )}
          {showUploadFields && (
            <div className="form-section">
              <h3>Upload Images</h3>
              <input type="file" multiple onChange={handleImageChange} />
              <button onClick={handleUploadImages} disabled={imageFiles.length === 0}>Upload Images</button>
            </div>
          )}
        </div>

        {/* Button to add listing */}
        <button onClick={handleAddListing}>Add Listing</button>
      </div>
    </div>
  );
};

export default AddRentalListing;
