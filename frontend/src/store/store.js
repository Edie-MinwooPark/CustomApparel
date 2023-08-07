import { configureStore } from "@reduxjs/toolkit"; // createstore랑 비슷하다 다만 기능추가
import { userSlice } from "../features/mainslice";
import { myPageSlice } from "../features/mypageslice";

export const store = configureStore({
  reducer: {
    // 가게만들면서 메뉴판 전달
    user: userSlice.reducer,
    mypage: myPageSlice.reducer,
  },
});
