import React from 'react';
import MedicineTop2 from './medicinecommon/MedicineTop2';
import MedicineCategory from './medicinecommon/MedicineCategory';
import MedicineProductsCategory from './medicineproducts/MedicineProductsCategory';
import MedicineProductsSection from './medicineproducts/MedicineProductsSection';

const MedicineProductsView = () => {
  return (
    <div>
      <MedicineTop2 title='제품소개' />
      <MedicineCategory />
      <MedicineProductsCategory />
      <MedicineProductsSection />
    </div>
  );
};

export default MedicineProductsView;