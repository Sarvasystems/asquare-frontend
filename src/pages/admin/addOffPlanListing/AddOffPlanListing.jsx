import React, { useState } from 'react';
import axios from 'axios';
import './AddOffPlanListing.css'; 

const AddOffPlanListing = () => {
  const [listingData, setListingData] = useState({
    displayImages: [],
    title: '',
    rent: '',
    developer: {
      title: '',
      logo: ''
    },
    location: '',
    community: '',
    baths: '',
    beds: '',
    area: 0,
    city: '',
    information: {
      deliveryDate: new Date(),
      numberOfBuildings: 0,
      paymentPlan: '',
      governmentFees: 0,
      propertyType: ''
    },
    description: '',
    paymentPlan: {
      downPayment: 0,
      duringConstruction: 0,
      onHandover: 0
    },
    projectTimeline: {
      projectAnnouncement: new Date(),
      constructionStarted: new Date(),
      expectedCompletion: new Date()
    },
    units: {
      apartment: []
    },
    masterplan: [],
    amenities: []
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploadedId, setUploadedId] = useState(null);
  const [showUploadFields, setShowUploadFields] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setListingData({ ...listingData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleAddListing = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/offPlanListings/', listingData);
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
      formData.append('images', imageFile);

      const response = await axios.post(`http://localhost:5000/api/offPlanListings/upload/${uploadedId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Image uploaded successfully:', response.data);
      // Optionally clear the file input after successful upload
      setImageFile(null);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="main-container">
      <h2>Add Off-Plan Listing</h2>
      <div className="listing-form">
        {/* Flexbox layout for form */}
        <div className="form-section-container">
          {/* Basic Information */}
          <div className="form-section">
            <h3>Basic Information</h3>
            <label>Title:</label>
            <input type="text" name="title" value={listingData.title} onChange={handleInputChange} placeholder="Title" />

            <label>Rent:</label>
            <input type="text" name="rent" value={listingData.rent} onChange={handleInputChange} placeholder="Rent" />

            <label>Developer Title:</label>
            <input type="text" name="developer.title" value={listingData.developer.title} onChange={handleInputChange} placeholder="Developer Title" />

            <label>Developer Logo:</label>
            <input type="text" name="developer.logo" value={listingData.developer.logo} onChange={handleInputChange} placeholder="Developer Logo URL" />

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

            <label>City:</label>
            <input type="text" name="city" value={listingData.city} onChange={handleInputChange} placeholder="City" />
          </div>

          {/* Information */}
          <div className="form-section">
            <h3>Information</h3>
            <label>Delivery Date:</label>
            <input type="date" name="information.deliveryDate" value={listingData.information.deliveryDate} onChange={handleInputChange} />

            <label>Number of Buildings:</label>
            <input type="number" name="information.numberOfBuildings" value={listingData.information.numberOfBuildings} onChange={handleInputChange} />

            <label>Payment Plan:</label>
            <input type="text" name="information.paymentPlan" value={listingData.information.paymentPlan} onChange={handleInputChange} />

            <label>Government Fees:</label>
            <input type="number" name="information.governmentFees" value={listingData.information.governmentFees} onChange={handleInputChange} />

            <label>Property Type:</label>
            <input type="text" name="information.propertyType" value={listingData.information.propertyType} onChange={handleInputChange} />
          </div>

          {/* Payment Plan */}
          <div className="form-section">
            <h3>Payment Plan</h3>
            <label>Down Payment:</label>
            <input type="number" name="paymentPlan.downPayment" value={listingData.paymentPlan.downPayment} onChange={handleInputChange} />

            <label>During Construction:</label>
            <input type="number" name="paymentPlan.duringConstruction" value={listingData.paymentPlan.duringConstruction} onChange={handleInputChange} />

            <label>On Handover:</label>
            <input type="number" name="paymentPlan.onHandover" value={listingData.paymentPlan.onHandover} onChange={handleInputChange} />
          </div>

          {/* Project Timeline */}
          <div className="form-section">
            <h3>Project Timeline</h3>
            <label>Project Announcement:</label>
            <input type="date" name="projectTimeline.projectAnnouncement" value={listingData.projectTimeline.projectAnnouncement} onChange={handleInputChange} />

            <label>Construction Started:</label>
            <input type="date" name="projectTimeline.constructionStarted" value={listingData.projectTimeline.constructionStarted} onChange={handleInputChange} />

            <label>Expected Completion:</label>
            <input type="date" name="projectTimeline.expectedCompletion" value={listingData.projectTimeline.expectedCompletion} onChange={handleInputChange} />
          </div>

          {/* Conditional rendering for file upload */}
          {showUploadFields && (
            <div className="form-section">
              <h3>Upload Images</h3>
              <input type="file" onChange={handleImageChange} multiple/>
              <button onClick={handleUploadImages} disabled={!imageFile}>Upload Image</button>
            </div>
          )}
        </div>

        {/* Button to add listing */}
        <button onClick={handleAddListing}>Add Listing</button>
      </div>
    </div>
  );
};

export default AddOffPlanListing;
  