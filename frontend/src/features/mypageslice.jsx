import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const PROXY = process.env.REACT_APP_PROXY;

export const getmypageinfo = createAsyncThunk("mypage/", async () => {
  try {
    const response = await axios.get(`${PROXY}/mypage/`, {
      withCredentials: true,
    });
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const myPageSlice = createSlice({
  name: "mypage",
  initialState: {
    data: null,
    image: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // 비동기 액션의 성공 시 상태 업데이트
    builder.addCase(getmypageinfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
