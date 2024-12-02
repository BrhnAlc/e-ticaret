import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/ProductSlice";
import { AppSlice } from "./slices/AppSlice";


export const store = configureStore({
  reducer: {
    app:AppSlice,
    product:productsSlice
  },
});

