import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const mproductSlice =createSlice({
  name: 'mproducts',
  initialState: {
    mproducts: [],
    category: 'all'
  },
  reducers: {
    initMproducts(state, action) {
      state.mproducts = action.payload
    },
    changeCategory(state, action) {
      state.category = action.payload
    }
  }
})

export const {initMproducts, changeCategory} = mproductSlice.actions

export const fetchMedicineProducts = () => async dispatch => {
  try {
    const response =  await axios.get('/assets/data/medicineproducts.json')
    console.log(response)
    dispatch(initMproducts(response.data))
  } catch (error) {
      console.error('Error fetching products:', error);
  }
}

export default mproductSlice.reducer