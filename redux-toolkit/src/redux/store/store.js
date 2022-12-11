import { configureStore } from "@reduxjs/toolkit";
// import { counterSlices } from "../slices/counterSlice";
import counterReducer from "../slices/counter/counterSliceCop";
const store = configureStore({
  reducer: {
    // counter: counterSlices,
    counter: counterReducer,
  },
});

export default store;
