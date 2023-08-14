import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const PROXY = process.env.REACT_APP_PROXY;
export const getPaymentDetailinfo = createAsyncThunk("payment/", async () => {
  try {
    console.log("getPaymentDetailinfo slice에 접근함");
    const response = await axios.get(`${PROXY}/payment/paymentdetail`, {
      withCredentials: true,
    });
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const getPaymenthistorydetails = createAsyncThunk(
  "payment/paymenthistorydetails",
  async (data) => {
    try {
      console.log("Paymenthistorydetails slice에 접근함");
      const response = await axios.post(
        `${PROXY}/payment/paymenthistorydetails`,
        { imp_uid: data },
        {
          withCredentials: true,
        }
      );
      // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Paymenthistorydetails", error);
    }
  }
);

export const postpaymentsucceeded = createAsyncThunk(
  "payment/paymentsucceeded",
  async (value) => {
    try {
      console.log("postpaymentsucceeded slice에 접근함");
      const response = await axios.post(
        `${PROXY}/payment/paymentsucceeded`,
        { Unique_payment_number: value },
        {
          withCredentials: true,
        }
      );
      // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
      console.log("postpaymentsucceeded데이터", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState: {
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // 비동기 액션의 성공 시 상태 업데이트
    builder.addCase(getPaymentDetailinfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});
