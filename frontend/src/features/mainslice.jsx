import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const PROXY = process.env.REACT_APP_PROXY;

export const getUserinfo = createAsyncThunk(
  "user/getinfo",
  async (userId, thunkAPI) => {
    const response = await axios.get(`${PROXY}/user/viewUser`);
    const data = await response.json();
    return data; // The resolved data will be the payload of the success action
  }
);
export const setUserinfo = createAsyncThunk("user/setinfo", async (form) => {
  try {
    const response = await axios.post(`${PROXY}/user/signup`, form, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8",
      },
      withCredentials: true,
    });

    console.log("Delivered successfully.");
    console.log(response.data);
    return response.data; // 성공 액션의 페이로드로 응답 데이터를 반환합니다
  } catch (err) {
    console.log(err);
    // 여기서 오류를 throw하여 거부된 액션에서 잡을 수 있습니다
    throw err;
  }
});
export const trylogininfo = createAsyncThunk("user/login", async (data) => {
  try {
    const response = await axios.post(`${PROXY}/user/login`, data, {
      withCredentials: true,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
});
export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserinfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserinfo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUserinfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
