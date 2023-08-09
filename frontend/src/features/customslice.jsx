import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const customSlice = createSlice({
  name: "custom",
  initialState: {
    basic: [
      {
        id: 1,
        name: "개쩌는 민우의 나이키 티셔츠",
        color: ["red", "yellow", "green", "blue", "orange", "navy"],
        size: ["S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        id: 2,
        name: "개쩌는 민우의 두번째 나이키 티셔츠",
        color: ["red", "yellow", "green", "blue", "orange", "navy"],
        size: ["S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        id: 3,
        name: "개쩌는 민우의 세번째 나이키 티셔츠",
        color: ["red", "yellow", "green", "blue", "orange", "navy"],
        size: ["S", "M", "L", "XL", "2XL", "3XL"],
      },
      {
        id: 4,
        name: "개쩌는 민우의 네번째 나이키 티셔츠",
        color: ["red", "yellow", "green", "blue", "orange", "navy"],
        size: ["S", "M", "L", "XL", "2XL", "3XL"],
      },
    ],
  },
  reducers: {},
});
