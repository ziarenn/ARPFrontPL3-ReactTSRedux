import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
