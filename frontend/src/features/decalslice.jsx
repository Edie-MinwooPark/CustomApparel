import { createSlice } from "@reduxjs/toolkit";

export const decalSlice = createSlice({
    name : "decal",
    initialState : {
        decalName : [],
        decalNum : 0
    },
    reducers : {
        decalName : (state,action)=>{
            state.decalName = action.payload;
        },
        decalNum : (state,action)=>{
            state.decalNum += 1;
        }
    }
})

export const { decalName, decalNum } = decalSlice.actions;