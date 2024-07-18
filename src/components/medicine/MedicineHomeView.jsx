import React from 'react';
import HomeMiddle from './medicinehome/HomeMiddle';
import HomeMiddle2 from './medicinehome/HomeMiddle2';
import HomeBottom from './medicinehome/HomeBottom';
import MedicineTop from './medicinecommon/MedicineTop';
import MedicineCategory from './medicinecommon/MedicineCategory';

const MedicineHomeView = () => {
  return (
    <div>
      <MedicineTop title='회사개요' />
      <MedicineCategory />
      <HomeMiddle />
      <HomeMiddle2 />
      <HomeBottom />
    </div>
  );
};

export default MedicineHomeView;