import React from 'react';
import MedicineDetail from './medicineproducts/MedicineDetail';
import MedicineTop2 from './medicinecommon/MedicineTop2';
import { useLocation } from 'react-router-dom';

const MedicineDetailView = () => {
  const location = useLocation()
  const { item } = location.state

  return (
    <div>
      <MedicineTop2 />
      <MedicineDetail item={item} />
    </div>
  );
};

export default MedicineDetailView;