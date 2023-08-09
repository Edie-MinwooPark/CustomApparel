import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const clothSlice = createSlice({
    name : "cloth",
    initialState : {
        clothColor : "blue",
        clothType : "tShirt"
    },
    reducers : {
        clothColor : (state,action)=>{
            state.clothColor = action.payload;
        },
        clothType : (state,action)=>{
            state.clothType = action.payload;
        }
    }
})

export const { clothColor, clothType } = clothSlice.actions