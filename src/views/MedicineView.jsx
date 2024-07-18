import React from 'react';
import { Outlet } from 'react-router-dom';

const MedicineView = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MedicineView;