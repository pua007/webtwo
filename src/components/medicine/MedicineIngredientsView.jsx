import React from 'react';
import MedicineTop2 from './medicinecommon/MedicineTop2';
import MedicineCategory from './medicinecommon/MedicineCategory';
import MedicineIngredientSection from './medicineingredient/MedicineIngredientSection';

const MedicineIngredientsView = () => {
  return (
    <div>
      <MedicineTop2 title='의약품 효능군' />
      <MedicineCategory />
      <MedicineIngredientSection />
    </div>
  );
};

export default MedicineIngredientsView;