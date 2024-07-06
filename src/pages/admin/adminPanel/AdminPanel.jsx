import React, { useState } from 'react';
import './AdminPanel.css';
import AdminSidebar from './AdminSidebar';
import AddRentalListing from '../addRentalListing/AddRentalListing';
import AddBuyListing from '../addBuyListing/AddBuyListing';
import AddCommercialListing from '../addCommericalListing/AddCommercialListing';
import AddOffPlanListing from '../addOffPlanListing/AddOffPlanListing';

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState('rent');

  const renderContent = () => {
    switch (selectedOption) {
      case 'buy':
        return <AddBuyListing />;
      case 'rent':
        return <AddRentalListing />;
      case 'commercial':
        return <AddCommercialListing />;
      case 'project':
        return <AddOffPlanListing />;
      default:
        return (
          <div className="admin-content">
            <h2>Welcome to Admin Panel</h2>
            <p>Please select an option from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <div className="sadmin-panel">
      <AdminSidebar onSelectOption={setSelectedOption} />
      <div className="admin-content-container">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPanel;
