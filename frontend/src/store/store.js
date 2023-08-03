import {configureStore} from "@reduxjs/toolkit"; // createstore랑 비슷하다 다만 기능추가
import { countSlice} from "../features/mainslice";

export const store = configureStore(
    {
        reducer: {
            // 가게만들면서 메뉴판 전달
            count : countSlice.reducer,
        

        }
    }
)
