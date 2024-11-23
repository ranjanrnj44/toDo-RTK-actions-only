import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CounterModel from "../../models/counterModel";

const initialState: CounterModel = {
  countValue: 0,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    // defining actions
    increment: (state) => {
      state.countValue += 1;
    },
    decrement: (state) => {
      state.countValue -= 1;
    },
    increaseBy: (state, action: PayloadAction<number>) => {
      state.countValue += action.payload;
    },
    decreaseBy: (state, action: PayloadAction<{ num: number }>) => {
      state.countValue -= action.payload.num;
    },
    reset: (state) => {
      state.countValue = 0;
    },
  },
});

export const { increment, decrement, decreaseBy, increaseBy, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
