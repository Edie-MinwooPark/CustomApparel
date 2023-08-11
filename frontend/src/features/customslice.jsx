import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const customSlice = createSlice({
  name: "custom",
  initialState: {
    basic: [
      {
        id: 1,
        name: "개쩌는 민우의 나이키 티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "9,000",
        intprice: 9000,
      },
      {
        id: 2,
        name: "개쩌는 민우의 두번째 나이키 티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "10,000",
        intprice: 10000,
      },
      {
        id: 3,
        name: "개쩌는 민우의 세번째 나이키 티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "11,000",
        intprice: 11000,
      },
      {
        id: 4,
        name: "개쩌는 민우의 네번째 나이키 티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "12,000",
        intprice: 12000,
      },
    ],
  },
  reducers: {},
});
