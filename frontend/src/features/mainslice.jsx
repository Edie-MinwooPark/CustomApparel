import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//예시코드
export const countSlice = createSlice({
  name: "count", // slice의 이름이다?ㅇㅇ slice의 구분이름 //초기값
  initialState: { num: 0 },
  reducers: {
    add: (state) => {
      // 이전 상태가 매개변수로 들어온다.
      state.num += 1;
    },
    remove: (state) => {
      state.num -= 1;
    },
  },
});
export const temp = createAsyncThunk("/temp", async () => {
  // axios
  const resp = await axios.get(""); // api요청 주소
  const { data } = resp;
  console.log(data);
  return data;
});

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
});

export const { add, remove } = countSlice.actions;
export default customSlice;
