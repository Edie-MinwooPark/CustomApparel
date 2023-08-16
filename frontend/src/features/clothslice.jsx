import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const clothSlice = createSlice({
    name : "cloth",
    initialState : {
        clothColor : "white",
        clothType : "tshirt"
    },
    reducers : {
        clothColor : (state,action)=>{
            console.log(action);
            state.clothColor = action.payload;
        },
        clothType : (state,action)=>{
            state.clothType = action.payload;
        }
    }
})

export const { clothColor, clothType } = clothSlice.actions