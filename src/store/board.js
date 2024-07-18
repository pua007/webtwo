import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
    name:"boards",
    initialState:{
        board : [],  // [ {writer:"", subject:"", category:"",  content:"", date:"", hit:0}]
    },
    reducers : {
        initBoard(state, action){
            state.board.unshift(action.payload)
        },
        modifyBoard(state, action) {
            const {writer, subject, category, content, date, hit } = action.payload
            const index = state.board.findIndex(item=>item.date==date)
            if (index!==-1) {
                    state.board[index] = {writer:writer, subject:subject,
                    category:category, content:content, date:date, hit:hit
                }
            } 
            
        },
        removeBoard(state, action) {
                const {date} = action.payload
                const index = state.board.findIndex(item=>item.date==date)
                if (index!==-1) {
                    state.board.splice(index, 1)
                }
            }
        }
    })

export const { initBoard, modifyBoard, removeBoard }= boardSlice.actions;

export default boardSlice.reducer;