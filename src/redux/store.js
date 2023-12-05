import { configureStore } from "@reduxjs/toolkit";
import resultReducer from "./slices/resultSlice";
const appStore = configureStore({
  reducer: {
    result: resultReducer,
  },
});

export default appStore;