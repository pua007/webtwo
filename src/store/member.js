import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const memberSlice = createSlice({
    name: 'members',
    initialState: {
        members: [],
    },
    reducers: {
        initMembers(state, action) {
            state.members = action.payload;
        },
    },
});

export const { initMembers } = memberSlice.actions;

export const patchMembers = () => async (dispatch) => {
    try {
        console.log(dispatch);
        const membersData = await axios.get('./../assets/data/memberdata.json');

        console.log(membersData);
        dispatch(initMembers(membersData.data));
    } catch (error) {
        console.error('Error patching members data', error);
    }
};

export default memberSlice.reducer;
