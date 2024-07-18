import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: null
  },
  reducers: {
    addUsers(state, action) {
      state.users.push(action.payload)
    },
    userLogin(state, action) {
      const {userId, userPw} = action.payload
      const findUser = state.users.find(item=>item.userId == userId && item.userPw == userPw)
      state.user = findUser ? findUser : null
    },
    userLogout(state, action) {
      state.user = null
    }
  }
})

export const {addUsers, userLogin, userLogout} = userSlice.actions;

export default userSlice.reducer
