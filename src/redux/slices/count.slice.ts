import { createSlice } from "@reduxjs/toolkit";

type TCounterState = {
  value: number;
};

const initialState: TCounterState = {
  value: 0,
};

export const countSlice = createSlice({
  name: "countSlice",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value += 1;
    },
    decrementCount: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementCount, decrementCount } = countSlice.actions;
export default countSlice;
