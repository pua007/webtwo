import { configureStore } from "@reduxjs/toolkit";
import userReducer from  '@/store/user.js'
import playerReducer from '@/store/player'
import boardReducer from '@/store/board'
import mproductReducer from '@/store/mproduct.js'

const store = configureStore({
  reducer: {
    players: playerReducer,
    users: userReducer,
    boards : boardReducer,
    mproducts: mproductReducer
  }
})

export default store;