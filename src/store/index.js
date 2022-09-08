import { configureStore } from "@reduxjs/toolkit";
import {todoSlice} from "./todoSlice";
import { authSlice } from "./authSlice";


export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
    auth: authSlice.reducer
  },
});
