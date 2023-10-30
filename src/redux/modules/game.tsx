import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  id: number,
  value: number,
};

const initialState: InitialStateType = {
  id: 1,
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    down: (state, action) => {
      state.value = state.value - action.payload;
    },
    init: (state, action) => {
      state.value = 0;
    },
  },
});

export default counterSlice;
export const { up, down, init } = counterSlice.actions;
