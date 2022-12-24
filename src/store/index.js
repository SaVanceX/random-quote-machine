import { configureStore } from "@reduxjs/toolkit";
import QuoteReducer from "./slices/quote.slice";

export const store = configureStore({
  reducer: {
    quoteslice: QuoteReducer,
  },
});

export default store;
