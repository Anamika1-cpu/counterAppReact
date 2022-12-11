import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("increment/counter");
export const increasedByAmount = createAction("increasedByAmount/counter");
export const decrement = createAction("decrement/counter");

//reducers
//1.using builder notation
const initialState = {
  value: 0,
};

// export const counterSlices = createReducer(initialState, (builder) => {
//   builder.addCase(increment, (state, action) => {
//     state.value++;
//   });
//   builder.addCase(decrement, (state, action) => {
//     state.value--;
//   });
//   builder.addCase(increasedByAmount, (state, action) => {
//     state.value += action.payload;
//   });
// });

//2.Map notation

export const counterSlices = createReducer(initialState, {
  [increment]: (state, action) => {
    state.value++;
  },
  [decrement]: (state, action) => {
    state.value--;
  },
  [increasedByAmount]: (state, action) => {
    state.value += action.payload;
  },
});
