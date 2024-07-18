import React from 'react';
import MedicineTop from './medicinecommon/MedicineTop';
import MedicineCategory from './medicinecommon/MedicineCategory';
import MedicineFamilySection from './medicinefamily/MedicineFamilySection';

const MedicineFamilyView = () => {
  return (
    <div>
      <MedicineTop title='가족친화경영' />
      <MedicineCategory />
      <MedicineFamilySection />
    </div>
  );
};

export default MedicineFamilyView;