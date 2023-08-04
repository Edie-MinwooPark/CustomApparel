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
    const response = await axios.post(`${PROXY}/user/signup`, form);
    console.log("Delivered successfully.");
    console.log(response.data);
    return response.data; // Return the response data as the payload of the success action
  } catch (err) {
    console.log(err);
    // You can throw an error here to be caught in the rejected action
    throw err;
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
