import React from 'react';
import MedicineTop from './medicinecommon/MedicineTop';
import MedicineCategory from './medicinecommon/MedicineCategory';
import HistorySection from './medicinehistory/HistorySection';

const MedicineHistoryView = () => {
  return (
    <div>
      <MedicineTop title='연혁' />
      <MedicineCategory />
      <HistorySection />
    </div>
  );
};

export default MedicineHistoryView;