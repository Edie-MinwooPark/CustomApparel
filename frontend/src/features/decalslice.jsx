import { createSlice } from "@reduxjs/toolkit";

export const decalSlice = createSlice({
    name : "decal",
    initialState : {
        decalName : ["kga2.png"],
        decalNum : 0,
        decalText : 0,
        decalMyPic : []
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
        },
        decalText : (state,action)=>{
            state.decalText += 1;
        },
        decalMyPic : (state,action)=>{
            state.decalMyPic.push(action.payload);
        }
    }
})

export const { decalName, decalNum, decalText, decalMyPic } = decalSlice.actions;