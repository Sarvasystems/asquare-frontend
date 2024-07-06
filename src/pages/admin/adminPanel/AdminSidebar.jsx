import React from 'react';

const AdminSidebar = ({ onSelectOption }) => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li onClick={() => onSelectOption('buy')}>Buy Listing</li>
        <li onClick={() => onSelectOption('rent')}>Rent Listing</li>
        <li onClick={() => onSelectOption('commercial')}>Commercial Listings</li>
        <li onClick={() => onSelectOption('project')}>New Project</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
