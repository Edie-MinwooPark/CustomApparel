import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const customSlice = createSlice({
  name: "custom",
  initialState: {
    basic: [
      {
        id: 1,
        name: "티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "9,000",
        cloth : "tshirt"
      },
      {
        id: 2,
        name: "긴팔셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "10,000",
        cloth : "longsleeveshirt"
      },
      {
        id: 3,
        name: "원피스",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "11,000",
        cloth : "onepiece"
      },
      {
        id: 4,
        name: "탱크탑",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "12,000",
        cloth : "tanktop"
      },
    ],
  },
  reducers: {},
});
