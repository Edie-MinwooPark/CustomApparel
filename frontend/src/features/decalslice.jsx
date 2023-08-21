import { createSlice } from "@reduxjs/toolkit";

export const decalSlice = createSlice({
    name : "decal",
    initialState : {
        decalName : [""],
        decalNum : 0
    },
    reducers : {
        decalName : (state,action)=>{
            state.decalName.push(action.payload);
        },
        decalNum : (state,action)=>{
            if(action.payload == "plus"){
                state.decalNum += 1;
            }else if(action.payload == 'minus'){
                state.decalNum -= 1;
            }else{
                state.decalNum = 0;
            }
        }
    }
})

export const { decalName, decalNum } = decalSlice.actions;