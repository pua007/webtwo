import React from 'react';
import MedicineTop from './medicinecommon/MedicineTop';
import MedicineCategory from './medicinecommon/MedicineCategory';
import MedicineMap from './medicinelocation/MedicineMap';

const MedicineLocationView = () => {
  return (
    <div>
      <MedicineTop title='찾아오시는 길' />
      <MedicineCategory />
      <MedicineMap />
    </div>
  );
};

export default MedicineLocationView;