import {configureStore} from "@reduxjs/toolkit";
import postsSlice from "../features/postslice";  

export const store = configureStore(
    {
        reducer: {
            posts: postsSlice  
        }
    }
);
